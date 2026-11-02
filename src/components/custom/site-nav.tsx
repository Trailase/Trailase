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
import { navItems } from '@/lib/nav';
import { siteName } from '@/lib/site';
import { cn } from '@/lib/utils';

// next/link doesn't scroll when the address already has the same hash, so links
// to a section of the current page scroll to it directly.
function jumpToSection(event: MouseEvent<HTMLAnchorElement>, href: string) {
  const section = href.startsWith('/#') ? document.getElementById(href.slice(2)) : null;
  if (!section) return;
  event.preventDefault();
  window.history.replaceState(null, '', href);
  section.scrollIntoView({ behavior: 'smooth' });
}

export function SiteNav() {
  const { t } = useLanguage();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const primaryItems = navItems.filter((item) => item.group === 'primary');
  const contactItem = navItems.find((item) => item.group === 'secondary');

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 px-gutter backdrop-blur-xl">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 w-full max-w-[var(--container-page)] items-center gap-2"
      >
        <Link
          href="/"
          className="mr-3 shrink-0 rounded-md dark:bg-white/95 dark:px-2 dark:py-1 dark:shadow-sm"
        >
          <Image
            src="/brand/logo.png"
            alt={siteName}
            width={180}
            height={60}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {primaryItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant="ghost"
              size="sm"
              className={cn(isActive(item.href) && 'bg-accent text-accent-foreground')}
            >
              <Link href={item.href} onClick={(event) => jumpToSection(event, item.href)}>
                {t(item.translationKey)}
              </Link>
            </Button>
          ))}
        </div>

        <div className="ml-auto flex items-center gap-1">
          {contactItem ? (
            <Button asChild size="sm" className="hidden rounded-full px-4 sm:inline-flex">
              <Link
                href={contactItem.href}
                onClick={(event) => jumpToSection(event, contactItem.href)}
              >
                {t(contactItem.translationKey)}
              </Link>
            </Button>
          ) : null}
          <LanguageSelector />
          <ThemeToggle />

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
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
                    <Link
                      href={item.href}
                      onClick={(event) => {
                        setMobileOpen(false);
                        jumpToSection(event, item.href);
                      }}
                    >
                      {t(item.translationKey)}
                    </Link>
                  </Button>
                ))}
                {contactItem ? (
                  <Button asChild className="mt-2 w-full rounded-full">
                    <Link
                      href={contactItem.href}
                      onClick={(event) => {
                        setMobileOpen(false);
                        jumpToSection(event, contactItem.href);
                      }}
                    >
                      {t(contactItem.translationKey)}
                    </Link>
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
  const { t } = useLanguage();
  return (
    <footer className="border-t border-border bg-background px-gutter py-7 text-sm text-muted-foreground">
      <div className="mx-auto flex w-full max-w-[var(--container-page)] flex-col items-center justify-between gap-3 sm:flex-row">
        <p>
          © {new Date().getFullYear()} {siteName}
        </p>
        <nav aria-label="Footer" className="flex flex-wrap justify-center gap-x-5 gap-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(event) => jumpToSection(event, item.href)}
              className="hover:text-foreground"
            >
              {t(item.translationKey)}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
