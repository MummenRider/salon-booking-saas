"use client";
import { Button } from "@/components/ui/button";
import { useOnboardingForm } from "@/stores/onboarding-form-store";
import SalonDetailsForm from "./salon-details-form";
import { Progress } from "@/components/ui/progress";

const MAX_STEP = 3;
const OnboardingForm = () => {
  const { currentStep, nextStep, previousStep } = useOnboardingForm();
  const progress = (currentStep / MAX_STEP) * 100;
  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[auto_1fr_auto]">
      <div className="flex flex-col gap-2">
        <span className="text-sm">
          Step {currentStep} of {MAX_STEP}
        </span>
        <Progress value={progress} />
      </div>
      <div className="py-4">
        {currentStep === 1 && (
          <>
            <p className="pt-1 pb-3 text-muted-foreground">
              List the services offered by your salon. This will help clients
              understand your offerings.
            </p>
            <SalonDetailsForm />
          </>
        )}
      </div>
      <div className="place-content-end grid grid-cols-2 gap-24">
        <div>
          {currentStep > 1 && (
            <Button variant="default" onClick={previousStep} className="w-full">
              Previous
            </Button>
          )}
        </div>
        <div>
          <Button
            variant="default"
            onClick={nextStep}
            className="w-full"
            disabled={currentStep === MAX_STEP}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingForm;
