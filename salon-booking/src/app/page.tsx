"use client";
import SignUpButton from "@/components/auth/signUpButton";
import Navbar from "@/components/navbar/page";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="w-screen h-[50vh] flex justify-center items-center">
        <SignUpButton />
      </main>
    </div>
  );
}
