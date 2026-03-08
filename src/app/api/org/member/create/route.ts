import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/provider/auth/config";
import { headers } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { userId, role, organizationId } = await req.json();

    const member = await auth.api.addMember({
      body: { userId, role, organizationId },
      headers: await headers(),
    });

    return NextResponse.json(member, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
