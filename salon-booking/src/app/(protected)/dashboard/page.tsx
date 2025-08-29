import SignOutButton from "@/components/auth/buttons/signout-button";
import { auth } from "@/auth";
import CompleteProfile from "@/components/dashboard/complete-profile-button";
import { getUserById } from "@/data/user";

const Dashboard = async () => {
  const session = await auth();
  if (!session?.user) return null;

  const user = await getUserById({ id: session.user.id });
  if (user === null) return null;
  return (
    <div>
      <div className="text-3xl font-bold">
        Welcome back, {session?.user?.name}!
      </div>
      {!user.onboardingComplete && (
        <div>
          <p className="text-base py-4">
            Your account is almost ready. Complete your profile to unlock all
            feautres
          </p>
          <CompleteProfile />
        </div>
      )}
    </div>
  );
};

export default Dashboard;
