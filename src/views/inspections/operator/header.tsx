import { ClipboardPlus } from 'lucide-react';
import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';

type Props = { creating: boolean; disabled: boolean; onCreate: () => void };

export function Header({ creating, disabled, onCreate }: Props) {
  const { t } = useLanguage();
  return (
    <header className="video-copy h-fit border border-border shadow-2xl !p-4">
      <p className="text-caption font-semibold uppercase tracking-[0.14em] text-primary">
        {t('operator.eyebrow')}
      </p>
      <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight text-foreground">
        {t('operator.title')}
      </h1>
      <p className="mt-2 text-sm leading-5 text-muted-foreground">{t('operator.intro')}</p>
      <div className="mt-3 text-xs leading-5 text-muted-foreground">
        {t('operator.prototypeNote')}
      </div>
      <Button
        type="button"
        size="lg"
        variant="default"
        className="mt-3 h-auto min-h-10 w-full max-w-full whitespace-normal rounded-md py-2 shadow-brand sm:w-auto"
        onClick={onCreate}
        disabled={creating || disabled}
      >
        <ClipboardPlus aria-hidden />
        {creating ? t('operator.creating') : t('operator.create')}
      </Button>
    </header>
  );
}
