"use server";

import { prisma } from "@/lib/prisma";
import {
  SalonDetailsType,
  SalonServicesType,
  SalonServiceType,
} from "@/schemas";
import { getSession } from "next-auth/react";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { updateUser } from "@/data/user";

type OnboardingType = {
  salonDetails: SalonDetailsType;
  services: SalonServiceType[];
};
export const completeOnboarding = async ({
  salonDetails,
  services,
}: OnboardingType) => {
  try {
    const session = await auth();
    if (!session?.user) return;
    console.log("session from complete form", session.user.id);

    const result = await prisma.$transaction(async (tsx) => {
      const salon = await tsx.salon.create({
        data: {
          name: salonDetails.salonName,
          address: salonDetails.address,
          contactNumber: salonDetails.contactNumber,
          ownerId: session?.user.id,
        },
      });

      const newServices = services.map((service) => ({
        name: service.serviceName,
        description: service.description ?? "",
        duration: service.duration ?? 0,
        price: service.price ?? 0,
        salonId: salon.id,
      }));
      await tsx.service.createMany({
        data: newServices,
      });
    });
    //update database - user
    await updateUser({
      id: session.user.id,
      data: {
        onboardingComplete: true,
      },
    });
    //update session - user
    session.user.onboardingComplete = true;

    return { success: "Salon has been created", redirectToURL: "/dashboard" };
  } catch (error) {
    console.error(error);
    throw error;
  }
};
