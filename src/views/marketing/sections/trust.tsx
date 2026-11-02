import { Globe, KeyRound, Link2, Scale, ShieldCheck, UserX } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/components/i18n/language-provider';
import { SectionHeading } from '../heading';

const points = [
  { icon: UserX, title: 'home.trustPoint1Title', text: 'home.trustPoint1Text' },
  { icon: Link2, title: 'home.trustPoint2Title', text: 'home.trustPoint2Text' },
  { icon: KeyRound, title: 'home.trustPoint3Title', text: 'home.trustPoint3Text' },
  { icon: ShieldCheck, title: 'home.trustPoint4Title', text: 'home.trustPoint4Text' },
  { icon: Globe, title: 'home.trustPoint5Title', text: 'home.trustPoint5Text' },
  { icon: Scale, title: 'home.trustScopeTitle', text: 'home.trustScope' },
];

export function Trust() {
  const { t } = useLanguage();
  return (
    <section className="px-gutter py-section">
      <div className="mx-auto w-full max-w-[var(--container-page)]">
        <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <SectionHeading
            eyebrow={t('home.trustEyebrow')}
            title={t('home.trustTitle')}
            intro={t('home.trustIntro')}
          />
          <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-lg">
            <Image
              src="/images/heroProperty.jpg"
              alt=""
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover object-[60%_center]"
            />
          </div>
        </div>
        <ul className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {points.map(({ icon: Icon, title, text }) => (
            <li key={title}>
              <span className="grid size-10 place-items-center rounded-xl bg-accent text-accent-foreground">
                <Icon className="size-5" aria-hidden />
              </span>
              <h3 className="mt-3 font-semibold">{t(title)}</h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">{t(text)}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
