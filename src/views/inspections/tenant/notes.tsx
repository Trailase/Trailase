import { useLanguage } from '@/components/i18n/language-provider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function Notes({
  value,
  onChange,
  className,
}: {
  value: string;
  onChange: (value: string) => void;
  className: string;
}) {
  const { t } = useLanguage();
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="text-balance font-display text-h3 tracking-tight">
          {t('inspection.notesTitle')}
        </CardTitle>
        <CardDescription>{t('inspection.notesText')}</CardDescription>
      </CardHeader>
      <CardContent>
        <Label htmlFor="inspection-notes" className="sr-only">
          {t('inspection.notesLabel')}
        </Label>
        <Textarea
          id="inspection-notes"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={t('inspection.notesPlaceholder')}
          maxLength={1200}
          className="min-h-48 rounded-xl bg-background text-base"
        />
        <p className="mt-2 text-right text-xs text-muted-foreground">{value.length} / 1,200</p>
      </CardContent>
    </Card>
  );
}
