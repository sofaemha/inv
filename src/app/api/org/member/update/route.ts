import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/provider/auth/config";
import { headers } from "next/headers";

export async function PATCH(req: NextRequest) {
  try {
    const { memberId, role, organizationId } = await req.json();

    const updated = await auth.api.updateMemberRole({
      body: { memberId, role, organizationId },
      headers: await headers(),
    });

    return NextResponse.json(updated);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
