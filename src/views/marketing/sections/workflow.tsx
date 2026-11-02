import { Check, Mail, MessageCircle, Send } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/components/i18n/language-provider';
import { cn } from '@/lib/utils';
import { SectionHeading } from '../heading';
import { TileVideo } from '../media';

const mockFrame =
  'flex h-52 flex-col justify-center rounded-xl border border-border bg-card p-4 shadow-lg';

function SendMock() {
  const { t } = useLanguage();
  return (
    <div className={mockFrame}>
      <p className="text-xs font-medium text-primary">{t('story.moveIn')}</p>
      <p className="mt-1 font-semibold">{t('home.mockRoom')}</p>
      <p className="text-sm text-muted-foreground">Sofia Martin</p>
      <div className="mt-3 flex gap-2 text-xs font-medium">
        <span className="flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1">
          <Mail className="size-3.5" aria-hidden /> {t('home.mockEmail')}
        </span>
        <span className="flex items-center gap-1.5 rounded-full border border-border px-2.5 py-1">
          <MessageCircle className="size-3.5" aria-hidden /> WhatsApp
        </span>
      </div>
      <p className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-primary py-2 text-xs font-semibold text-primary-foreground">
        <Send className="size-3.5" aria-hidden /> {t('home.mockSend')}
      </p>
    </div>
  );
}

function WalkthroughMock() {
  const { t } = useLanguage();
  return (
    <div className={mockFrame}>
      <div className="flex items-center gap-3">
        <div className="relative size-16 shrink-0 overflow-hidden rounded-lg">
          <Image
            src="/images/inspectionEvidence.jpg"
            alt=""
            fill
            sizes="64px"
            className="object-cover object-[72%_center]"
          />
        </div>
        <p className="font-semibold">{t('home.mockBedroom')}</p>
      </div>
      <div className="mt-3 flex flex-col gap-1.5 text-xs font-medium">
        {['home.mockGood', 'home.mockWear', 'home.mockDamage'].map((option, index) => (
          <span
            key={option}
            className={cn(
              'flex items-center justify-between rounded-lg border px-3 py-1.5',
              index === 0 ? 'border-primary bg-primary/10 text-primary' : 'border-border',
            )}
          >
            {t(option)}
            {index === 0 && <Check className="size-3.5" aria-hidden />}
          </span>
        ))}
      </div>
    </div>
  );
}

function RecordMock() {
  const { t } = useLanguage();
  return (
    <ul className={cn(mockFrame, 'gap-2 text-sm')}>
      {['home.photos', 'home.inventory', 'home.keys', 'home.meter', 'home.mockSignature'].map(
        (item) => (
          <li key={item} className="flex items-center gap-2.5">
            <span className="grid size-5 shrink-0 place-items-center rounded-full bg-accent text-accent-foreground">
              <Check className="size-3" aria-hidden />
            </span>
            {t(item)}
          </li>
        ),
      )}
    </ul>
  );
}

const steps = [
  { title: 'home.step1Title', text: 'home.step1Text', mock: SendMock, video: 'demoCondition' },
  { title: 'home.step2Title', text: 'home.step2Text', mock: WalkthroughMock, video: 'demoPhotos' },
  { title: 'home.step3Title', text: 'home.step3Text', mock: RecordMock, video: 'demoReview' },
] as const;

export function Workflow() {
  const { t } = useLanguage();
  return (
    <section id="how-it-works" className="scroll-mt-20 px-gutter py-section">
      <div className="mx-auto w-full max-w-[var(--container-page)]">
        <SectionHeading
          centered
          eyebrow={t('home.workflowEyebrow')}
          title={t('home.workflowTitle')}
          intro={t('home.workflowIntro')}
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map(({ title, text, mock: Mock, video }, index) => (
            <li
              key={title}
              className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm"
            >
              <div className="relative aspect-[16/10] bg-muted">
                <TileVideo video={video} />
              </div>
              <div className="relative z-10 mx-4 -mt-16">
                <Mock />
              </div>
              <div className="p-6 pt-5">
                <h3 className="flex items-baseline gap-2.5 font-display text-lg font-semibold tracking-tight">
                  <span className="text-primary">{index + 1}</span>
                  {t(title)}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{t(text)}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="mx-auto mt-8 max-w-2xl text-center font-medium">
          {t('home.workflowStandard')}
        </p>
      </div>
    </section>
  );
}
