'use client';

import { Check, ChevronDown, Languages } from 'lucide-react';
import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { type AppLocale, localeNames, supportedLocales } from '@/lib/i18n';

export function LanguageSelector() {
  const { locale, setLocale, t } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="h-9 gap-2 bg-background/85 px-2.5 shadow-xs"
          aria-label={t('language.label')}
        >
          <Languages className="size-4 text-muted-foreground" aria-hidden />
          <span className="hidden text-xs font-medium sm:inline">{localeNames[locale]}</span>
          <span className="text-xs font-semibold uppercase sm:hidden">{locale}</span>
          <ChevronDown className="size-3.5 text-muted-foreground" aria-hidden />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="min-w-44 border-border bg-popover p-1.5 text-popover-foreground shadow-xl"
      >
        {supportedLocales.map((value) => (
          <DropdownMenuItem
            key={value}
            className="h-10 cursor-pointer justify-between rounded-md px-3"
            onSelect={() => setLocale(value as AppLocale)}
          >
            <span>{localeNames[value]}</span>
            <Check
              className={locale === value ? 'size-4 text-brand-500' : 'size-4 opacity-0'}
              aria-hidden
            />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
