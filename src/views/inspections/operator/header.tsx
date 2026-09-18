import { ClipboardPlus } from 'lucide-react';
import { useState } from 'react';
import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type Props = { creating: boolean; disabled: boolean; onCreate: (roomLabel: string) => void };

export function Header({ creating, disabled, onCreate }: Props) {
  const { t } = useLanguage();
  const [roomLabel, setRoomLabel] = useState('');

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
      <form
        className="mt-3 flex flex-col gap-2 sm:flex-row"
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
          className="bg-background"
        />
        <Button
          type="submit"
          size="lg"
          variant="default"
          className="h-auto min-h-10 w-full max-w-full shrink-0 whitespace-normal rounded-md py-2 shadow-brand sm:w-auto"
          disabled={creating || disabled || !roomLabel.trim()}
        >
          <ClipboardPlus aria-hidden />
          {creating ? t('operator.creating') : t('operator.create')}
        </Button>
      </form>
    </header>
  );
}
