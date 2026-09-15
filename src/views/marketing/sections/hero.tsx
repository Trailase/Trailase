import { ArrowRight, Camera, CheckCircle2 } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { AmbientVideo } from '@/components/custom/ambient-video';
import { useLanguage } from '@/components/i18n/language-provider';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { backgroundVideo } from '@/lib/background-videos';
import { requestContactRedirect } from '@/lib/contact-redirect';
import { contactMailto } from '@/lib/i18n';

export function Hero() {
  const { locale, t } = useLanguage();
  const contactHref = contactMailto(locale);

  return (
    <section className="relative isolate min-h-[min(760px,100dvh)] overflow-hidden border-b border-brand-200/70 px-gutter py-20 md:py-28 lg:flex lg:items-center lg:py-32 dark:border-white/10">
      <Image
        src="/trailase-hero-property.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="-z-30 scale-90 object-cover object-center"
      />
      <AmbientVideo
        src={backgroundVideo('homeHero')}
        poster="/trailase-hero-property.jpg"
        playbackRate={0.6}
        className="pointer-events-none absolute inset-0 -z-[29] size-full scale-90 object-cover object-center motion-reduce:hidden"
      />
      <div className="video-overlay pointer-events-none absolute inset-0 -z-20" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background/35 to-transparent" />
      <div className="pointer-events-none absolute -right-40 top-0 -z-10 size-[34rem] rounded-full bg-brand-300/25 blur-3xl dark:bg-brand-500/15" />
      <div className="mx-auto grid w-full max-w-[var(--container-page)] gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
        <div className="video-copy max-w-2xl shadow-xl sm:p-8 lg:-ml-8">
          <Badge
            variant="outline"
            className="mb-7 rounded-full border-brand-300 bg-brand-50 px-4 py-2 text-brand-800 shadow-xs dark:border-brand-700 dark:bg-brand-900/60 dark:text-brand-100"
          >
            {t('home.badge')}
          </Badge>
          <h1 className="max-w-[12ch] font-display text-[clamp(3rem,6.6vw,6.4rem)] font-semibold leading-[0.94] tracking-[-0.052em] text-brand-navy dark:text-white">
            {t('home.title')}
          </h1>
          <p className="mt-8 max-w-xl text-body-lg font-medium leading-8 text-foreground/75 dark:text-white/72">
            {t('home.intro')}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="h-12 rounded-sm px-6 shadow-brand">
              <a
                href={contactHref}
                onClick={(event) => {
                  event.preventDefault();
                  requestContactRedirect(contactHref);
                }}
              >
                {t('home.walkthrough')} <ArrowRight aria-hidden />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-sm px-6">
              <Link href="/operator/inspections">
                {t('home.prototype')} <ArrowRight aria-hidden />
              </Link>
            </Button>
          </div>
          <p className="mt-6 flex items-start gap-2 text-sm font-medium text-foreground/65 dark:text-white/60">
            <CheckCircle2
              className="mt-0.5 size-4 shrink-0 text-brand-600 dark:text-brand-300"
              aria-hidden
            />
            {t('home.scale')}
          </p>
        </div>

        <Card className="relative overflow-hidden border-brand-200/80 bg-card/95 shadow-2xl ring-1 ring-white/50 backdrop-blur-xl dark:border-white/12 dark:bg-card/94 dark:ring-white/5">
          <div className="border-b border-border p-6 sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-eyebrow">{t('home.report')}</p>
                <h2 className="mt-2 font-display text-3xl tracking-tight">Room 4B</h2>
                <p className="mt-1 text-sm text-muted-foreground">Chamberí Living · Sofia Martin</p>
              </div>
              <Badge className="bg-brand-100 text-brand-800 hover:bg-brand-100 dark:bg-brand-900 dark:text-brand-200">
                <CheckCircle2 aria-hidden /> {t('home.completed')}
              </Badge>
            </div>
          </div>
          <CardContent className="p-6 sm:p-7">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-3">
              {[
                ['12', t('home.photos')],
                ['1', t('home.issue')],
                ['8', t('home.inventory')],
                ['5', t('home.keys')],
                ['048239', t('home.meter')],
                ['✓', t('home.confirmation')],
              ].map(([value, label]) => (
                <div key={label} className="bg-card p-4">
                  <p className="text-xl font-semibold tracking-tight">{value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-start gap-3 border-l-2 border-amber-400 bg-amber-50/70 p-4 dark:bg-amber-950/20">
              <Camera
                className="mt-0.5 size-4 shrink-0 text-amber-700 dark:text-amber-300"
                aria-hidden
              />
              <div>
                <p className="text-sm font-semibold">{t('home.wall')}</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">{t('home.wallNote')}</p>
              </div>
            </div>
            <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
              <span>Inspection KF-2026-00482</span>
              <span className="font-medium text-brand-700 dark:text-brand-300">
                {t('home.evidenceRecorded')}
              </span>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
