import { Button } from "@/components/ui/button";
import Link from "next/link";

const SignInButton = () => {
  return (
    <Button variant="secondary" className="underline">
      <Link href="/signin">Sign In</Link>
    </Button>
  );
};

export default SignInButton;
