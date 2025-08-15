import SignOutButton from "@/components/auth/buttons/signout-button";
import NavbarMobile from "@/components/navbar-mobile/page";
import React, { FC } from "react";

interface ProtectedLayoutProps {
  children: React.ReactNode;
}
const ProtectedLayout: FC<ProtectedLayoutProps> = ({ children }) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <div className="px-4 py-2 border-b flex justify-between items-center">
        <p className="font-medium">Dashboard</p>
        <SignOutButton />
      </div>

      <section className="p-4">{children}</section>
      <NavbarMobile />
    </div>
  );
};

export default ProtectedLayout;
