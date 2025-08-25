"use client";
import { Button } from "@/components/ui/button";
import { useOnboardingForm } from "@/stores/onboarding-form-store";
import SalonDetailsForm from "./salon-details-form";
import { Progress } from "@/components/ui/progress";
import Typography from "@/components/ui/typography";
import { ArrowLeft, MoveLeft } from "lucide-react";
import SalonServiceForm from "./salon-service-form";

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
        {currentStep === 1 && <SalonDetails />}
        {currentStep === 2 && <Services />}
      </div>
    </div>
  );
};

export default OnboardingForm;

const SalonDetails = () => {
  return (
    <div className="flex flex-col">
      <Typography as="h3" className="text-base place-self-start">
        Salon Details
      </Typography>
      <Typography as="p" className="text-muted-foreground pb-6 text-sm">
        List the services offered by your salon. This will help clients
        understand your offerings.
      </Typography>

      <SalonDetailsForm />
    </div>
  );
};

const Services = () => {
  return (
    <div className="flex flex-col">
      <Typography as="h3" className="text-base place-self-start">
        Services
      </Typography>
      <Typography as="p" className="text-muted-foreground pb-6 text-sm">
        Add the services your salon offers, including name, description,
        duration, and price.
      </Typography>

      <SalonServiceForm />
    </div>
  );
};
