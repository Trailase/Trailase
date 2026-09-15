'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useLanguage } from '@/components/i18n/language-provider';
import { Button } from '@/components/ui/button';

export function ThemeToggle({ className }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const { t } = useLanguage();
  return (
    <Button
      variant="ghost"
      size="icon"
      className={className}
      aria-label={t('theme.toggle')}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {/* Visibility is driven by the `.dark` class (set by next-themes outside React),
          not React state — so server and client markup match and there's no flash. */}
      <Sun className="block dark:hidden" />
      <Moon className="hidden dark:block" />
    </Button>
  );
}
