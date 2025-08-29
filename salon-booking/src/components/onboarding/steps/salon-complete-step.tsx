"use client";
import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { useOnboardingForm } from "@/stores/onboarding-form-store";
import { Scissors, Store } from "lucide-react";
import SalonDetailItem from "./salon-detail-item";
import { completeOnboarding } from "@/actions/complete-onboarding";
import { useRouter } from "next/navigation";

const SalonCompleteStep = () => {
  const salonDetails = useOnboardingForm((state) => state.salonDetails);
  const services = useOnboardingForm((state) => state.services);
  const router = useRouter();
  const servicesOffered = services
    .map((x) => x?.serviceName)
    .join(", ")
    .toString();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await completeOnboarding({
        salonDetails,
        services,
      });
      if (result?.success) {
        router.push(result.redirectToURL);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex flex-col">
      <Typography as="h3" className="text-base place-self-start">
        You're all set!
      </Typography>
      <Typography as="p" className="text-muted-foreground pb-6 text-sm">
        Review and submit your salon profile to finalize your setup
      </Typography>
      <div className="flex flex-col gap-4">
        <SalonDetailItem
          icon={Store}
          title={salonDetails.salonName}
          description={salonDetails.address}
        />
        {/*List Services */}
        <SalonDetailItem
          icon={Scissors}
          title="Services Offered"
          description={servicesOffered}
        />
      </div>
      <div className="mt-20">
        <form onSubmit={onSubmit}>
          <Button variant="default" className="w-full mt-6" onClick={onSubmit}>
            Complete
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SalonCompleteStep;
