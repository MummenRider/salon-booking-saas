import SalonDetailsForm from "@/components/onboarding/forms/salon-details-form";

const SalonDetails = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-inherit leading-7 [&:not(:first-child)]:mt-6">
        Please provide the basic information for your salon. This will help
        clients find and contact you.
      </p>
      <SalonDetailsForm />
    </div>
  );
};

export default SalonDetails;
