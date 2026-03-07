import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/provider/auth/config";

// GET /api/organizations — list all organizations for the current user
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

// POST /api/organizations — create a new organization
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
