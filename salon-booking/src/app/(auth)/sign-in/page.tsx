import AuthCard, { AuthType } from "@/components/auth/authCard";
import AuthForm from "@/components/auth/authForm";

const SignInPage = () => {
  return (
    <AuthCard
      authType="signIn"
      description="Enter your email to sign in and manage your bookings."
    >
      <AuthForm authType="signIn" />
    </AuthCard>
  );
};

export default SignInPage;
