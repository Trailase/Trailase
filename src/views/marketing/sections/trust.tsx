import { Globe, KeyRound, Link2, Scale, ShieldCheck, UserX } from 'lucide-react';
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
        <SectionHeading
          eyebrow={t('home.trustEyebrow')}
          title={t('home.trustTitle')}
          intro={t('home.trustIntro')}
        />
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
