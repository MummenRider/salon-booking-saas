import AuthCard, { AuthType } from "@/components/auth/authCard";
import AuthForm from "@/components/auth/authForm";

const SignUp = () => {
  return (
    <AuthCard
      authType="signUp"
      description="Enter your email to create an account and 
                   start organizing bookings effortlessly."
    >
      <AuthForm authType="signUp" />
    </AuthCard>
  );
};

export default SignUp;
