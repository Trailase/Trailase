import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// Phone visitors scroll far from the hero's button, so keep one in reach until
// the form itself is on screen.
export function StickyCta() {
  const { t } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const targets = ['hero-actions', 'contact'].flatMap((id) => {
      const element = document.getElementById(id);
      return element ? [element] : [];
    });
    const onScreen = new Set<Element>(targets);
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) onScreen.add(entry.target);
        else onScreen.delete(entry.target);
      }
      setVisible(onScreen.size === 0);
    });
    for (const target of targets) observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!visible}
      className={cn(
        'fixed inset-x-0 bottom-0 z-30 border-t border-border bg-background/90 p-3 backdrop-blur-xl transition-transform duration-300 sm:hidden',
        !visible && 'translate-y-full',
      )}
    >
      <Button asChild size="lg" className="h-12 w-full rounded-full font-semibold shadow-brand">
        <a href="#contact" tabIndex={visible ? undefined : -1}>
          {t('home.walkthrough')} <ArrowRight aria-hidden />
        </a>
      </Button>
    </div>
  );
}
