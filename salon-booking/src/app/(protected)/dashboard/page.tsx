import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

import SignOutButton from "@/components/auth/signOutButton";
import { auth } from "@/auth";

const Dashboard = async () => {
  const session = await auth(); // Secure server-side check

  return (
    <>
      <div>Welcome {session?.user?.name}!</div>
      <SignOutButton />
    </>
  );
};

export default Dashboard;
