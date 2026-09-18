'use client';

import { toast } from 'sonner';
import { DemoBackground } from '@/components/custom/demo-background';
import { useLanguage } from '@/components/i18n/language-provider';
import { useOperator } from '@/controllers/inspections/useOperator';
import { backgroundVideo } from '@/lib/background-videos';
import { Header } from './operator/header';
import { Queue } from './operator/queue';

export function OperatorInspections() {
  const { locale, t } = useLanguage();
  const controller = useOperator(t, toast);
  return (
    <main className="demo-layout h-[calc(100svh-7rem)] overflow-hidden bg-background px-gutter py-3">
      <DemoBackground src={backgroundVideo('demoOperator')} />
      <div className="mx-auto w-full max-w-xl">
        <div className="grid gap-4">
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
      </div>
    </main>
  );
}
