import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/provider/auth/config";
import { headers } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { email, role, organizationId, resend } = await req.json();

    const invitation = await auth.api.createInvitation({
      body: { email, role, organizationId, resend },
      headers: await headers(),
    });

    return NextResponse.json(invitation, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
