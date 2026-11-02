import {
  ChevronLeft,
  ChevronRight,
  ClipboardPlus,
  Copy,
  ExternalLink,
  RefreshCw,
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { AppLocale } from '@/lib/i18n';
import type { InspectionOperatorItem } from '@/models/inspections/schema';
import { Item } from './item';

type Props = {
  locale: AppLocale;
  items: InspectionOperatorItem[] | null;
  visibleItems: InspectionOperatorItem[];
  loadError: string | null;
  refreshing: boolean;
  latestLink: string | null;
  deletingId: string | null;
  visiblePage: number;
  totalPages: number;
  onRefresh: () => void;
  onRetry: () => void;
  onCopy: (link: string) => void;
  onDelete: (item: InspectionOperatorItem) => void;
  onPrevious: () => void;
  onNext: () => void;
};

export function Queue(props: Props) {
  const { t } = useLanguage();
  return (
    <section aria-labelledby="inspection-list-title">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-caption font-semibold uppercase tracking-[0.15em] text-brand-700 dark:text-brand-300">
            {t('operator.queue')}
          </p>
          <h2 id="inspection-list-title" className="mt-1 font-display text-h3 tracking-tight">
            {t('operator.recent')}
          </h2>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="sm"
          onClick={props.onRefresh}
          disabled={props.refreshing}
        >
          <RefreshCw className={props.refreshing ? 'animate-spin' : ''} aria-hidden />
          {t('operator.refresh')}
        </Button>
      </div>
      {props.loadError ? (
        <Failure message={props.loadError} retry={props.onRetry} />
      ) : props.items === null ? (
        <Loading />
      ) : props.items.length === 0 ? (
        <Empty />
      ) : (
        <div className="space-y-3">
          {props.visibleItems.map((item) => (
            <Item
              key={item.id}
              item={item}
              locale={props.locale}
              deleting={props.deletingId === item.id}
              onCopy={() => props.onCopy(item.shareUrl)}
              onDelete={() => props.onDelete(item)}
            />
          ))}
          <nav
            className="flex items-center justify-between gap-3 border-t border-border pt-3"
            aria-label={t('operator.paginationLabel')}
          >
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="rounded-full"
              disabled={props.visiblePage === 1}
              onClick={props.onPrevious}
            >
              <ChevronLeft aria-hidden />
              {t('operator.previous')}
            </Button>
            <p className="text-xs font-medium text-muted-foreground sm:text-sm">
              {t('operator.pageOf', { page: props.visiblePage, pages: props.totalPages })}
            </p>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="rounded-full"
              disabled={props.visiblePage === props.totalPages}
              onClick={props.onNext}
            >
              {t('operator.next')}
              <ChevronRight aria-hidden />
            </Button>
          </nav>
        </div>
      )}
      {props.latestLink && !props.items?.some((item) => item.shareUrl === props.latestLink) && (
        <Card className="mt-5 rounded-2xl border-brand-300 bg-brand-50/70 shadow-sm dark:border-brand-700 dark:bg-brand-900/20">
          <CardContent className="p-5">
            <p className="text-eyebrow">{t('operator.latest')}</p>
            <p className="mt-2 break-all font-mono text-xs leading-5 text-muted-foreground">
              {props.latestLink}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                type="button"
                size="sm"
                className="rounded-full"
                onClick={() => props.onCopy(props.latestLink ?? '')}
              >
                <Copy aria-hidden />
                {t('operator.copy')}
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full">
                <Link href={props.latestLink} target="_blank">
                  {t('operator.openLink')}
                  <ExternalLink aria-hidden />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </section>
  );
}

function Failure({ message, retry }: { message: string; retry: () => void }) {
  const { t } = useLanguage();
  return (
    <Card className="rounded-2xl border-destructive/40 bg-card shadow-sm">
      <CardContent className="flex flex-col gap-4 p-6">
        <p role="alert" className="text-sm text-destructive">
          {message}
        </p>
        <Button type="button" variant="outline" className="w-fit rounded-full" onClick={retry}>
          {t('operator.tryAgain')}
        </Button>
      </CardContent>
    </Card>
  );
}
function Loading() {
  const { t } = useLanguage();
  return (
    <Card className="rounded-2xl border-border bg-card shadow-sm">
      <CardContent className="space-y-4 p-6">
        <div className="h-2 animate-pulse rounded bg-brand-200 dark:bg-brand-800" />
        <p className="text-sm text-muted-foreground">{t('operator.loading')}</p>
      </CardContent>
    </Card>
  );
}
function Empty() {
  const { t } = useLanguage();
  return (
    <Card className="rounded-2xl border-dashed border-brand-300 bg-card shadow-sm dark:border-brand-700">
      <CardContent className="p-8 text-center">
        <ClipboardPlus className="mx-auto size-8 text-brand-600" aria-hidden />
        <p className="mt-4 font-medium">{t('operator.empty')}</p>
        <p className="mt-2 text-sm text-muted-foreground">{t('operator.emptyText')}</p>
      </CardContent>
    </Card>
  );
}
