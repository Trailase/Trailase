import Image from 'next/image';
import { useLanguage } from '@/components/i18n/language-provider';
import { sectionTitle } from '../heading';

export function Founder() {
  const { t } = useLanguage();
  return (
    <section className="px-gutter py-section">
      <div className="mx-auto grid w-full max-w-[var(--container-page)] items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-lg">
          <Image
            src="/images/trustHandshake.jpg"
            alt={t('home.founderImageAlt')}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover object-[45%_40%]"
          />
        </div>
        <div>
          <p className="text-eyebrow">{t('home.founderEyebrow')}</p>
          <h2 className={`mt-4 ${sectionTitle}`}>{t('home.founderTitle')}</h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">{t('home.founderText')}</p>
          <p className="mt-4 text-lg font-medium leading-8">{t('home.founderClose')}</p>
        </div>
      </div>
    </section>
  );
}
