import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/provider/auth/config";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, slug, logo, metadata } = body;

    const org = await auth.api.createOrganization({
      body: { name, slug, logo, metadata },
      headers: await headers(),
    });

    return NextResponse.json(org, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
