"use client";

import { useForm } from "react-hook-form";
import z from "zod";
import { SignInSchema } from "@/schemas";
import { useState } from "react";
import { signin } from "@/actions/signin";
import { zodResolver } from "@hookform/resolvers/zod";
import CardContainer from "../card-container";
import { Input } from "@/components/ui/input";
import { FormError } from "./form-error";
import { Button } from "@/components/ui/button";
import Divider from "@/components/ui/divider";
import GoogleSignInButton from "../buttons/google-signin-button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const SignInForm = () => {
  const form = useForm<z.infer<typeof SignInSchema>>({
    resolver: zodResolver(SignInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const onSubmit = async (data: z.infer<typeof SignInSchema>) => {
    setLoading(true);
    await signin(data)
      .then((response) => {
        if (response?.error) {
          setError(response.error);
        }
      })
      .catch((response) => setError(response.error))
      .finally(() => setLoading(false));
  };
  return (
    <CardContainer
      title="Welcome back!"
      description="Enter your email to sign in and manage your bookings."
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
                    <Input {...field} placeholder="******" type="password" />
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
            {loading ? "Loading..." : "Sign in"}
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

export default SignInForm;
