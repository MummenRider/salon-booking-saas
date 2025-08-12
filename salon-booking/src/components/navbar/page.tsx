"use client";

import SignInButton from "../auth/buttons/signin-button";

const Navbar = () => {
  return (
    <nav className="flex justify-between py-4 px-5 fixed w-full z-50 bg-transparent">
      <div className="uppercase font-bold text-2xl text-foreground">LOGO</div>
      <SignInButton />
    </nav>
  );
};

export default Navbar;
