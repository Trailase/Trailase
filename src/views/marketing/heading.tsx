import { cn } from '@/lib/utils';

export const sectionTitle =
  'font-display text-[clamp(2rem,3.8vw,3.25rem)] font-semibold leading-[1.08] tracking-[-0.03em] text-balance';

export const ctaButton = 'h-12 rounded-full px-7 text-[0.95rem] font-semibold';

export function SectionHeading({
  eyebrow,
  title,
  intro,
  centered,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  centered?: boolean;
}) {
  return (
    <div className={cn('max-w-2xl', centered && 'mx-auto text-center')}>
      <p className="text-eyebrow">{eyebrow}</p>
      <h2 className={cn('mt-4', sectionTitle)}>{title}</h2>
      {intro && <p className="mt-5 text-lg leading-8 text-muted-foreground">{intro}</p>}
    </div>
  );
}
