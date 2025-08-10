"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AuthType } from "./authCard";
import { FC, useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"; // Changed from next/router
import { authSignIn } from "@/app/(auth)/_actions/auth.signin";
import { signIn } from "@/auth";
import { authSignUp } from "@/app/(auth)/_actions/auth.signup";

interface AuthFormProps {
  authType: AuthType;
}

const AuthForm: FC<AuthFormProps> = ({ authType }) => {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 👈 Add this to prevent page refresh

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const response =
      authType === "signIn"
        ? await authSignIn(formData)
        : await authSignUp(formData);

    console.log(response);
    if (response.success) {
      router.push("/dashboard");
      console.log("no error");
    } else {
      console.log("error");
      setError(response.message);
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="grid gap-2">
        <Label htmlFor="email" className="text-sm">
          Email
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="smith@example.com"
          required
        />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <Input id="password" name="password" type="password" required />
      </div>

      {error && (
        <div className="text-sm text-red-500 text-center p-2 rounded bg-red-50">
          {error}
        </div>
      )}

      <Button variant="default" type="submit" className="w-full">
        {authType === "signUp" ? "Create an account" : "Sign In"}
      </Button>
    </form>
  );
};

export default AuthForm;
