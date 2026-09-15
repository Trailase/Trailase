import { type NextRequest, NextResponse } from 'next/server';
import { attachAnonymousSession, getAnonymousSession } from '@/lib/server/anonymous-session';
import {
  InspectionCreate,
  InspectionCreateResponse,
  InspectionDeletion,
  InspectionOperatorList,
} from '@/models/inspections/schema';
import { inspectionService } from './container';
import { internalError, notFound, validationPayload } from './http';

export async function listOperatorInspections(request: NextRequest) {
  const session = getAnonymousSession(request);
  try {
    return attachAnonymousSession(
      NextResponse.json(
        InspectionOperatorList.parse({ items: inspectionService.list(session.id) }),
      ),
      session,
    );
  } catch {
    return attachAnonymousSession(internalError(), session);
  }
}

export async function createOperatorInspection(request: NextRequest) {
  const session = getAnonymousSession(request);
  try {
    const parsed = InspectionCreate.safeParse(await request.json());
    if (!parsed.success) {
      return attachAnonymousSession(
        NextResponse.json(validationPayload(parsed.error), { status: 400 }),
        session,
      );
    }
    return attachAnonymousSession(
      NextResponse.json(
        InspectionCreateResponse.parse(inspectionService.create(session.id, parsed.data)),
        { status: 201 },
      ),
      session,
    );
  } catch {
    return attachAnonymousSession(internalError(), session);
  }
}

export async function deleteOperatorInspection(request: NextRequest) {
  const session = getAnonymousSession(request);
  try {
    const id = request.nextUrl.searchParams.get('id');
    if (!id) return attachAnonymousSession(notFound(), session);
    if (!inspectionService.delete(session.id, id)) {
      return attachAnonymousSession(notFound(), session);
    }
    return attachAnonymousSession(
      NextResponse.json(InspectionDeletion.parse({ id, deleted: true })),
      session,
    );
  } catch {
    return attachAnonymousSession(internalError(), session);
  }
}
