import Typography from "@/components/ui/typography";
import SalonDetailsForm from "../forms/salon-details-form";

const SalonDetailsStep = () => {
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

export default SalonDetailsStep;
