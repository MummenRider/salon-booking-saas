"use client";
import Image from "next/image";
import SignUpButton from "../auth/buttons/signup-button";
import salonHero from "./../../../public/salon2.jpg";
import Navbar from "../navbar/page";
import { Button } from "../ui/button";
const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-muted">
      <Navbar />
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="text-foreground text-center">
          <h1 className="text-5xl font-bold">Effortless Salon</h1>
          <h1 className="text-5xl font-bold">Management</h1>
          <p className="mt-4 text-xl px-[3rem] text-foreground/80 font-base">
            Streamline your bookings and grow your business with our all
            in-one-solution.
          </p>
          <div className="mt-8">
            <SignUpButton />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
