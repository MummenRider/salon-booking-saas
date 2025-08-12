import SignOutButton from "@/components/auth/buttons/signout-button";
import { auth } from "@/auth";

const Dashboard = async () => {
  const session = await auth();

  return (
    <>
      <div>Welcome {session?.user?.name}!</div>
      <SignOutButton />
    </>
  );
};

export default Dashboard;
