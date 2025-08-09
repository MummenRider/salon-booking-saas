import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const SignUpButton = () => {
  const redirectToSignUp = () => redirect("/sign-up");
  return (
    <Button variant="default" onClick={redirectToSignUp}>
      Sign Up
    </Button>
  );
};

export default SignUpButton;
