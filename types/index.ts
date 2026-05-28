// Core data types for RivHeal

export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  bloodType?: string;
  allergies?: string[];
  chronicConditions?: string[];
  emergencyContact?: {
    name: string;
    phone: string;
    relationship: string;
  };
  walletBalance: number;
  createdAt: string;
}

export interface Doctor {
  id: string;
  firstName: string;
  lastName: string;
  specialty: string;
  hospitalId: string;
  email: string;
  phone: string;
  consultationFee: number;
  rating: number;
  reviewCount: number;
  availableDays: string[];
  workingHours: { start: string; end: string };
  avatar?: string;
}

export interface Hospital {
  id: string;
  name: string;
  address: string;
  location: string;
  phone: string;
  email: string;
  departments: string[];
  erBeds: number;
  icuBeds: number;
  generalBeds: number;
  status: "available" | "limited" | "full";
  coordinates?: { lat: number; lng: number };
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  hospitalId: string;
  date: string;
  time: string;
  status: "scheduled" | "confirmed" | "in-progress" | "completed" | "cancelled";
  type: "in-person" | "telemedicine";
  reason?: string;
  notes?: string;
  queuePosition?: number;
  estimatedWaitTime?: number;
  createdAt: string;
}

export interface MedicalRecord {
  id: string;
  patientId: string;
  doctorId: string;
  hospitalId: string;
  appointmentId?: string;
  date: string;
  type: "consultation" | "lab-result" | "prescription" | "imaging" | "diagnosis";
  title: string;
  description: string;
  attachments?: string[];
  medications?: Medication[];
  vitals?: {
    bloodPressure?: string;
    heartRate?: number;
    temperature?: number;
    weight?: number;
    bloodSugar?: number;
  };
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  frequency: string;
  duration: string;
  instructions?: string;
  refillsRemaining?: number;
  prescribedDate: string;
  expiryDate?: string;
}

export interface Practitioner {
  id: string;
  firstName: string;
  lastName: string;
  role: "nurse" | "doctor" | "lab-tech" | "physiotherapist" | "pharmacist";
  specialties: string[];
  phone: string;
  email: string;
  rating: number;
  reviewCount: number;
  verified: boolean;
  available: boolean;
  pricePerVisit: number;
  coordinates?: { lat: number; lng: number };
}

export interface HomeCareBooking {
  id: string;
  patientId: string;
  practitionerId: string;
  serviceType: string;
  date: string;
  time: string;
  address: string;
  status: "pending" | "accepted" | "in-progress" | "completed" | "cancelled";
  price: number;
  notes?: string;
  rating?: number;
  review?: string;
}

export interface QueueEntry {
  id: string;
  patientId: string;
  hospitalId: string;
  department: string;
  position: number;
  estimatedWaitTime: number;
  checkInTime: string;
  status: "waiting" | "called" | "in-consultation" | "completed";
}

export interface EmergencyTransfer {
  id: string;
  patientName: string;
  fromHospitalId?: string;
  toHospitalId: string;
  condition: string;
  priority: "critical" | "urgent" | "standard";
  status: "requested" | "accepted" | "in-transit" | "arrived" | "completed";
  requestedAt: string;
  eta?: string;
  ambulanceId?: string;
}

export interface Transaction {
  id: string;
  patientId: string;
  type: "credit" | "debit";
  amount: number;
  description: string;
  date: string;
  reference?: string;
}
