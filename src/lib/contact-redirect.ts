export const contactRedirectEvent = 'trailase:contact-redirect';

export type ContactRedirectDetail = {
  href: string;
};

export function requestContactRedirect(href: string) {
  window.dispatchEvent(
    new CustomEvent<ContactRedirectDetail>(contactRedirectEvent, {
      detail: { href },
    }),
  );
}
