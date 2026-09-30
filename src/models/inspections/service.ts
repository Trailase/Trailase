import { defaultInspectionAreas, type InspectionRecord } from './entity';
import type { InspectionRepository } from './repository';
import {
  type InspectionCompletion,
  type InspectionCreate,
  type InspectionCreateResponse,
  InspectionOperatorItem,
  type InspectionOperatorItem as InspectionOperatorItemType,
  type InspectionSubmission,
  InspectionTenant,
  type InspectionTenant as InspectionTenantType,
} from './schema';

type ServiceDependencies = {
  repository: InspectionRepository;
  appOrigin: () => string;
  createId?: () => string;
  createToken?: () => string;
  now?: () => string;
};

export type InspectionStats = {
  total: number;
  pending: number;
  completed: number;
  completionRate: number;
  photos: number;
  flaggedAreas: number;
  daily: { date: string; count: number }[];
  recent: InspectionOperatorItemType[];
};

export type CompletionResult =
  | { kind: 'not-found' }
  | { kind: 'conflict' }
  | { kind: 'completed'; item: InspectionCompletion };

export class InspectionService {
  private readonly repository: InspectionRepository;
  private readonly appOrigin: () => string;
  private readonly createId: () => string;
  private readonly createToken: () => string;
  private readonly now: () => string;

  constructor({
    repository,
    appOrigin,
    createId = () => crypto.randomUUID(),
    createToken = () => `${crypto.randomUUID()}-${crypto.randomUUID()}`,
    now = () => new Date().toISOString(),
  }: ServiceDependencies) {
    this.repository = repository;
    this.appOrigin = appOrigin;
    this.createId = createId;
    this.createToken = createToken;
    this.now = now;
  }

  list(ownerSessionId: string): InspectionOperatorItemType[] {
    return this.repository
      .listByOwner(ownerSessionId)
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      .map((record) => this.toOperatorItem(record));
  }

  // Aggregate across every owner session — admin-only, never expose to tenants/operators.
  stats(days = 7, recentLimit = 8): InspectionStats {
    const records = this.repository
      .listAll()
      .sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    const completed = records.filter((record) => record.status === 'completed');

    const buckets = new Map<string, number>();
    const today = new Date(this.now());
    for (let offset = days - 1; offset >= 0; offset--) {
      const day = new Date(today);
      day.setUTCDate(today.getUTCDate() - offset);
      buckets.set(day.toISOString().slice(0, 10), 0);
    }
    for (const record of records) {
      const key = record.createdAt.slice(0, 10);
      const count = buckets.get(key);
      if (count !== undefined) buckets.set(key, count + 1);
    }

    return {
      total: records.length,
      pending: records.length - completed.length,
      completed: completed.length,
      completionRate: records.length ? Math.round((completed.length / records.length) * 100) : 0,
      photos: records.reduce((sum, record) => sum + record.photos.length, 0),
      flaggedAreas: completed.reduce(
        (sum, record) => sum + record.areas.filter((area) => area.status !== 'good').length,
        0,
      ),
      daily: [...buckets].map(([date, count]) => ({ date, count })),
      recent: records.slice(0, recentLimit).map((record) => this.toOperatorItem(record)),
    };
  }

  create(ownerSessionId: string, input: InspectionCreate): InspectionCreateResponse {
    const record: InspectionRecord = {
      id: this.createId(),
      token: this.createToken(),
      ownerSessionId,
      roomLabel: input.roomLabel,
      status: 'pending',
      createdAt: this.now(),
      completedAt: null,
      areas: defaultInspectionAreas(),
      photos: [],
      notes: '',
      signature: null,
    };
    this.repository.save(record);
    return this.toOperatorItem(record);
  }

  getTenantInspection(token: string): InspectionTenantType | null {
    const record = this.repository.findByToken(token);
    if (!record) return null;
    return InspectionTenant.parse({
      id: record.id,
      roomLabel: record.roomLabel,
      status: record.status,
      createdAt: record.createdAt,
      areas: record.areas,
    });
  }

  complete(token: string, submission: InspectionSubmission): CompletionResult {
    const record = this.repository.findByToken(token);
    if (!record) return { kind: 'not-found' };
    if (record.status === 'completed') return { kind: 'conflict' };

    const completedAt = this.now();
    this.repository.save({
      ...record,
      status: 'completed',
      completedAt,
      areas: submission.condition,
      photos: submission.photos,
      notes: submission.notes,
      signature: submission.signature,
    });
    return { kind: 'completed', item: { id: record.id, status: 'completed', completedAt } };
  }

  delete(ownerSessionId: string, id: string): boolean {
    return this.repository.deleteByOwner(id, ownerSessionId);
  }

  private toOperatorItem(record: InspectionRecord): InspectionOperatorItemType {
    const origin = this.appOrigin().replace(/\/$/, '');
    return InspectionOperatorItem.parse({
      id: record.id,
      roomLabel: record.roomLabel,
      status: record.status,
      createdAt: record.createdAt,
      completedAt: record.completedAt,
      photoCount: record.photos.length,
      shareUrl: `${origin}/inspection?token=${encodeURIComponent(record.token)}`,
    });
  }
}
