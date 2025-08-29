import Typography from "@/components/ui/typography";
import SalonServiceForm from "../forms/salon-service-form";

const SalonServicesStep = () => {
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

export default SalonServicesStep;
