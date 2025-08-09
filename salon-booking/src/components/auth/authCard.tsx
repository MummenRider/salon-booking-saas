"use client";
import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ContinueWithGoogle from "./continueWithGoogle";
import { signIn } from "next-auth/react";
import Divider from "@/components/ui/divider";
import { Button } from "@/components/ui/button";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

export enum AuthType {
  signIn = "signIn",
  signUp = "signUp",
}

interface AuthCardProps {
  description: string;
  authType: AuthType;
  children: React.ReactNode;
}
const AuthCard: FC<AuthCardProps> = ({ authType, description, children }) => {
  const handleSignInWithGoogle = () =>
    signIn("google", { callbackUrl: "/dashboard" });
  const router = useRouter();
  return (
    <section>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">
            {authType === AuthType.signIn
              ? "Welcome back"
              : "Create an account"}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <ContinueWithGoogle onClick={handleSignInWithGoogle} />
          <Divider label="or with" />
          {children}
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <Button
            variant="ghost"
            className="underline"
            onClick={() => router.push("/")}
          >
            <MoveLeft /> Back to home
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
};

export default AuthCard;

// const SignUpWithEmailAndPassword = () => (

// );
