// Shared site constants and UI strings for the header, footer and sub-pages.

export const HOST = 'https://fmtraffic.com';
export const LANGS = ['en', 'de', 'nl', 'fr'];
// Languages that have product, "how we work" and contact pages (now all site languages).
export const PAGE_LANGS = ['en', 'de', 'nl', 'fr'];

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
  nl: {
    products: 'Producten',
    howWeWork: 'Zo werken wij',
    contact: 'Contact',
    home: 'Home',
    range: 'Assortiment',
    rangeNote: 'Andere maten, kleuren en varianten op aanvraag.',
    ordering: 'Bestellen',
    orderingPoints: [
      'CE-gecertificeerde producten; CE-documentatie op aanvraag.',
      'OEM / private label: kleur, logo en verpakking.',
      'Levering EXW Turkije; de levertijd hangt af van de bestelling.',
      'B2B-prijzen voor grote volumes.',
    ],
    quoteFor: (name) => `Offerteaanvraag: ${name}`,
    requestQuote: 'Offerte aanvragen',
    whatsapp: 'WhatsApp',
    otherCategories: 'Andere productlijnen',
    footerLine: '© FM Traffic. Leverancier van verkeersveiligheidsproducten, gevestigd in Turkije.',
  },
  fr: {
    products: 'Produits',
    howWeWork: 'Notre fonctionnement',
    contact: 'Contact',
    home: 'Accueil',
    range: 'Gamme',
    rangeNote: 'Autres tailles, couleurs et variantes sur demande.',
    ordering: 'Commande',
    orderingPoints: [
      'Produits certifiés CE ; documentation CE sur demande.',
      'OEM / marque privée : couleur, logo et emballage.',
      'Livraison EXW Turquie ; le délai dépend de la commande.',
      'Tarifs B2B pour les volumes.',
    ],
    quoteFor: (name) => `Demande de devis : ${name}`,
    requestQuote: 'Demander un devis',
    whatsapp: 'WhatsApp',
    otherCategories: 'Autres gammes de produits',
    footerLine: '© FM Traffic. Fournisseur d’équipements de sécurité routière basé en Turquie.',
  },
};
