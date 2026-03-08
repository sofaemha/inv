"use client";

import { useRouter } from "next/navigation";
import { auth } from "@/provider/auth/client";
import { useEffect } from "react";
import Image from "next/image";

export default function Dash() {
  const router = useRouter();
  const { data: session, isPending } = auth.useSession();

  useEffect(() => {
    if (!isPending && !session?.user) {
      router.push("/sign/in");
    }
  }, [isPending, session, router]);

  if (isPending) return <p className="text-center mt-8">Loading...</p>;
  if (!session?.user) return <p className="text-center mt-8">Redirecting...</p>;

  const { user } = session;

  return (
    <main className="max-w-md h-screen flex items-center justify-center flex-col mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <Image
        src={user.image || ""}
        alt={user.name || "User"}
        width={100}
        height={100}
      />
      <p>Welcome, {user.name || "User"}!</p>
      <p>Email: {user.email}</p>
      <button
        onClick={() => auth.signOut()}
        className="w-full bg-white text-black font-medium rounded-md px-4 py-2 hover:bg-gray-200"
      >
        Sign Out
      </button>
    </main>
  );
}
