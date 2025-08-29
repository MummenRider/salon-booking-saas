import NextAuth, { User } from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import bcrypt, { compare } from "bcryptjs";
//export providers from NextAuth

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials): Promise<User | null> => {
        const { email, password } = credentials;
        if (!email || !password) {
          return null; // This will trigger the CredentialsSignin error
        }
        try {
          const user = await prisma.user.findUnique({
            where: { email: credentials.email as string },
          });
          if (!user?.email) {
            throw new Error("Email address not found");
          }
          if (user.password) {
            const isPasswordMatched = await bcrypt.compare(
              password as string,
              user.password
            );
            if (!isPasswordMatched) throw new Error("Invalid password");
          }
          return {
            id: user.id,
            email: user.email,
            name: user.name,
            onboardingComplete: user.onboardingComplete,
          };
        } catch (error) {
          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
    Google({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
        token.onboardingComplete = user.onboardingComplete;
      }

      return token;
    },
    async session({ session, token }) {
      session.user.onboardingComplete = token.onboardingComplete;
      session.user.id = token.id as string;

      return session;
    },
    async redirect({ baseUrl, url }) {
      // console.log("this is url", url);

      return `${baseUrl}/dashboard`;
    },
  },
});
