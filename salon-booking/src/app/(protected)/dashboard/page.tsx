import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";
import SignOutButton from "@/components/auth/signOutButton";

const Dashboard = async () => {
  const session = await auth(); // Secure server-side check

  if (!session) {
    redirect("/");
  }

  return (
    <>
      <div>Welcome {session.user?.name}!</div>
      <SignOutButton />
    </>
  );
};

export default Dashboard;
