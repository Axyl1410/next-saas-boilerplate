import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { haveIBeenPwned, openAPI } from "better-auth/plugins";
import { redirect } from "next/navigation";

import client from "./db";
import { resend } from "./resend";

import ResetPasswordEmail from "@/components/email/reset-password";

export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: true,
    resetPasswordTokenExpiresIn: 60 * 60,
    minPasswordLength: 12,
    sendResetPassword: async ({ user, url }) => {
      await resend.emails.send({
        to: [user.email],
        from: "Axyl Team <onboarding@resend.dev>",
        subject: "Reset your password",
        react: ResetPasswordEmail({
          userFirstname: user.name,
          resetPasswordLink: url,
        }),
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    expiresIn: 60 * 60,
    autoSignInAfterVerification: true,
    afterEmailVerification: async () => {
      redirect("/welcome");
    },
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    },
    discord: {
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    },
  },
  account: {
    accountLinking: {
      enabled: true,
      trustedProviders: ["google", "github", "discord"],
    },
  },
  rateLimit: {
    enabled: true,
  },
  database: mongodbAdapter(client.db()),
  plugins: [
    nextCookies(),
    openAPI(),
    haveIBeenPwned({
      customPasswordCompromisedMessage: "Please choose a more secure password.",
    }),
  ],
});
