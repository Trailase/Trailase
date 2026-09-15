import { type NextRequest, NextResponse } from 'next/server';
import {
  InspectionCompletion,
  InspectionSubmission,
  InspectionTenant,
} from '@/models/inspections/schema';
import { inspectionService } from './container';
import { internalError, notFound, validationPayload } from './http';

export async function getTenantInspection(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get('token') ?? '';
    const inspection = inspectionService.getTenantInspection(token);
    if (!inspection) return notFound();
    return NextResponse.json(InspectionTenant.parse(inspection));
  } catch {
    return internalError();
  }
}

export async function completeTenantInspection(request: NextRequest) {
  try {
    const token = request.nextUrl.searchParams.get('token') ?? '';
    const parsed = InspectionSubmission.safeParse(await request.json());
    if (!parsed.success) {
      return NextResponse.json(validationPayload(parsed.error), { status: 400 });
    }

    const result = inspectionService.complete(token, parsed.data);
    if (result.kind === 'not-found') return notFound();
    if (result.kind === 'conflict') {
      return NextResponse.json(
        { error: 'This inspection has already been completed' },
        { status: 409 },
      );
    }
    return NextResponse.json(InspectionCompletion.parse(result.item));
  } catch {
    return internalError();
  }
}
