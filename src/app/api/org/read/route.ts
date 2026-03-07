import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/provider/auth/config";

export async function GET(req: NextRequest) {
  try {
    const orgs = await auth.api.listOrganizations({
      headers: await headers(),
    });
    return NextResponse.json(orgs);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
