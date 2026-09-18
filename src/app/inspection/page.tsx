import type { Metadata } from 'next';
import { InspectionFlow } from '@/views/inspections/flow';

export const metadata: Metadata = {
  title: 'Move-in inspection',
  description: 'A guided move-in inspection for your room.',
};

export default async function InspectionPage({
  searchParams,
}: {
  searchParams: Promise<{ token?: string | string[] }>;
}) {
  const { token } = await searchParams;
  return <InspectionFlow token={typeof token === 'string' ? token : ''} />;
}
