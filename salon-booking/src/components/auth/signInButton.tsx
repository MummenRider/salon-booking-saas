import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

const SignInButton = () => {
  const redirectToLogin = () => redirect("/sign-in");
  return (
    <Button variant="link" onClick={redirectToLogin}>
      Sign In
    </Button>
  );
};

export default SignInButton;
