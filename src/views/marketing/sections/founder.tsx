import Image from 'next/image';
import { useLanguage } from '@/components/i18n/language-provider';
import { sectionTitle } from '../heading';

export function Founder() {
  const { t } = useLanguage();
  return (
    <section className="px-gutter py-section">
      <div className="mx-auto grid w-full max-w-[var(--container-page)] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg lg:sticky lg:top-24">
          <Image
            src="/images/trustHandshake.jpg"
            alt={t('home.founderImageAlt')}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-[45%_40%]"
          />
        </div>
        <div>
          <p className="text-eyebrow">{t('home.founderTitle')}</p>
          <h2 className={`mt-4 ${sectionTitle}`}>{t('home.founderHeadline')}</h2>
          <p className="mt-5 text-lg font-medium leading-8">{t('home.founderHook')}</p>
          {['home.founderText', 'home.founderText2', 'home.founderText3'].map((paragraph) => (
            <p key={paragraph} className="mt-4 leading-7 text-muted-foreground">
              {t(paragraph)}
            </p>
          ))}
          <dl className="mt-8 grid gap-6 border-t border-border pt-6 sm:grid-cols-2">
            {[1, 2].map((n) => (
              <div key={n}>
                <dd className="font-display text-3xl font-semibold tracking-tight text-primary">
                  {t(`home.founderStat${n}Value`)}
                </dd>
                <dt className="mt-1 text-sm leading-6 text-muted-foreground">
                  {t(`home.founderStat${n}Label`)}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
