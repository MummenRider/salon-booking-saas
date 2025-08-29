import { prisma } from "@/lib/prisma";
import { Prisma, User } from "@prisma/client";

export const getUserById = async ({ id }: { id: string }) =>
  prisma.user.findUnique({
    where: { id },
  });

export const updateUser = async ({
  id,
  data,
}: {
  id: string;
  data: Prisma.UserUpdateInput;
}) =>
  prisma.user.update({
    where: { id },
    data,
  });
