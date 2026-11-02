import { Plus } from 'lucide-react';
import { useLanguage } from '@/components/i18n/language-provider';
import { SectionHeading } from '../heading';

const questions = ['Device', 'Setup', 'Pms', 'Scale'];

export function Faq() {
  const { t } = useLanguage();
  return (
    <section id="faq" className="scroll-mt-20 border-t border-border px-gutter py-section">
      <div className="mx-auto grid w-full max-w-[var(--container-page)] gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading eyebrow={t('home.faqEyebrow')} title={t('home.faqTitle')} />
        <div className="divide-y divide-border border-y border-border">
          {questions.map((question) => (
            <details key={question} className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                {t(`home.faq${question}Q`)}
                <Plus
                  className="size-5 shrink-0 text-primary transition-transform group-open:rotate-45"
                  aria-hidden
                />
              </summary>
              <p className="pb-5 leading-7 text-muted-foreground">{t(`home.faq${question}A`)}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
