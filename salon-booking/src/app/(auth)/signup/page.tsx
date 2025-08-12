import SignUpForm from "@/components/auth/forms/signup-form";

const SignUpPage = () => {
  return (
    <div className="w-full h-screen">
      <div className="h-full flex justify-center items-center">
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
