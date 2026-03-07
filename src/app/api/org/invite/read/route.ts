import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/provider/auth/config";
import { headers } from "next/headers";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = req.nextUrl;
    const organizationId = searchParams.get("oid") ?? undefined;

    const invitations = await auth.api.listInvitations({
      query: { organizationId },
      headers: await headers(),
    });

    return NextResponse.json(invitations);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}