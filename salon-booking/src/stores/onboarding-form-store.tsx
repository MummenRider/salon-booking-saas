import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SalonDetails {
  salonName: string;
  address: string;
  contactNumber: string;
}

interface OnboardingFormState {
  currentStep: number;
  salonDetails: SalonDetails;
}

interface OnboardingFormActions {
  nextStep: (updates: Partial<SalonDetails>) => void;
  previousStep: () => void;
}

const initialSalonDetails: SalonDetails = {
  salonName: "",
  address: "",
  contactNumber: "",
};

export const useOnboardingForm = create<
  OnboardingFormState & OnboardingFormActions
>()(
  persist(
    (set) => ({
      currentStep: 1,
      salonDetails: initialSalonDetails,
      nextStep: (updates) =>
        set((state) => ({
          salonDetails: { ...state.salonDetails, ...updates },
          currentStep: state.currentStep + 1,
        })),
      previousStep: () =>
        set((state) => ({ currentStep: state.currentStep - 1 })),
    }),
    { name: "onboarding-storage" } // persisted in localStorage
  )
);
