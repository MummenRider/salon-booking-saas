import SignOutButton from "@/components/auth/buttons/signout-button";
import { auth } from "@/auth";
import CompleteProfile from "@/components/dashboard/complete-profile-button";

const Dashboard = async () => {
  const session = await auth();

  return (
    <div className="">
      <div className="text-3xl font-bold">
        Welcome back, {session?.user?.name}!
      </div>
      {!session?.user.onboardingComplete && (
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
