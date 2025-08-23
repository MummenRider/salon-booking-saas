import { SalonDetailsType } from "@/schemas";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface OnboardingFormState {
  currentStep: number;
  salonDetails: SalonDetailsType;
}

interface OnboardingFormActions {
  nextStep: (updates: Partial<SalonDetailsType>) => void;
  previousStep: () => void;
}

const initialSalonDetails: SalonDetailsType = {
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
    { name: "onboarding-storage" }
  )
);
