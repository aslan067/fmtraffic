// Shared site constants and UI strings for the header, footer and sub-pages.

export const HOST = 'https://fmtraffic.com';
export const LANGS = ['en', 'de', 'nl', 'fr'];
// Languages that have product, "how we work" and contact pages (Germany is the priority market).
export const PAGE_LANGS = ['en', 'de'];

export const WHATSAPP = 'https://wa.me/905454888381';
export const EMAIL = 'info@fmtrafik.com';

export const mailto = (subject) => `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;

// Canonical + hreflang block for a sub-page that exists in PAGE_LANGS.
export function pageAlternates(lang, path) {
  const languages = Object.fromEntries(PAGE_LANGS.map((l) => [l, `${HOST}/${l}${path}`]));
  languages['x-default'] = `${HOST}/en${path}`;
  return { canonical: `${HOST}/${lang}${path}`, languages };
}

export const UI = {
  en: {
    products: 'Products',
    howWeWork: 'How we work',
    contact: 'Contact',
    home: 'Home',
    range: 'Product range',
    rangeNote: 'Further sizes, colors and variants on request.',
    ordering: 'Ordering',
    orderingPoints: [
      'CE-certified products; CE documentation on request.',
      'OEM / private label: color, logo and packaging.',
      'Delivery EXW Türkiye; lead time depends on the order.',
      'B2B pricing for volume orders.',
    ],
    quoteFor: (name) => `Quote request: ${name}`,
    requestQuote: 'Request a quote',
    whatsapp: 'WhatsApp',
    otherCategories: 'Other product lines',
    footerLine: '© FM Traffic. Road-safety equipment supplier based in Türkiye.',
  },
  de: {
    products: 'Produkte',
    howWeWork: 'So arbeiten wir',
    contact: 'Kontakt',
    home: 'Startseite',
    range: 'Sortiment',
    rangeNote: 'Weitere Größen, Farben und Varianten auf Anfrage.',
    ordering: 'Bestellung',
    orderingPoints: [
      'CE-zertifizierte Produkte; CE-Unterlagen auf Anfrage.',
      'OEM / Private Label: Farbe, Logo und Verpackung.',
      'Lieferung EXW Türkei; die Lieferzeit hängt vom Auftrag ab.',
      'B2B-Preise für Großmengen.',
    ],
    quoteFor: (name) => `Angebotsanfrage: ${name}`,
    requestQuote: 'Angebot anfragen',
    whatsapp: 'WhatsApp',
    otherCategories: 'Weitere Produktlinien',
    footerLine: '© FM Traffic. Lieferant für Verkehrssicherheitsprodukte mit Sitz in der Türkei.',
  },
};
