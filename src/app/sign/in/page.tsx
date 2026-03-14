"use client";

import { useState, useEffect } from "react";
import { AuthView } from "@daveyplate/better-auth-ui";
import AuthHeader from "@/components/auth/header";
import AuthFooter from "@/components/auth/footer";

export default function SignInPage() {
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search);
    const error = param.get("error");
    if (error) {
      setError(error);
    }
  }, []);

  return (
    <main className="max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4 text-white">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <AuthView
        cardHeader={<AuthHeader />}
        cardFooter={<AuthFooter />}
        redirectTo="/dashboard"
        classNames={{
          header: "text-center",
          footer: "items-center justify-center",
        }}
      />

      {error && <p className="text-red-500">{error}</p>}
    </main>
  );
}
