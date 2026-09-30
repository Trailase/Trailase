import type { InspectionRecord } from '../entity';
import type { InspectionRepository } from '../repository';

const clone = (record: InspectionRecord): InspectionRecord => structuredClone(record);

export class InMemoryInspectionRepository implements InspectionRepository {
  private readonly records = new Map<string, InspectionRecord>();

  listByOwner(ownerSessionId: string): InspectionRecord[] {
    return [...this.records.values()]
      .filter((record) => record.ownerSessionId === ownerSessionId)
      .map(clone);
  }

  listAll(): InspectionRecord[] {
    return [...this.records.values()].map(clone);
  }

  findByToken(token: string): InspectionRecord | null {
    const record = this.records.get(token);
    return record ? clone(record) : null;
  }

  save(record: InspectionRecord): void {
    this.records.set(record.token, clone(record));
  }

  deleteByOwner(id: string, ownerSessionId: string): boolean {
    const record = [...this.records.values()].find(
      (candidate) => candidate.id === id && candidate.ownerSessionId === ownerSessionId,
    );
    return record ? this.records.delete(record.token) : false;
  }
}
