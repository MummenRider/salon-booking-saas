"use client";
import SignUpButton from "@/components/auth/signUpButton";
import Navbar from "@/components/navbar/page";

export default function Home() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="w-fit h-[50vh] flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="uppercase font-black text-5xl">Book.relax.repeat</h1>
          <p className=" ">Simple salon scheduling made easy.</p>
          <SignUpButton />
        </div>
      </main>
    </div>
  );
}
