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
