import React, { FC } from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}
const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    <section className="flex items-center justify-center bg-muted">
      <div className="w-full h-full mx-auto flex items-center justify-center ">
        {children}
      </div>
    </section>
  );
};

export default AuthLayout;
