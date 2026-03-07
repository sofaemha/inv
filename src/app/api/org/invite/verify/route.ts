import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/provider/auth/config";
import { headers } from "next/headers";

export async function PATCH(req: NextRequest) {
  try {
    const { action, invitationId } = await req.json();
    let result;

    if (action === "accept") {
      result = await auth.api.acceptInvitation({
        body: { invitationId },
        headers: await headers(),
      });
    } else if (action === "reject") {
      result = await auth.api.rejectInvitation({
        body: { invitationId },
        headers: await headers(),
      });
    } else if (action === "cancel") {
      result = await auth.api.cancelInvitation({
        body: { invitationId },
        headers: await headers(),
      });
    } else {
      return NextResponse.json({ error: "Invalid action" }, { status: 400 });
    }

    return NextResponse.json(result);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}