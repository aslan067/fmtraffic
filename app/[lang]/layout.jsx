const HOST = 'https://fmtraffic.com';
const SUPPORTED = ['en', 'de', 'nl', 'fr', 'tr'];

function labels(lang) {
  const texts = {
    en: {
      title: 'FM Traffic — Road-Safety Equipment with Fast EU Supply',
      desc: 'Delineators, traffic cones, speed bumps, line marking and LED warning solutions. Fast EU dispatch, B2B pricing, private labeling.',
    },
    de: {
      title: 'FM Traffic — Verkehrssicherheitsprodukte mit schneller EU-Lieferung',
      desc: 'Leitbaken, Verkehrskegel, Temposchwellen, Fahrbahnmarkierung und LED-Warnsysteme. Schneller Versand, B2B-Preise, Private Label.',
    },
    nl: {
      title: 'FM Traffic — Verkeersveiligheidsproducten met snelle EU-levering',
      desc: 'Geleidebaken, verkeerskegels, snelheidsdrempels, wegmarkering en LED-waarschuwingssystemen. Snelle levering, B2B-tarieven, private label.',
    },
    fr: {
      title: 'FM Traffic — Sécurité routière, livraison rapide en Europe',
      desc: "Balises, cônes, ralentisseurs, marquage routier et systèmes d'alerte LED. Expédition rapide, tarifs B2B, marque privée.",
    },
    tr: {
      title: "FM Traffic — Avrupa'ya Hızlı Trafik Güvenliği Tedariki",
      desc: 'Delinatör, trafik konisi, hız kesici, yol çizgisi ve LED uyarı çözümleri. Hızlı sevkiyat, kurumsal fiyat, özel markalama.',
    },
  };
  return texts[lang] || texts.en;
}

export function generateStaticParams() {
  return SUPPORTED.map(lang => ({ lang }));
}

export function generateMetadata({ params }) {
  const lang = SUPPORTED.includes(params.lang) ? params.lang : 'en';
  const { title, desc } = labels(lang);

  const languages = Object.fromEntries(
    SUPPORTED.map(l => [l, `${HOST}/${l}/`])
  );
  // x-default points to English as the canonical fallback
  languages['x-default'] = `${HOST}/en/`;

  return {
    title,
    description: desc,
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
