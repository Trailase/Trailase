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

export const contactUnitsEvent = 'trailase:contact-units';

export type ContactUnitsDetail = {
  unitsRange: string;
};

export function requestContactUnits(unitsRange: string) {
  window.dispatchEvent(
    new CustomEvent<ContactUnitsDetail>(contactUnitsEvent, {
      detail: { unitsRange },
    }),
  );
}
