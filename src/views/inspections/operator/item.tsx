import { CheckCircle2, Clock3, Copy, ExternalLink, Trash2 } from 'lucide-react';
import { useLanguage } from '@/components/i18n/language-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import type { AppLocale } from '@/lib/i18n';
import type { InspectionOperatorItem } from '@/models/inspections/schema';

function formatDate(value: string, locale: AppLocale) {
  const language = { en: 'en-GB', es: 'es-ES', fr: 'fr-FR', nl: 'nl-NL' }[locale];
  return new Intl.DateTimeFormat(language, {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value));
}

function Status({ status }: { status: InspectionOperatorItem['status'] }) {
  const { t } = useLanguage();
  return status === 'completed' ? (
    <Badge className="w-fit shrink-0 rounded-full bg-brand-100 text-brand-800 hover:bg-brand-100 dark:bg-brand-900/50 dark:text-brand-200">
      <CheckCircle2 className="mr-1 size-3.5" aria-hidden />
      {t('operator.completed')}
    </Badge>
  ) : (
    <Badge
      variant="outline"
      className="w-fit shrink-0 rounded-full border-brand-300 text-brand-700 dark:border-brand-700 dark:text-brand-300"
    >
      <Clock3 className="mr-1 size-3.5" aria-hidden />
      {t('operator.awaiting')}
    </Badge>
  );
}

type Props = {
  item: InspectionOperatorItem;
  locale: AppLocale;
  deleting: boolean;
  onCopy: () => void;
  onDelete: () => void;
};

export function Item({ item, locale, deleting, onCopy, onDelete }: Props) {
  const { t } = useLanguage();
  return (
    <Card className="overflow-hidden rounded-2xl border-border bg-card shadow-sm">
      <CardHeader className="gap-2 border-b border-border bg-gradient-to-r from-brand-50/80 to-transparent p-4 dark:from-brand-900/25 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <CardTitle className="font-display text-xl tracking-tight [overflow-wrap:anywhere]">
            {item.roomLabel}
          </CardTitle>
          <CardDescription className="mt-1">
            {t('operator.created', { date: formatDate(item.createdAt, locale) })}
          </CardDescription>
        </div>
        <Status status={item.status} />
      </CardHeader>
      <CardContent className="space-y-4 p-4">
        <div className="grid grid-cols-2 gap-3 text-sm sm:grid-cols-3">
          <Metric label={t('operator.photos')} value={String(item.photoCount)} />
          <Metric
            label={t('operator.status')}
            value={item.status === 'completed' ? t('operator.completed') : t('operator.awaiting')}
          />
          <Metric
            label={t('operator.completedAt')}
            value={item.completedAt ? formatDate(item.completedAt, locale) : '-'}
            wide
          />
        </div>
        <div className="flex flex-col gap-2 border-t border-border pt-4 sm:flex-row sm:flex-wrap">
          <Button type="button" variant="outline" className="rounded-full" onClick={onCopy}>
            <Copy aria-hidden />
            {t('operator.copy')}
          </Button>
          <Button asChild variant="secondary" className="rounded-full">
            <a href={item.shareUrl} target="_blank" rel="noreferrer">
              <ExternalLink aria-hidden />
              {t('operator.open')}
            </a>
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="rounded-full text-destructive hover:bg-destructive/10 hover:text-destructive sm:ml-auto"
            disabled={deleting}
            onClick={onDelete}
          >
            <Trash2 aria-hidden />
            {deleting ? t('operator.deleting') : t('operator.delete')}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function Metric({ label, value, wide = false }: { label: string; value: string; wide?: boolean }) {
  return (
    <div className={`${wide ? 'col-span-2 sm:col-span-1 ' : ''}border-l border-border pl-3`}>
      <p className="text-muted-foreground">{label}</p>
      <p className="mt-1 font-semibold">{value}</p>
    </div>
  );
}
