import { useLanguage } from '@/components/i18n/language-provider';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Signature } from './signature';

type Props = {
  signature: string;
  consent: boolean;
  onSignature: (value: string) => void;
  onConsent: (value: boolean) => void;
  className: string;
};

export function Signing({ signature, consent, onSignature, onConsent, className }: Props) {
  const { t } = useLanguage();
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="font-display text-h3 tracking-tight">
          {t('inspection.signatureTitle')}
        </CardTitle>
        <CardDescription>{t('inspection.signatureText')}</CardDescription>
      </CardHeader>
      <CardContent>
        <Signature value={signature} onChange={onSignature} />
        <Separator className="my-6" />
        <div className="flex items-start gap-3">
          <Checkbox
            id="signature-consent"
            checked={consent}
            onCheckedChange={(checked) => onConsent(checked === true)}
            className="mt-0.5"
          />
          <Label htmlFor="signature-consent" className="text-sm font-normal leading-6">
            {t('inspection.consent')}
          </Label>
        </div>
      </CardContent>
    </Card>
  );
}
