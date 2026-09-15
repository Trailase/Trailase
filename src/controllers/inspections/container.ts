import { InMemoryInspectionRepository } from '@/models/inspections/repositories/memory';
import type { InspectionRepository } from '@/models/inspections/repository';
import { InspectionService } from '@/models/inspections/service';

const globalRepository = globalThis as typeof globalThis & {
  trailaseInspectionRepository?: InspectionRepository;
};

const repository =
  globalRepository.trailaseInspectionRepository ?? new InMemoryInspectionRepository();

globalRepository.trailaseInspectionRepository = repository;

export const inspectionService = new InspectionService({
  repository,
  appOrigin: () => process.env.NEXT_PUBLIC_APP_URL ?? 'http://localhost:3000',
});
