// Sprint 1: Implement this to move chat server-side
// Currently page.tsx calls Anthropic directly (fine for demo)

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // TODO Sprint 1
  return NextResponse.json({ error: "Not implemented yet" }, { status: 501 });
}