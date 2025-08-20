import { create } from "zustand";
interface OnboardingFormState {
  //Navigation properties
  currentStep: number;
  nextStep: () => void;
  previousStep: () => void;
  goToStep: (step: number) => void;
}

export const useOnboardingForm = create<OnboardingFormState>((set) => ({
  currentStep: 1,
  nextStep: () => set((state) => ({ currentStep: state.currentStep + 1 })),
  previousStep: () => set((state) => ({ currentStep: state.currentStep - 1 })),
  goToStep: (step: number) => set({ currentStep: step }),
}));
