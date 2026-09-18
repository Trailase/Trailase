import type { Metadata } from 'next';
import { OperatorInspections } from '@/views/inspections/operator';

export const metadata: Metadata = {
  title: 'Inspection console',
  description: 'Create and follow move-in inspections in Trailase.',
};

export default function OperatorInspectionsPage() {
  return <OperatorInspections />;
}
