import SignInForm from "@/components/auth/forms/signin-form";

const SignInPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="h-full flex justify-center items-center">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
