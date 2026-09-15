import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import type { ConditionArea, ConditionValue } from '@/models/inspections/schema';

type Props = {
  areas: ConditionArea[];
  onChange: (id: ConditionArea['id'], update: Partial<ConditionArea>) => void;
  className: string;
};

export function Condition({ areas, onChange, className }: Props) {
  const { t } = useLanguage();
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="font-display text-h3 tracking-tight">
          {t('inspection.conditionTitle')}
        </CardTitle>
        <CardDescription>{t('inspection.conditionText')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-7">
        {areas.map((area) => (
          <div
            key={area.id}
            className="space-y-3 border-b border-border pb-6 last:border-0 last:pb-0"
          >
            <div className="flex items-center justify-between gap-3">
              <Label className="text-base font-semibold">{t(`inspection.area.${area.id}`)}</Label>
              <span className="text-xs text-muted-foreground">{t('inspection.required')}</span>
            </div>
            <Choices value={area.status} onChange={(status) => onChange(area.id, { status })} />
            <Input
              aria-label={`${area.label} note`}
              value={area.note}
              onChange={(event) => onChange(area.id, { note: event.target.value })}
              placeholder={t('inspection.optionalNote')}
              maxLength={240}
              className="h-11 rounded-sm bg-background"
            />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

function Choices({
  value,
  onChange,
}: {
  value: ConditionValue;
  onChange: (value: ConditionValue) => void;
}) {
  const { t } = useLanguage();
  const choices: ConditionValue[] = ['good', 'attention', 'damage'];
  return (
    <fieldset className="grid grid-cols-3 gap-2">
      <legend className="sr-only">{t('inspection.conditionLegend')}</legend>
      {choices.map((choice) => (
        <Button
          key={choice}
          type="button"
          size="sm"
          variant={value === choice ? 'secondary' : 'outline'}
          className={`h-auto min-h-12 whitespace-normal px-2 text-xs leading-4 ${value === choice ? 'border-brand-500 bg-brand-100 text-brand-900 dark:bg-brand-900/60 dark:text-brand-100' : ''}`}
          onClick={() => onChange(choice)}
          aria-pressed={value === choice}
        >
          {t(`inspection.${choice}`)}
        </Button>
      ))}
    </fieldset>
  );
}
