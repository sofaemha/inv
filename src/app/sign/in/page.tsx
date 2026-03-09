"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth, OAuth } from "@/provider/auth/client";
import { AuthView, SignedIn } from "@daveyplate/better-auth-ui";

export default function SignInPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search);
    const error = param.get("error");
    if (error) {
      setError(error);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const formData = new FormData(e.currentTarget);

    const res = await auth.signIn.email({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (res.error) {
      setError(res.error.message || "Something went wrong.");
    } else {
      router.push("/~");
    }
  }

  return (
    <main className="max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4 text-white">
      <h1 className="text-2xl font-bold">Sign In</h1>
      <AuthView
        cardHeader={
          <div className="flex flex-col gap-2">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded"
            >
              Sign In
            </button>
            <button
              type="button"
              onClick={() => router.push("/sign-up")}
              className="w-full bg-gray-500 text-white p-2 rounded"
            >
              Sign Up
            </button>
          </div>
        }
        classNames={{
          header: "text-center",
          form: {
            base: "hidden",
          },
        }}
      />
      {error && <p className="text-red-500">{error}</p>}
    </main>
  );
}
