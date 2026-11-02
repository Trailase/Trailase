import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

// A stable ref callback, so the message only scrolls into view when it first appears.
export const revealMessage = (node: HTMLElement | null) => {
  node?.scrollIntoView({ block: 'center' });
};

export function Header({ room }: { room: string }) {
  const { t } = useLanguage();
  return (
    <div className="max-w-lg">
      <p className="text-caption font-semibold uppercase tracking-[0.14em] text-white/90">
        {t('inspection.eyebrow')}
      </p>
      <h1 className="mt-2 font-display text-[clamp(1.9rem,3.2vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.03em] [overflow-wrap:anywhere]">
        {room}
      </h1>
      <p className="mt-3 leading-7 text-white/90">{t('inspection.intro')}</p>
    </div>
  );
}

export function Steps({ step, labels }: { step: number; labels: string[] }) {
  const { t } = useLanguage();
  const progress = ((step + 1) / labels.length) * 100;
  return (
    <div className="mb-5">
      <div className="mb-3 flex items-center justify-between gap-3 text-sm font-semibold">
        <span>{labels[step]}</span>
        <span className="shrink-0 text-muted-foreground">
          {step + 1} / {labels.length} · {Math.round(progress)}%
        </span>
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
            className={`text-xs ${index <= step ? 'font-semibold text-primary' : 'text-muted-foreground'}`}
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
    <div className="sticky bottom-3 z-10 mt-6 flex gap-3 rounded-full border border-border bg-background/95 p-2 shadow-xl backdrop-blur sm:static sm:rounded-none sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none sm:backdrop-blur-none">
      {step > 0 && (
        <Button
          type="button"
          variant="outline"
          className="h-12 flex-1 rounded-full font-semibold sm:flex-none sm:px-7"
          onClick={previous}
          disabled={submitting}
        >
          {t('inspection.back')}
        </Button>
      )}
      {step < total - 1 ? (
        <Button
          type="button"
          className="h-12 flex-1 rounded-full font-semibold shadow-brand sm:ml-auto sm:flex-none sm:px-8"
          onClick={next}
        >
          {t('inspection.continue')}
        </Button>
      ) : (
        <Button
          type="button"
          className="h-12 flex-1 rounded-full font-semibold shadow-brand sm:ml-auto sm:flex-none sm:px-8"
          onClick={submit}
          disabled={submitting}
        >
          {submitting ? t('inspection.sending') : t('inspection.submit')}
        </Button>
      )}
    </div>
  );
}
