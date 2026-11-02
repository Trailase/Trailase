import { ClipboardPlus } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Props = { creating: boolean; disabled: boolean; onCreate: (roomLabel: string) => void };

export function Intro() {
  const { t } = useLanguage();
  return (
    <div className="max-w-lg">
      <p className="text-caption font-semibold uppercase tracking-[0.14em] text-white/90">
        {t('operator.eyebrow')}
      </p>
      <h1 className="mt-2 text-balance font-display text-[clamp(1.9rem,3.2vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
        {t('operator.title')}
      </h1>
      <p className="mt-3 leading-7 text-white/90">{t('operator.intro')}</p>
      <p className="mt-3 text-sm leading-6 text-white/80">{t('operator.prototypeNote')}</p>
    </div>
  );
}

export function Header({ creating, disabled, onCreate }: Props) {
  const { t } = useLanguage();
  const [roomLabel, setRoomLabel] = useState('');

  return (
    <div className="rounded-2xl border border-border bg-card p-4 shadow-sm sm:p-5">
      <form
        className="flex flex-col gap-3 sm:flex-row"
        onSubmit={(event) => {
          event.preventDefault();
          const trimmed = roomLabel.trim();
          if (!trimmed) return;
          onCreate(trimmed);
          setRoomLabel('');
        }}
      >
        <Input
          value={roomLabel}
          onChange={(event) => setRoomLabel(event.target.value)}
          placeholder={t('operator.roomLabelPlaceholder')}
          maxLength={80}
          aria-label={t('operator.roomLabelPlaceholder')}
          className="h-12 rounded-xl bg-background"
        />
        <Button
          type="submit"
          size="lg"
          variant="default"
          className="h-auto min-h-12 w-full max-w-full shrink-0 whitespace-normal rounded-full px-6 py-2 font-semibold shadow-brand sm:w-auto"
          disabled={creating || disabled || !roomLabel.trim()}
        >
          <ClipboardPlus aria-hidden />
          {creating ? t('operator.creating') : t('operator.create')}
        </Button>
      </form>
    </div>
  );
}
