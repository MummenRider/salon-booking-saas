"use client";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const SignOutButton = () => {
  const signtOutUser = () => signOut({ redirectTo: "/" });
  return (
    <Button variant="destructive" onClick={signtOutUser}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
