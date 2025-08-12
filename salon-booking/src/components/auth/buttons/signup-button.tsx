import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignUpButton = () => {
  return (
    <Button variant="default">
      <Link href="/signup">Get Started</Link>
    </Button>
  );
};

export default SignUpButton;
