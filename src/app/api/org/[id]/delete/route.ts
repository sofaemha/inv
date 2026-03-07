import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/provider/auth/config";
import { headers } from "next/headers";

type Params = { params: Promise<{ id: string }> };

export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    const { id } = await params;

    await auth.api.deleteOrganization({
      body: { organizationId: id },
      headers: await headers(),
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}