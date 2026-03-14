import { APIError, InferHeaders, betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/provider/prisma/console/client";
import { organization } from "better-auth/plugins";

const ALLOWED_DOMAINS = new Set(["upstegal.ac.id", "gmail.com"]);

const ALLOWED_EMAILS = new Set(["lab.informatika.upstegal@gmail.com"]);

function isEmailAllowed(email: string): boolean {
  const lower = email.toLowerCase();
  const domain = lower.split("@")[1];
  return ALLOWED_DOMAINS.has(domain) || ALLOWED_EMAILS.has(lower);
}

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL ?? "http://localhost:3000",
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  databaseHooks: {
    user: {
      create: {
        before: async (user) => {
          if (!isEmailAllowed(user.email)) {
            throw new APIError("FORBIDDEN", {
              message: "unauthorized",
            });
          }
        },
      },
    },
  },
  plugins: [
    organization({
      allowUserToCreateOrganization: false,
      membershipLimit: 100,
      invitationExpiresIn: 60 * 60 * 24,
    }),
  ],
  socialProviders: {
    github: {
      enabled: true,
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
  },
  trustedOrigins: ["http://100.104.25.60:3000"],
});
