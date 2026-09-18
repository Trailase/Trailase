export const supportedLocales = ['en', 'es', 'fr', 'nl'] as const;

export type AppLocale = (typeof supportedLocales)[number];
export type Variables = Record<string, string | number>;
export type Translate = (key: string, variables?: Variables) => string;

export const localeCookie = 'trailase_locale';

export const localeNames: Record<AppLocale, string> = {
  en: 'English',
  es: 'Español',
  fr: 'Français',
  nl: 'Nederlands',
};

export function resolveLocale(value: string | null | undefined): AppLocale {
  return supportedLocales.includes(value as AppLocale) ? (value as AppLocale) : 'en';
}

const contactEmail = 'trai1ases@gmail.com';

const contactCopy: Record<AppLocale, { subject: string; body: string }> = {
  en: {
    subject: 'Show me Trailase in action',
    body: 'Hello,\n\nI would like to see how Trailase could make our property handovers clearer and easier to manage.\n\nBest regards,',
  },
  es: {
    subject: 'Quiero ver Trailase en acción',
    body: 'Hola,\n\nMe gustaría ver cómo Trailase puede hacer que las entregas de nuestras propiedades sean más claras y fáciles de gestionar.\n\nUn saludo,',
  },
  fr: {
    subject: 'Je souhaite voir Trailase en action',
    body: 'Bonjour,\n\nJe souhaiterais voir comment Trailase peut rendre nos états des lieux plus clairs et plus simples à gérer.\n\nCordialement,',
  },
  nl: {
    subject: 'Laat mij Trailase in actie zien',
    body: 'Hallo,\n\nIk wil graag zien hoe Trailase onze woningoverdrachten duidelijker en makkelijker beheersbaar kan maken.\n\nMet vriendelijke groet,',
  },
};

export function contactMailto(locale: AppLocale): string {
  const copy = contactCopy[locale];
  return `mailto:${contactEmail}?subject=${encodeURIComponent(copy.subject)}&body=${encodeURIComponent(copy.body)}`;
}
