import { NextResponse } from "next/server";

export const runtime = "edge";

export async function DELETE(req, { params: { id } }) {
  return NextResponse.json({ success: true });
}
