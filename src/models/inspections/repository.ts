import type { InspectionRecord } from './entity';

export interface InspectionRepository {
  listByOwner(ownerSessionId: string): InspectionRecord[];
  listAll(): InspectionRecord[];
  findByToken(token: string): InspectionRecord | null;
  save(record: InspectionRecord): void;
  deleteByOwner(id: string, ownerSessionId: string): boolean;
}
