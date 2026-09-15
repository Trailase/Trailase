import Image from 'next/image';
import { useLanguage } from '@/components/i18n/language-provider';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import type { ConditionArea, PhotoPayload } from '@/models/inspections/schema';

type Props = {
  condition: ConditionArea[];
  photos: PhotoPayload[];
  notes: string;
  signed: boolean;
  className: string;
};

export function Review({ condition, photos, notes, signed, className }: Props) {
  const { t } = useLanguage();
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle className="font-display text-h3 tracking-tight">
          {t('inspection.reviewTitle')}
        </CardTitle>
        <CardDescription>{t('inspection.reviewText')}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <Metric value={condition.length} label={t('inspection.areasChecked')} />
          <Metric value={photos.length} label={t('inspection.photosAdded')} />
          <Metric
            value={signed ? t('inspection.yes') : t('inspection.no')}
            label={t('inspection.signatureReady')}
            wide
          />
        </div>
        <Separator />
        <div>
          <p className="text-sm font-semibold">{t('inspection.notesLabel')}</p>
          <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-muted-foreground">
            {notes || t('inspection.noNotes')}
          </p>
        </div>
        <div className="border-l-2 border-brand-500 bg-brand-50/60 px-4 py-3 text-sm text-muted-foreground dark:bg-brand-900/20">
          {t('inspection.submitNotice')}
        </div>
        <div>
          <div className="flex items-baseline justify-between gap-3">
            <p className="text-sm font-semibold">{t('inspection.photoEvidence')}</p>
            <span className="text-xs text-muted-foreground">
              {t('inspection.capturedCount', { count: photos.length })}
            </span>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {photos.map((photo) => (
              <Evidence key={photo.id} photo={photo} />
            ))}
          </div>
          <p className="mt-3 text-xs text-muted-foreground">{t('inspection.cameraIncluded')}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function Metric({
  value,
  label,
  wide = false,
}: {
  value: string | number;
  label: string;
  wide?: boolean;
}) {
  return (
    <div className={`${wide ? 'col-span-2 sm:col-span-1 ' : ''}border-l-2 border-brand-500 pl-3`}>
      <p className="text-2xl font-semibold">{value}</p>
      <p className="text-xs text-muted-foreground">{label}</p>
    </div>
  );
}

function Evidence({ photo }: { photo: PhotoPayload }) {
  const { t } = useLanguage();
  const demo = photo.filename.startsWith('demo-camera-');
  return (
    <div className="border border-border bg-muted/30 p-2">
      <Image
        src={photo.dataUrl}
        alt={demo ? t('inspection.demoPhotoAlt') : t('inspection.capturedPhotoAlt')}
        width={240}
        height={180}
        unoptimized
        className="aspect-[4/3] w-full object-cover"
      />
      <Badge variant="outline" className="mt-2 rounded-sm px-1.5 py-0 text-[10px]">
        {demo ? t('inspection.demoCapture') : t('inspection.captured')}
      </Badge>
    </div>
  );
}
