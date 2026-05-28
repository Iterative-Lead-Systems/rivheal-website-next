"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface NotificationPreferences {
  email: {
    appointments: boolean;
    consultations: boolean;
    medications: boolean;
    labResults: boolean;
    promotions: boolean;
    newsletters: boolean;
  };
  push: {
    appointments: boolean;
    consultations: boolean;
    medications: boolean;
    labResults: boolean;
  };
  sms: {
    appointments: boolean;
    consultations: boolean;
    emergencies: boolean;
  };
  reminderTiming: "same-day" | "1-day" | "2-days" | "1-week";
  quietHoursEnabled: boolean;
  quietHoursStart: string;
  quietHoursEnd: string;
}

interface PreferencesState {
  preferences: NotificationPreferences;
  autoPayEnabled: boolean;
  lowBalanceThreshold: number;
  updateEmailPreference: (
    key: keyof NotificationPreferences["email"],
    value: boolean
  ) => void;
  updatePushPreference: (
    key: keyof NotificationPreferences["push"],
    value: boolean
  ) => void;
  updateSmsPreference: (
    key: keyof NotificationPreferences["sms"],
    value: boolean
  ) => void;
  updateReminderTiming: (
    timing: NotificationPreferences["reminderTiming"]
  ) => void;
  updateQuietHours: (enabled: boolean, start?: string, end?: string) => void;
  setAutoPayEnabled: (enabled: boolean) => void;
  setLowBalanceThreshold: (amount: number) => void;
  resetToDefaults: () => void;
}

const defaultPreferences: NotificationPreferences = {
  email: {
    appointments: true,
    consultations: true,
    medications: true,
    labResults: true,
    promotions: false,
    newsletters: false,
  },
  push: {
    appointments: true,
    consultations: true,
    medications: true,
    labResults: true,
  },
  sms: {
    appointments: true,
    consultations: true,
    emergencies: true,
  },
  reminderTiming: "1-day",
  quietHoursEnabled: false,
  quietHoursStart: "22:00",
  quietHoursEnd: "07:00",
};

export const usePreferencesStore = create<PreferencesState>()(
  persist(
    (set) => ({
      preferences: defaultPreferences,
      autoPayEnabled: true,
      lowBalanceThreshold: 10000,

      updateEmailPreference: (key, value) => {
        set((state) => ({
          preferences: {
            ...state.preferences,
            email: { ...state.preferences.email, [key]: value },
          },
        }));
      },

      updatePushPreference: (key, value) => {
        set((state) => ({
          preferences: {
            ...state.preferences,
            push: { ...state.preferences.push, [key]: value },
          },
        }));
      },

      updateSmsPreference: (key, value) => {
        set((state) => ({
          preferences: {
            ...state.preferences,
            sms: { ...state.preferences.sms, [key]: value },
          },
        }));
      },

      updateReminderTiming: (timing) => {
        set((state) => ({
          preferences: { ...state.preferences, reminderTiming: timing },
        }));
      },

      updateQuietHours: (enabled, start, end) => {
        set((state) => ({
          preferences: {
            ...state.preferences,
            quietHoursEnabled: enabled,
            ...(start && { quietHoursStart: start }),
            ...(end && { quietHoursEnd: end }),
          },
        }));
      },

      setAutoPayEnabled: (enabled) => set({ autoPayEnabled: enabled }),

      setLowBalanceThreshold: (amount) =>
        set({ lowBalanceThreshold: amount }),

      resetToDefaults: () =>
        set({
          preferences: defaultPreferences,
          autoPayEnabled: true,
          lowBalanceThreshold: 10000,
        }),
    }),
    { name: "rivheal-preferences" }
  )
);
