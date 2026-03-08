import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/provider/auth/config";
import { headers } from "next/headers";

export async function DELETE(req: NextRequest) {
  try {
    const { memberIdOrEmail, organizationId } = await req.json();

    await auth.api.removeMember({
      body: { memberIdOrEmail, organizationId },
      headers: await headers(),
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
