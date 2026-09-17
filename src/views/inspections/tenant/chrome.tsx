import { useLanguage } from '@/components/i18n/language-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

export function Header({ step, total }: { step: number; total: number }) {
  const { t } = useLanguage();
  return (
    <header className="video-copy mb-5 flex min-h-52 items-end justify-between gap-5 border border-border shadow-2xl sm:p-8">
      <div className="max-w-lg">
        <p className="text-caption font-semibold uppercase tracking-[0.14em] text-primary">
          {t('inspection.eyebrow')}
        </p>
        <h1 className="mt-2 font-display text-h2 tracking-tight text-foreground">Room 4B</h1>
        <p className="mt-2 text-sm text-muted-foreground">{t('inspection.intro')}</p>
      </div>
      <Badge className="mb-1 shrink-0 rounded-full border border-border bg-accent text-accent-foreground">
        {step + 1} / {total}
      </Badge>
    </header>
  );
}

export function Steps({ step, labels }: { step: number; labels: string[] }) {
  const { t } = useLanguage();
  const progress = ((step + 1) / labels.length) * 100;
  return (
    <div className="mb-5 rounded-xl border border-border bg-card/95 p-4 shadow-md backdrop-blur">
      <div className="mb-3 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
        <span>{labels[step]}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <Progress
        value={progress}
        aria-label={t('inspection.stepProgress', { current: step + 1, total: labels.length })}
        className="h-2"
      />
      <div className="mt-3 hidden grid-cols-5 gap-2 sm:grid">
        {labels.map((label, index) => (
          <span
            key={label}
            className={`text-xs ${index <= step ? 'font-semibold text-brand-700 dark:text-brand-300' : 'text-muted-foreground'}`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}

type NavigationProps = {
  step: number;
  total: number;
  submitting: boolean;
  previous: () => void;
  next: () => void;
  submit: () => void;
};

export function Navigation({ step, total, submitting, previous, next, submit }: NavigationProps) {
  const { t } = useLanguage();
  return (
    <div className="sticky bottom-3 z-10 mt-6 flex gap-3 border border-border bg-background/95 p-3 shadow-xl backdrop-blur sm:static sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none">
      {step > 0 && (
        <Button
          type="button"
          variant="outline"
          className="h-12 flex-1 rounded-sm sm:flex-none"
          onClick={previous}
          disabled={submitting}
        >
          {t('inspection.back')}
        </Button>
      )}
      {step < total - 1 ? (
        <Button
          type="button"
          className="h-12 flex-1 rounded-sm sm:ml-auto sm:flex-none sm:px-8"
          onClick={next}
        >
          {t('inspection.continue')}
        </Button>
      ) : (
        <Button
          type="button"
          className="h-12 flex-1 rounded-sm sm:ml-auto sm:flex-none sm:px-8"
          onClick={submit}
          disabled={submitting}
        >
          {submitting ? t('inspection.sending') : t('inspection.submit')}
        </Button>
      )}
    </div>
  );
}
