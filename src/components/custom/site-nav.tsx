'use client';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type MouseEvent, useState } from 'react';
import { ThemeToggle } from '@/components/custom/theme-toggle';
import { useLanguage } from '@/components/i18n/language-provider';
import { LanguageSelector } from '@/components/i18n/language-selector';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { requestContactRedirect } from '@/lib/contact-redirect';
import { contactMailto } from '@/lib/i18n';
import { type NavItem, navItems } from '@/lib/nav';
import { siteName } from '@/lib/site';
import { cn } from '@/lib/utils';

export function SiteNav() {
  const { locale, t } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const primaryItems = navItems.filter((item) => item.group === 'primary');
  const contactItem = navItems.find((item) => item.group === 'secondary');

  const hrefFor = (item: NavItem) =>
    item.translationKey === 'nav.contact' ? contactMailto(locale) : item.href;
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);
  const openContact = (event: MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    if (item.translationKey !== 'nav.contact') return;
    event.preventDefault();
    requestContactRedirect(hrefFor(item));
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-screen-xl items-center gap-2 px-4"
      >
        <Link
          href="/"
          className="mr-3 shrink-0 rounded-md dark:bg-white/95 dark:px-2 dark:py-1 dark:shadow-sm"
        >
          <Image
            src="/trailase-logo.png"
            alt={siteName}
            width={180}
            height={60}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {primaryItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              size="sm"
              className={cn(isActive(item.href) && 'bg-accent text-accent-foreground')}
            >
              <Link href={item.href}>{t(item.translationKey)}</Link>
            </Button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-1">
          {contactItem ? (
            <Button asChild variant="secondary" size="sm" className="hidden md:inline-flex">
              <a href={hrefFor(contactItem)} onClick={(event) => openContact(event, contactItem)}>
                {t(contactItem.translationKey)}
              </a>
            </Button>
          ) : null}
          <LanguageSelector />
          <ThemeToggle />

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu aria-hidden />
                <span className="sr-only">{t('nav.openMenu')}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" aria-describedby={undefined} className="flex flex-col">
              <SheetHeader>
                <SheetTitle className="text-left">{siteName}</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile" className="mt-6 flex flex-col gap-2">
                {primaryItems.map((item) => (
                  <Button key={item.href} asChild variant="ghost" className="w-full justify-start">
                    <Link href={item.href} onClick={() => setMobileOpen(false)}>
                      {t(item.translationKey)}
                    </Link>
                  </Button>
                ))}
                {contactItem ? (
                  <Button asChild variant="secondary" className="mt-2 w-full justify-start">
                    <a
                      href={hrefFor(contactItem)}
                      onClick={(event) => {
                        openContact(event, contactItem);
                        setMobileOpen(false);
                      }}
                    >
                      {t(contactItem.translationKey)}
                    </a>
                  </Button>
                ) : null}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background px-gutter py-7 text-center text-sm text-muted-foreground">
      <p>
        © {new Date().getFullYear()} {siteName}
      </p>
    </footer>
  );
}
