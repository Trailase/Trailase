export type NavGroup = 'primary' | 'secondary';

export type NavItem = {
  label: string;
  translationKey: string;
  href: string;
  group: NavGroup;
  requiresAuth?: boolean;
};

export const navItems: NavItem[] = [
  {
    label: 'How it works',
    translationKey: 'nav.how',
    href: '/#how-it-works',
    group: 'primary',
  },
  {
    label: 'Who it’s for',
    translationKey: 'nav.for',
    href: '/#operators',
    group: 'primary',
  },
  {
    label: 'Live demo',
    translationKey: 'nav.prototype',
    href: '/operator/inspections',
    group: 'primary',
  },
  {
    label: 'Book a walkthrough',
    translationKey: 'nav.contact',
    href: 'mailto:k3y.fl0ws@gmail.com',
    group: 'secondary',
  },
];
