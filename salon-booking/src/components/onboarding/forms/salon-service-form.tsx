import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SalonServicesSchema, SalonServicesType } from "@/schemas";
import {
  initialSalonService,
  useOnboardingForm,
} from "@/stores/onboarding-form-store";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChangeEvent } from "react";
import { useFieldArray, useForm } from "react-hook-form";

const SalonServiceForm = () => {
  const addServices = useOnboardingForm((state) => state.addServicesAndNext);
  const services = useOnboardingForm((state) => state.services);
  console.log(services);
  console.log("initialSalonService", initialSalonService);

  const form = useForm<SalonServicesType>({
    resolver: zodResolver(SalonServicesSchema),
    defaultValues: {
      services: services.length > 0 ? services : [initialSalonService],
    },
  });
  const {
    append,
    remove,
    fields: serviceItems,
  } = useFieldArray({
    control: form.control,
    name: "services",
  });

  const onsubmit = (data: SalonServicesType) => {
    console.log("submit");
    try {
      addServices(data.services);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onsubmit)}>
        {serviceItems.map((serviceItem, index) => (
          <div key={serviceItem.id} className="space-y-4">
            <FormField
              control={form.control}
              name={`services.${index}.serviceName`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Haircut" type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`services.${index}.description`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Describe the service"
                      type="text"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`services.${index}.duration`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration (minutes)</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g., 60"
                      type="number"
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const value = e.target.valueAsNumber;
                        field.onChange(isNaN(value) ? 0 : value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`services.${index}.price`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input
                      placeholder=""
                      type="number"
                      {...field}
                      value={field.value ?? ""}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        const value = e.target.valueAsNumber;
                        field.onChange(isNaN(value) ? 0 : value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {index !== 0 && (
              <div className="place-self-end">
                <Button
                  variant="destructive"
                  onClick={() => remove(index)}
                  disabled={index === 0}
                >
                  Remove
                </Button>
              </div>
            )}
          </div>
        ))}
        <Button variant="link" onClick={() => append(initialSalonService)}>
          Add Service
        </Button>
        <div className="mt-20">
          <Button variant="default" className="w-full mt-6">
            Next
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default SalonServiceForm;
