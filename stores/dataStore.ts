"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import {
  Patient,
  Doctor,
  Hospital,
  Appointment,
  MedicalRecord,
  Practitioner,
  QueueEntry,
  Transaction,
  HomeCareBooking,
} from "@/types";
import {
  patientsData,
  doctorsData,
  hospitalsData,
  appointmentsData,
  medicalRecordsData,
  practitionersData,
  queueData,
  transactionsData,
  homeCareBookingsData,
} from "@/data/mockData";

interface DataStore {
  patients: Patient[];
  doctors: Doctor[];
  hospitals: Hospital[];
  appointments: Appointment[];
  medicalRecords: MedicalRecord[];
  practitioners: Practitioner[];
  queue: QueueEntry[];
  transactions: Transaction[];
  homeCareBookings: HomeCareBooking[];
  currentPatientId: string | null;

  setCurrentPatient: (patientId: string) => void;
  getCurrentPatient: () => Patient | undefined;
  updatePatient: (id: string, data: Partial<Patient>) => void;

  addAppointment: (appointment: Omit<Appointment, "id" | "createdAt">) => Appointment;
  updateAppointment: (id: string, data: Partial<Appointment>) => void;
  cancelAppointment: (id: string) => void;
  getPatientAppointments: (patientId: string) => Appointment[];

  addMedicalRecord: (record: Omit<MedicalRecord, "id">) => MedicalRecord;
  getPatientRecords: (patientId: string) => MedicalRecord[];

  joinQueue: (entry: Omit<QueueEntry, "id">) => QueueEntry;
  updateQueuePosition: (id: string, position: number, waitTime: number) => void;
  leaveQueue: (id: string) => void;
  getPatientQueue: (patientId: string) => QueueEntry | undefined;

  addFunds: (patientId: string, amount: number) => void;
  deductFunds: (patientId: string, amount: number, description: string) => boolean;
  getTransactions: (patientId: string) => Transaction[];

  bookHomeCare: (booking: Omit<HomeCareBooking, "id">) => HomeCareBooking;
  updateHomeCareBooking: (id: string, data: Partial<HomeCareBooking>) => void;
  getPatientHomeCareBookings: (patientId: string) => HomeCareBooking[];

  updateHospitalCapacity: (id: string, data: Partial<Hospital>) => void;

  getDoctorById: (id: string) => Doctor | undefined;
  getHospitalById: (id: string) => Hospital | undefined;
  getPractitionerById: (id: string) => Practitioner | undefined;
  getDoctorsByHospital: (hospitalId: string) => Doctor[];
  getDoctorsBySpecialty: (specialty: string) => Doctor[];
  getAvailablePractitioners: () => Practitioner[];
}

const generateId = (prefix: string) =>
  `${prefix}${Date.now()}${Math.random().toString(36).substr(2, 9)}`;

export const useDataStore = create<DataStore>()(
  persist(
    (set, get) => ({
      patients: patientsData,
      doctors: doctorsData,
      hospitals: hospitalsData,
      appointments: appointmentsData,
      medicalRecords: medicalRecordsData,
      practitioners: practitionersData,
      queue: queueData,
      transactions: transactionsData,
      homeCareBookings: homeCareBookingsData,
      currentPatientId: "PAT001",

      setCurrentPatient: (patientId) => set({ currentPatientId: patientId }),

      getCurrentPatient: () => {
        const state = get();
        return state.patients.find((p) => p.id === state.currentPatientId);
      },

      updatePatient: (id, data) =>
        set((state) => ({
          patients: state.patients.map((p) =>
            p.id === id ? { ...p, ...data } : p
          ),
        })),

      addAppointment: (appointmentData) => {
        const newAppointment: Appointment = {
          ...appointmentData,
          id: generateId("APT"),
          createdAt: new Date().toISOString().split("T")[0],
        };
        set((state) => ({
          appointments: [...state.appointments, newAppointment],
        }));
        return newAppointment;
      },

      updateAppointment: (id, data) =>
        set((state) => ({
          appointments: state.appointments.map((a) =>
            a.id === id ? { ...a, ...data } : a
          ),
        })),

      cancelAppointment: (id) =>
        set((state) => ({
          appointments: state.appointments.map((a) =>
            a.id === id ? { ...a, status: "cancelled" as const } : a
          ),
        })),

      getPatientAppointments: (patientId) => {
        return get().appointments.filter((a) => a.patientId === patientId);
      },

      addMedicalRecord: (recordData) => {
        const newRecord: MedicalRecord = {
          ...recordData,
          id: generateId("REC"),
        };
        set((state) => ({
          medicalRecords: [...state.medicalRecords, newRecord],
        }));
        return newRecord;
      },

      getPatientRecords: (patientId) => {
        return get().medicalRecords.filter((r) => r.patientId === patientId);
      },

      joinQueue: (entryData) => {
        const newEntry: QueueEntry = {
          ...entryData,
          id: generateId("Q"),
        };
        set((state) => ({
          queue: [...state.queue, newEntry],
        }));
        return newEntry;
      },

      updateQueuePosition: (id, position, waitTime) =>
        set((state) => ({
          queue: state.queue.map((q) =>
            q.id === id
              ? { ...q, position, estimatedWaitTime: waitTime }
              : q
          ),
        })),

      leaveQueue: (id) =>
        set((state) => ({
          queue: state.queue.filter((q) => q.id !== id),
        })),

      getPatientQueue: (patientId) => {
        return get().queue.find(
          (q) => q.patientId === patientId && q.status === "waiting"
        );
      },

      addFunds: (patientId, amount) => {
        const transaction: Transaction = {
          id: generateId("TXN"),
          patientId,
          type: "credit",
          amount,
          description: "Wallet top-up",
          date: new Date().toISOString().split("T")[0],
          reference: generateId("PAY"),
        };
        set((state) => ({
          patients: state.patients.map((p) =>
            p.id === patientId
              ? { ...p, walletBalance: p.walletBalance + amount }
              : p
          ),
          transactions: [...state.transactions, transaction],
        }));
      },

      deductFunds: (patientId, amount, description) => {
        const patient = get().patients.find((p) => p.id === patientId);
        if (!patient || patient.walletBalance < amount) return false;
        const transaction: Transaction = {
          id: generateId("TXN"),
          patientId,
          type: "debit",
          amount,
          description,
          date: new Date().toISOString().split("T")[0],
        };
        set((state) => ({
          patients: state.patients.map((p) =>
            p.id === patientId
              ? { ...p, walletBalance: p.walletBalance - amount }
              : p
          ),
          transactions: [...state.transactions, transaction],
        }));
        return true;
      },

      getTransactions: (patientId) => {
        return get().transactions.filter((t) => t.patientId === patientId);
      },

      bookHomeCare: (bookingData) => {
        const newBooking: HomeCareBooking = {
          ...bookingData,
          id: generateId("HCB"),
        };
        set((state) => ({
          homeCareBookings: [...state.homeCareBookings, newBooking],
        }));
        return newBooking;
      },

      updateHomeCareBooking: (id, data) =>
        set((state) => ({
          homeCareBookings: state.homeCareBookings.map((b) =>
            b.id === id ? { ...b, ...data } : b
          ),
        })),

      getPatientHomeCareBookings: (patientId) => {
        return get().homeCareBookings.filter(
          (b) => b.patientId === patientId
        );
      },

      updateHospitalCapacity: (id, data) =>
        set((state) => ({
          hospitals: state.hospitals.map((h) =>
            h.id === id ? { ...h, ...data } : h
          ),
        })),

      getDoctorById: (id) => get().doctors.find((d) => d.id === id),
      getHospitalById: (id) => get().hospitals.find((h) => h.id === id),
      getPractitionerById: (id) => get().practitioners.find((p) => p.id === id),
      getDoctorsByHospital: (hospitalId) =>
        get().doctors.filter((d) => d.hospitalId === hospitalId),
      getDoctorsBySpecialty: (specialty) =>
        get().doctors.filter((d) => d.specialty === specialty),
      getAvailablePractitioners: () =>
        get().practitioners.filter((p) => p.available && p.verified),
    }),
    {
      name: "rivheal-data-store",
    }
  )
);
