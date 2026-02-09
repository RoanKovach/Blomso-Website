import { NextResponse } from "next/server";
import { saveLead } from "@/lib/storage";

interface LeadPayload {
  type: "investor" | "operator";
  name: string;
  email: string;
  company: string;
  message?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: unknown): { ok: true; data: LeadPayload } | { ok: false; errors: string[] } {
  const errors: string[] = [];

  if (typeof body !== "object" || body === null) {
    return { ok: false, errors: ["Request body must be a JSON object."] };
  }

  const b = body as Record<string, unknown>;

  if (b.type !== "investor" && b.type !== "operator") {
    errors.push("type must be \"investor\" or \"operator\".");
  }

  if (typeof b.name !== "string" || b.name.trim().length < 1) {
    errors.push("name is required.");
  }

  if (typeof b.email !== "string" || !EMAIL_RE.test(b.email)) {
    errors.push("A valid email is required.");
  }

  if (typeof b.company !== "string" || b.company.trim().length < 1) {
    errors.push("company is required.");
  }

  if (b.message !== undefined && typeof b.message !== "string") {
    errors.push("message must be a string if provided.");
  }

  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    data: {
      type: b.type as LeadPayload["type"],
      name: (b.name as string).trim(),
      email: (b.email as string).trim().toLowerCase(),
      company: (b.company as string).trim(),
      message: typeof b.message === "string" ? b.message.trim() : undefined,
    },
  };
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid JSON." },
      { status: 400 },
    );
  }

  const result = validate(body);

  if (!result.ok) {
    return NextResponse.json({ errors: result.errors }, { status: 422 });
  }

  const record = await saveLead(result.data);

  return NextResponse.json({ success: true, id: record.id }, { status: 201 });
}
