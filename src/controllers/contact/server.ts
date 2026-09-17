import { type NextRequest, NextResponse } from 'next/server';
import { ContactMessageCreate, ContactMessageResponse } from '@/models/contact/schema';
import { sendContactMessage } from '@/models/contact/service';

function validationPayload(error: {
  flatten: () => { fieldErrors: Record<string, string[] | undefined> };
}) {
  const errors: Record<string, string> = {};
  for (const [field, messages] of Object.entries(error.flatten().fieldErrors)) {
    if (messages?.[0]) errors[field] = messages[0];
  }
  return { errors };
}

export async function createContactMessage(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const parsed = ContactMessageCreate.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(validationPayload(parsed.error), { status: 400 });
  }

  const result = await sendContactMessage(parsed.data);
  if (!result.ok) {
    const status = result.reason === 'not-configured' ? 503 : 502;
    return NextResponse.json({ error: result.reason }, { status });
  }

  return NextResponse.json(ContactMessageResponse.parse({ sent: true }), { status: 201 });
}
