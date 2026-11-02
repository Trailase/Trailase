'use client';

import { toast } from 'sonner';
import { useLanguage } from '@/components/i18n/language-provider';
import { useOperator } from '@/controllers/inspections/useOperator';
import { DemoLayout } from './layout';
import { Header, Intro } from './operator/header';
import { Queue } from './operator/queue';

export function OperatorInspections() {
  const { locale, t } = useLanguage();
  const controller = useOperator(t, toast);
  return (
    <DemoLayout video="demoOperator" intro={<Intro />}>
      <div className="grid gap-8">
        <Header
          creating={controller.creating}
          disabled={controller.items === null}
          onCreate={(roomLabel) => void controller.create(roomLabel)}
        />
        <Queue
          {...controller}
          locale={locale}
          onRefresh={() => void controller.refresh()}
          onRetry={() => void controller.retry()}
          onCopy={(link) => void controller.copy(link)}
          onDelete={(item) => void controller.remove(item)}
          onPrevious={controller.previous}
          onNext={controller.next}
        />
      </div>
    </DemoLayout>
  );
}
