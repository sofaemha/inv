"use client";

import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { auth } from "@/provider/auth/client";

export function AuthProviders({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <AuthUIProvider
      authClient={auth}
      navigate={router.push}
      replace={router.replace}
      Link={Link}
      onSessionChange={() => {
        router.refresh();
      }}
      signUp={false}
      magicLink
      social={{
        providers: ["github"],
      }}
    >
      {children}
    </AuthUIProvider>
  );
}
