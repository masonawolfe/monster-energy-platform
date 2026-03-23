// Sprint 1: Implement this to move brief generation server-side
// Currently page.tsx calls Anthropic directly (fine for demo)
// When ready: move the generateBrief fetch body here and update page.tsx to call /api/brief

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // TODO Sprint 1
  return NextResponse.json({ error: "Not implemented yet" }, { status: 501 });
}