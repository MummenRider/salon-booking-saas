import Link from "next/link";
import { Button } from "../ui/button";

const CompleteProfile = () => {
  return (
    <Button variant="default">
      <Link href="/onboarding/salon-details">Complete Profile</Link>
    </Button>
  );
};

export default CompleteProfile;
