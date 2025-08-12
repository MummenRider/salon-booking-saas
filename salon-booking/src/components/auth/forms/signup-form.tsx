"use client";

import { SignUpSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { signup } from "@/actions/signup";
import Divider from "@/components/ui/divider";
import { useRouter } from "next/navigation";
import CardContainer from "../card-container";
import { FormError } from "./form-error";
import { Button } from "@/components/ui/button";
import GoogleSignInButton from "../buttons/google-signin-button";

const SignUpForm = () => {
  const form = useForm<z.infer<typeof SignUpSchema>>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const onSubmit = async (data: z.infer<typeof SignUpSchema>) => {
    setLoading(true);
    await signup(data)
      .then((response) => {
        if (response.error) setError(response.error);
        if (response.success) {
          setLoading(false);
          router.push(response.redirectUrl);
        }
      })
      .catch((response) => setError(response.error))
      .finally(() => setLoading(false));
  };
  return (
    <CardContainer
      title="Create an account"
      description="Enter your email to create an account and 
                   start organizing bookings effortlessly."
      backbuttonHref="/"
      backbuttonLabel="Back to home"
    >
      <Form {...form}>
        <form className="grid gap-4" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="smith@example.com"
                      type="email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="********" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="********" type="password" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError errorMessage={error} />
          <Button
            variant="default"
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? "Loading..." : "Register"}
          </Button>
        </form>
        <Divider label="or conitnue with" />
        <div className="flex items-center justify-center">
          <GoogleSignInButton />
        </div>
      </Form>
    </CardContainer>
  );
};

export default SignUpForm;
