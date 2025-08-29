"use client";
import { useOnboardingForm } from "@/stores/onboarding-form-store";
import { Progress } from "@/components/ui/progress";
import { MoveLeft } from "lucide-react";
import SalonDetailsStep from "../steps/salon-details-step";
import SalonServicesStep from "../steps/salon-service-step";
import SalonCompleteStep from "../steps/salon-complete-step";

const MAX_STEP = 3;
const OnboardingForm = () => {
  const currentStep = useOnboardingForm((state) => state.currentStep);
  const previousStep = useOnboardingForm((state) => state.previousStep);
  const progress = (currentStep / MAX_STEP) * 100;

  return (
    <div>
      <div className="flex justify-between">
        <div></div>
      </div>
      <div className="flex flex-col gap-2 pt-2 pb-4">
        <div className="flex items-center gap-4">
          {currentStep > 1 && (
            <MoveLeft className="place-self-start" onClick={previousStep} />
          )}
          <span className="text-sm">
            Step {currentStep} of {MAX_STEP}
          </span>
        </div>

        <Progress value={progress} />
      </div>
      <div>
        {currentStep === 1 && <SalonDetailsStep />}
        {currentStep === 2 && <SalonServicesStep />}
        {currentStep === 3 && <SalonCompleteStep />}
      </div>
    </div>
  );
};

export default OnboardingForm;
