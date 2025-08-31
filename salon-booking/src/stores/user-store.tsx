import { User } from "@prisma/client";
import { create } from "zustand";

interface UserState {
  email: string;
}
export const useUserState = create<UserState>()((set) => ({
  email: "Tukmol",
}));
