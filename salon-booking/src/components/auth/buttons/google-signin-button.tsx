"use client";
import { googleAuth } from "@/actions/google-auth";
import { Button } from "@/components/ui/button";
import { FC, useActionState } from "react";
import { FaGoogle } from "react-icons/fa";

const GoogleSignInButton = () => {
  const [errorMessage, dispatchGoogle] = useActionState(googleAuth, undefined);
  return (
    <form action={dispatchGoogle}>
      <Button variant="outline" className="w-fit mx-auto">
        <FaGoogle className="h-5 w-5" /> Google Sign in
      </Button>
      <p>{errorMessage}</p>
    </form>
  );
};

export default GoogleSignInButton;
