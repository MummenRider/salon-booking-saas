import {
  SalonDetailsType,
  SalonServicesType,
  SalonServiceType,
} from "@/schemas";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OnboardingFormState {
  currentStep: number;
  salonDetails: SalonDetailsType;
  services: SalonServiceType[];
}

interface OnboardingFormActions {
  addSalonDetailsAndNext: (updates: Partial<SalonDetailsType>) => void;
  previousStep: () => void;
  addServicesAndNext: (services: SalonServiceType[]) => void;
  setServices: (services: SalonServiceType[]) => void;
}

const initialSalonDetails: SalonDetailsType = {
  salonName: "",
  address: "",
  contactNumber: "",
};
export const initialSalonService: SalonServiceType = {
  serviceName: "",
  description: "",
  duration: 0,
  price: 0,
};
export const useOnboardingForm = create<
  OnboardingFormState & OnboardingFormActions
>()(
  persist(
    (set) => ({
      currentStep: 1,
      salonDetails: initialSalonDetails,
      services: [],
      addSalonDetailsAndNext: (updates) =>
        set((state) => ({
          salonDetails: { ...state.salonDetails, ...updates },
          currentStep: state.currentStep + 1,
        })),
      previousStep: () =>
        set((state) => ({ currentStep: state.currentStep - 1 })),
      addServicesAndNext: (services) =>
        set((state) => ({
          services: [...services],
          currentStep: state.currentStep + 1,
        })),
      setServices: (services) =>
        set((state) => ({
          services: [...services],
        })),
    }),
    { name: "onboarding-storage" }
  )
);
