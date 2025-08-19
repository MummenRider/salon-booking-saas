"use client";
import { FormError } from "@/components/auth/forms/form-error";
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
import { SalonDetailsSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

import * as z from "zod";
const SalonDetailsForm = () => {
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const form = useForm<z.infer<typeof SalonDetailsSchema>>({
    resolver: zodResolver(SalonDetailsSchema),
    defaultValues: {
      salonName: "",
      address: "",
      contactNumber: "",
    },
  });

  const onSubmitSalonDetails = async (
    data: z.infer<typeof SalonDetailsSchema>
  ) => {
    setLoading(true);
  };
  return (
    <Form {...form}>
      <form
        className="min-w-full min-h-full grid grid-rows-[1fr_auto]"
        onSubmit={form.handleSubmit(onSubmitSalonDetails)}
      >
        <div className="space-y-4">
          <FormField
            control={form.control}
            name="salonName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Salon Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter salon name"
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
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter salon address"
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
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter contact number" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError errorMessage={error} />
        </div>
        <Button
          variant="default"
          type="submit"
          className="w-full"
          disabled={loading}
        >
          {loading ? "Loading..." : "Next"}
        </Button>
      </form>
    </Form>
  );
};

export default SalonDetailsForm;
