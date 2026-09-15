import { Mail } from 'lucide-react';
import { AmbientVideo } from '@/components/custom/ambient-video';
import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';
import { backgroundVideo } from '@/lib/background-videos';
import { requestContactRedirect } from '@/lib/contact-redirect';
import { contactMailto } from '@/lib/i18n';

export function Contact() {
  const { locale, t } = useLanguage();
  const contactHref = contactMailto(locale);
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-20 overflow-hidden bg-background px-gutter py-20 text-foreground md:py-28"
    >
      <AmbientVideo
        src={backgroundVideo('homeContact')}
        className="pointer-events-none absolute inset-0 -z-30 size-full object-cover object-center motion-reduce:hidden"
      />
      <div className="video-overlay pointer-events-none absolute inset-0 -z-20" />
      <div className="relative mx-auto flex w-full max-w-[var(--container-page)] flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="video-copy max-w-2xl">
          <p className="text-eyebrow">{t('home.tagline')}</p>
          <h2 className="mt-4 font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.04em]">
            {t('home.contactTitle')}
          </h2>
          <p className="mt-5 max-w-xl text-body-lg leading-8 text-muted-foreground">
            {t('home.contactText')}
          </p>
          <Button
            asChild
            size="lg"
            className="mt-7 min-h-13 h-auto max-w-full whitespace-normal rounded-sm px-7 py-3 font-semibold shadow-brand"
          >
            <a
              href={contactHref}
              onClick={(event) => {
                event.preventDefault();
                requestContactRedirect(contactHref);
              }}
            >
              <Mail aria-hidden /> {t('home.contactButton')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
