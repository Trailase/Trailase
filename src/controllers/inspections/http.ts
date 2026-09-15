import { NextResponse } from 'next/server';

export function validationPayload(error: {
  flatten: () => { fieldErrors: Record<string, string[] | undefined> };
}) {
  const errors: Record<string, string> = {};
  for (const [field, messages] of Object.entries(error.flatten().fieldErrors)) {
    if (messages?.[0]) errors[field] = messages[0];
  }
  return { errors };
}

export const internalError = () =>
  NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });

export const notFound = () => NextResponse.json({ error: 'Inspection not found' }, { status: 404 });
