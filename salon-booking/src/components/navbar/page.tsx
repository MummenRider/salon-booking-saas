"use client";

import SignInButton from "../auth/signInButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between p-4">
      <div className="uppercase font-bold text-lg">LOGO</div>
      <SignInButton />
    </nav>
  );
};

export default Navbar;
