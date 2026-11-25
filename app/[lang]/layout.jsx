const HOST = 'https://fmtraffic.com';
const SUPPORTED = ['en', 'de', 'nl', 'fr'];

function labels(lang) {
  const texts = {
    en: {
      title: 'FM Traffic — Road-Safety Equipment Supplier for Europe',
      desc: 'Delineators, traffic cones, speed bumps, line marking and LED warning solutions. 500+ CE-certified items, B2B pricing for volume orders, private labeling. Supplied from Türkiye.',
      keywords: [
        'road safety equipment supplier Europe',
        'traffic cones wholesale',
        'delineator posts bulk order',
        'speed bumps B2B',
        'road marking paint supplier',
        'LED warning lights traffic',
        'CE certified road safety products',
        'private label traffic equipment',
        'EU road safety distributor',
        'highway safety barriers wholesale',
        'parking bollards supplier',
        'reflective road signs Europe',
      ],
    },
    de: {
      title: 'FM Traffic — Lieferant für Verkehrssicherheitsprodukte in Europa',
      desc: 'Leitbaken, Verkehrskegel, Temposchwellen, Fahrbahnmarkierung und LED-Warnsysteme. Über 500 CE-zertifizierte Artikel, B2B-Preise, Private Label. Lieferung aus der Türkei.',
      keywords: [
        'Verkehrssicherheit Produkte kaufen',
        'Leitbaken Großhandel Deutschland',
        'Verkehrskegel B2B Lieferant',
        'Temposchwellen Lieferant Europa',
        'Fahrbahnmarkierung Farbe Lieferant',
        'LED Warnleuchten Straßenverkehr',
        'CE-zertifizierte Verkehrsprodukte',
        'Straßensicherheit Ausrüstung Großhandel',
        'Absperrpfosten kaufen',
        'Straßenbauprodukte Lieferant',
        'Verkehrstechnik Zubehör Deutschland',
        'Parkplatzbollards Großhandel',
      ],
    },
    nl: {
      title: 'FM Traffic — Leverancier van verkeersveiligheidsproducten voor Europa',
      desc: 'Geleidebakens, verkeerskegels, verkeersdrempels, wegmarkering en LED-waarschuwingssystemen. Meer dan 500 CE-gecertificeerde artikelen, B2B-prijzen, private label. Geleverd vanuit Turkije.',
      keywords: [
        'verkeersveiligheid producten groothandel',
        'verkeerskegels kopen Nederland',
        'geleidebaken leverancier',
        'snelheidsdrempels B2B bestellen',
        'wegmarkering verf leverancier',
        'LED waarschuwingslichten verkeer',
        'CE-gecertificeerde verkeersproducten',
        'wegveiligheid materialen Nederland',
        'verkeersborden leverancier België',
        'parkeerpaaltjes groothandel',
        'verkeersbeveiliging producten',
        'straatmeubilair leverancier Benelux',
      ],
    },
    fr: {
      title: 'FM Traffic — Fournisseur d’équipements de sécurité routière pour l’Europe',
      desc: "Balises, cônes, ralentisseurs, marquage routier et systèmes d'alerte LED. Plus de 500 références certifiées CE, tarifs B2B, marque privée. Livré depuis la Turquie.",
      keywords: [
        'équipement sécurité routière fournisseur',
        'cônes de signalisation gros',
        'balises de signalisation achat',
        'ralentisseurs routiers B2B',
        'peinture marquage routier fournisseur',
        'feux LED signalisation routière',
        'produits certifiés CE sécurité routière',
        'matériel signalisation routière France',
        'bornes de parking grossiste',
        'barrières de sécurité routière',
        'équipement voirie fournisseur Europe',
        'signalisation temporaire chantier',
      ],
    },
  };
  return texts[lang] || texts.en;
}

export function generateStaticParams() {
  return SUPPORTED.map(lang => ({ lang }));
}

export function generateMetadata({ params }) {
  const lang = SUPPORTED.includes(params.lang) ? params.lang : 'en';
  const { title, desc, keywords } = labels(lang);

  const languages = Object.fromEntries(
    SUPPORTED.map(l => [l, `${HOST}/${l}/`])
  );
  // x-default points to English as the canonical fallback
  languages['x-default'] = `${HOST}/en/`;

  return {
    title,
    description: desc,
    keywords,
    alternates: {
      canonical: `${HOST}/${lang}/`,
      languages,
    },
    openGraph: {
      type: 'website',
      url: `${HOST}/${lang}/`,
      title,
      description: desc,
      siteName: 'FM Traffic',
      images: [
        {
          url: `${HOST}/og-image.svg`,
          width: 1200,
          height: 630,
          alt: 'FM Traffic — EU Road-Safety Equipment',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: desc,
      images: [`${HOST}/og-image.svg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
  };
}

export default function LangLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}
