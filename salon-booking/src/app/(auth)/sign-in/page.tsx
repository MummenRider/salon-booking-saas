import AuthCard, { AuthType } from "@/components/auth/authCard";
import AuthForm from "@/components/auth/authForm";
const SignInPage = () => {
  return (
    <AuthCard
      authType={AuthType.signIn}
      description="Enter your email to create an account and 
                   start organizing bookings effortlessly."
    >
      <AuthForm authType={AuthType.signIn} />
    </AuthCard>
  );
};

export default SignInPage;
