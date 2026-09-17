'use client';

import { ExternalLink, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { type ContactRedirectDetail, contactRedirectEvent } from '@/lib/contact-redirect';

export function GlobalMounts() {
  const { t } = useLanguage();
  const [contactHref, setContactHref] = useState<string | null>(null);

  useEffect(() => {
    const handleContactRedirect = (event: Event) => {
      const detail = (event as CustomEvent<ContactRedirectDetail>).detail;
      if (detail?.href.startsWith('mailto:')) setContactHref(detail.href);
    };

    window.addEventListener(contactRedirectEvent, handleContactRedirect);
    return () => window.removeEventListener(contactRedirectEvent, handleContactRedirect);
  }, []);

  return (
    <Dialog open={Boolean(contactHref)} onOpenChange={(open) => !open && setContactHref(null)}>
      <DialogContent className="max-w-md rounded-xl border-brand-200 shadow-2xl dark:border-brand-800">
        <span className="grid size-11 place-items-center rounded-full bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-200">
          <Mail className="size-5" aria-hidden />
        </span>
        <DialogHeader>
          <DialogTitle className="font-display text-2xl tracking-tight">
            {t('contact.redirectTitle')}
          </DialogTitle>
          <DialogDescription className="pt-1 leading-6">
            {t('contact.redirectText')}
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mt-2 gap-2 sm:space-x-0">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              {t('contact.cancel')}
            </Button>
          </DialogClose>
          <Button asChild>
            <a
              href={contactHref ?? undefined}
              target="_blank"
              rel="noopener"
              onClick={() => {
                window.setTimeout(() => setContactHref(null), 300);
              }}
            >
              {t('contact.continue')} <ExternalLink aria-hidden />
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
