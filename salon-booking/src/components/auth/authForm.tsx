"use client";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { AuthType } from "./authCard";
import { FC } from "react";
import { Button } from "@/components/ui/button";

interface AuthFormProps {
  authType: AuthType;
}
const AuthForm: FC<AuthFormProps> = ({ authType }) => {
  return (
    <form className="flex flex-col gap-4">
      <div className="grid gap-2">
        <Label htmlFor="email" className="text-sm">
          Email
        </Label>
        <Input type="email" placeholder="smith@example.com" required />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="password" className="text-sm font-medium">
          Password
        </Label>
        <Input type="password" required />
      </div>
      <div className="">
        {authType === AuthType.signUp ? (
          <Button variant="default" className="w-full">
            Create an account
          </Button>
        ) : (
          <Button variant="default" className="w-full">
            Sign In
          </Button>
        )}
      </div>
    </form>
  );
};
export default AuthForm;
