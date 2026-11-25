import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { HOST, PAGE_LANGS, UI, WHATSAPP, mailto, pageAlternates } from '../../../lib/site';

export const dynamicParams = false;
export function generateStaticParams() {
  return PAGE_LANGS.map((lang) => ({ lang }));
}

// Only business-confirmed facts here (see CLAUDE.md → Content Accuracy).
const T = {
  en: {
    title: 'How We Work — Ordering, EXW Delivery & Private Label | FM Traffic',
    desc: 'How to order road-safety equipment from FM Traffic: quote, order confirmation, EXW Türkiye delivery, EU–Türkiye Customs Union, CE documentation and private label.',
    h1: 'How we work',
    lead: 'FM Traffic is a road-safety equipment supplier based in Türkiye. We supply municipalities, contractors and distributors with a range of more than 500 CE-certified items, and we deliver 99% of orders on time.',
    stepsTitle: 'Ordering in four steps',
    steps: [
      ['Send your list', 'Products, quantities, colors and any branding requirements.'],
      ['Receive a quote', 'B2B pricing for your volumes and the lead time for your order.'],
      ['Confirm the order', 'We confirm the specification, packaging and pick-up date.'],
      ['Collection EXW Türkiye', 'Your freight forwarder collects the goods from us.'],
    ],
    sections: [
      ['Delivery terms', 'We deliver EXW (Ex Works) Türkiye: your freight forwarder collects the goods and handles transport to your site. Lead times depend on the products and quantities ordered; we confirm them with every quote.'],
      ['EU–Türkiye Customs Union', 'Under the EU–Türkiye Customs Union, most industrial goods can be imported into the EU without customs duty when accompanied by an A.TR movement certificate. Import VAT and local rules still apply; your forwarder or customs broker can advise on your shipment.'],
      ['CE certification', 'Our range is CE-certified. CE documentation is available on request for the products you order.'],
      ['OEM / private label', 'We can supply products in your color, with your logo and in your packaging. Tell us your requirements with your enquiry.'],
    ],
    faqTitle: 'Frequently asked questions',
    faq: [
      ['Do you have a warehouse in the EU?', 'No. Goods are supplied from Türkiye on EXW terms and collected by your freight forwarder.'],
      ['Are you a manufacturer?', 'No. FM Traffic is a supplier: we source and supply a range of more than 500 road-safety items.'],
      ['How long does delivery take?', 'It depends on the products and quantities. We confirm the lead time with every quote.'],
      ['Can I get CE documentation?', 'Yes. CE documentation is available on request for the products you order.'],
      ['Can products carry our brand?', 'Yes. Color, logo and packaging can be customized.'],
    ],
    ctaTitle: 'Ready to send your enquiry?',
    quote: 'Request a quote',
  },
  de: {
    title: 'So arbeiten wir — Bestellung, EXW-Lieferung & Private Label | FM Traffic',
    desc: 'So bestellen Sie Verkehrssicherheitsprodukte bei FM Traffic: Angebot, Auftragsbestätigung, Lieferung EXW Türkei, Zollunion EU–Türkei, CE-Unterlagen und Private Label.',
    h1: 'So arbeiten wir',
    lead: 'FM Traffic ist ein Lieferant für Verkehrssicherheitsprodukte mit Sitz in der Türkei. Wir beliefern Kommunen, Bauunternehmen und Händler mit einem Sortiment von über 500 CE-zertifizierten Artikeln und liefern 99 % der Aufträge pünktlich.',
    stepsTitle: 'Bestellung in vier Schritten',
    steps: [
      ['Liste senden', 'Produkte, Mengen, Farben und eventuelle Branding-Wünsche.'],
      ['Angebot erhalten', 'B2B-Preise für Ihre Mengen und die Lieferzeit für Ihren Auftrag.'],
      ['Auftrag bestätigen', 'Wir bestätigen Ausführung, Verpackung und Abholtermin.'],
      ['Abholung EXW Türkei', 'Ihre Spedition holt die Ware bei uns ab.'],
    ],
    sections: [
      ['Lieferbedingungen', 'Wir liefern EXW (ab Werk) Türkei: Ihre Spedition holt die Ware ab und übernimmt den Transport zu Ihnen. Die Lieferzeit hängt von Produkten und Mengen ab; wir nennen sie mit jedem Angebot.'],
      ['Zollunion EU–Türkei', 'Im Rahmen der Zollunion zwischen der EU und der Türkei können die meisten Industriewaren mit einer Warenverkehrsbescheinigung A.TR zollfrei in die EU eingeführt werden. Einfuhrumsatzsteuer und nationale Vorschriften gelten weiterhin; Ihre Spedition oder Ihr Zollagent berät Sie zu Ihrer Sendung.'],
      ['CE-Zertifizierung', 'Unser Sortiment ist CE-zertifiziert. CE-Unterlagen erhalten Sie auf Anfrage für die bestellten Produkte.'],
      ['OEM / Private Label', 'Wir liefern Produkte in Ihrer Farbe, mit Ihrem Logo und in Ihrer Verpackung. Nennen Sie uns Ihre Anforderungen mit Ihrer Anfrage.'],
    ],
    faqTitle: 'Häufige Fragen',
    faq: [
      ['Haben Sie ein Lager in der EU?', 'Nein. Die Ware wird ab der Türkei zu EXW-Bedingungen geliefert und von Ihrer Spedition abgeholt.'],
      ['Sind Sie Hersteller?', 'Nein. FM Traffic ist Lieferant: Wir beschaffen und liefern ein Sortiment von über 500 Verkehrssicherheitsartikeln.'],
      ['Wie lange dauert die Lieferung?', 'Das hängt von Produkten und Mengen ab. Wir nennen die Lieferzeit mit jedem Angebot.'],
      ['Erhalte ich CE-Unterlagen?', 'Ja. CE-Unterlagen erhalten Sie auf Anfrage für die bestellten Produkte.'],
      ['Können die Produkte unsere Marke tragen?', 'Ja. Farbe, Logo und Verpackung können angepasst werden.'],
    ],
    ctaTitle: 'Bereit für Ihre Anfrage?',
    quote: 'Angebot anfragen',
  },
  nl: {
    "title": "Zo werken wij — bestellen, EXW-levering & private label | FM Traffic",
    "desc": "Zo bestelt u verkeersveiligheidsproducten bij FM Traffic: offerte, orderbevestiging, levering EXW Turkije, douane-unie EU–Turkije, CE-documentatie en private label.",
    "h1": "Zo werken wij",
    "lead": "FM Traffic is een leverancier van verkeersveiligheidsproducten, gevestigd in Turkije. Wij leveren aan gemeenten, aannemers en distributeurs uit een assortiment van meer dan 500 CE-gecertificeerde artikelen, en 99% van onze leveringen is op tijd.",
    "stepsTitle": "Bestellen in vier stappen",
    "steps": [
      [
        "Stuur uw lijst",
        "Producten, aantallen, kleuren en eventuele wensen voor uw merk."
      ],
      [
        "Ontvang een offerte",
        "B2B-prijzen voor uw volumes en de levertijd voor uw bestelling."
      ],
      [
        "Bevestig de bestelling",
        "Wij bevestigen uitvoering, verpakking en ophaaldatum."
      ],
      [
        "Ophalen EXW Turkije",
        "Uw expediteur haalt de goederen bij ons op."
      ]
    ],
    "sections": [
      [
        "Leveringsvoorwaarden",
        "Wij leveren EXW (af fabriek) Turkije: uw expediteur haalt de goederen op en verzorgt het transport naar uw locatie. De levertijd hangt af van producten en aantallen; wij vermelden die bij elke offerte."
      ],
      [
        "Douane-unie EU–Turkije",
        "Binnen de douane-unie tussen de EU en Turkije kunnen de meeste industriële goederen zonder invoerrechten in de EU worden ingevoerd met een A.TR-certificaat. Btw bij invoer en nationale regels blijven van toepassing; uw expediteur of douane-expediteur adviseert u over uw zending."
      ],
      [
        "CE-certificering",
        "Ons assortiment is CE-gecertificeerd. CE-documentatie is op aanvraag beschikbaar voor de bestelde producten."
      ],
      [
        "OEM / private label",
        "Wij leveren producten in uw kleur, met uw logo en in uw verpakking. Vermeld uw wensen bij uw aanvraag."
      ]
    ],
    "faqTitle": "Veelgestelde vragen",
    "faq": [
      [
        "Hebben jullie een magazijn in de EU?",
        "Nee. De goederen worden vanuit Turkije geleverd op EXW-basis en door uw expediteur opgehaald."
      ],
      [
        "Zijn jullie fabrikant?",
        "Nee. FM Traffic is leverancier: wij kopen in en leveren een assortiment van meer dan 500 verkeersveiligheidsartikelen."
      ],
      [
        "Hoe lang duurt de levering?",
        "Dat hangt af van de producten en aantallen. Wij vermelden de levertijd bij elke offerte."
      ],
      [
        "Kan ik CE-documentatie krijgen?",
        "Ja. CE-documentatie is op aanvraag beschikbaar voor de bestelde producten."
      ],
      [
        "Kunnen de producten ons merk dragen?",
        "Ja. Kleur, logo en verpakking kunnen worden aangepast."
      ]
    ],
    "ctaTitle": "Klaar om uw aanvraag te sturen?",
    "quote": "Offerte aanvragen"
  },
  fr: {
    "title": "Notre fonctionnement — commande, livraison EXW & marque privée | FM Traffic",
    "desc": "Comment commander des équipements de sécurité routière chez FM Traffic : devis, confirmation de commande, livraison EXW Turquie, union douanière UE–Turquie, documentation CE et marque privée.",
    "h1": "Notre fonctionnement",
    "lead": "FM Traffic est un fournisseur d’équipements de sécurité routière basé en Turquie. Nous approvisionnons collectivités, entreprises de travaux et distributeurs avec une gamme de plus de 500 références certifiées CE, et 99 % de nos livraisons sont à temps.",
    "stepsTitle": "Commander en quatre étapes",
    "steps": [
      [
        "Envoyez votre liste",
        "Produits, quantités, couleurs et éventuelles exigences de marquage."
      ],
      [
        "Recevez un devis",
        "Tarifs B2B pour vos volumes et délai pour votre commande."
      ],
      [
        "Confirmez la commande",
        "Nous confirmons les spécifications, l’emballage et la date d’enlèvement."
      ],
      [
        "Enlèvement EXW Turquie",
        "Votre transitaire enlève la marchandise chez nous."
      ]
    ],
    "sections": [
      [
        "Conditions de livraison",
        "Nous livrons EXW (départ usine) Turquie : votre transitaire enlève la marchandise et organise le transport jusqu’à votre site. Le délai dépend des produits et des quantités ; nous l’indiquons dans chaque devis."
      ],
      [
        "Union douanière UE–Turquie",
        "Dans le cadre de l’union douanière entre l’UE et la Turquie, la plupart des produits industriels peuvent être importés dans l’UE sans droits de douane lorsqu’ils sont accompagnés d’un certificat de circulation A.TR. La TVA à l’importation et les règles nationales s’appliquent ; votre transitaire ou commissionnaire en douane vous conseille pour votre envoi."
      ],
      [
        "Certification CE",
        "Notre gamme est certifiée CE. La documentation CE est disponible sur demande pour les produits commandés."
      ],
      [
        "OEM / marque privée",
        "Nous pouvons fournir les produits dans votre couleur, avec votre logo et dans votre emballage. Précisez vos exigences dans votre demande."
      ]
    ],
    "faqTitle": "Questions fréquentes",
    "faq": [
      [
        "Avez-vous un entrepôt dans l’UE ?",
        "Non. La marchandise est livrée depuis la Turquie en EXW et enlevée par votre transitaire."
      ],
      [
        "Êtes-vous fabricant ?",
        "Non. FM Traffic est fournisseur : nous sélectionnons et fournissons une gamme de plus de 500 articles de sécurité routière."
      ],
      [
        "Quel est le délai de livraison ?",
        "Il dépend des produits et des quantités. Nous l’indiquons dans chaque devis."
      ],
      [
        "Puis-je obtenir la documentation CE ?",
        "Oui. La documentation CE est disponible sur demande pour les produits commandés."
      ],
      [
        "Les produits peuvent-ils porter notre marque ?",
        "Oui. Couleur, logo et emballage peuvent être personnalisés."
      ]
    ],
    "ctaTitle": "Prêt à envoyer votre demande ?",
    "quote": "Demander un devis"
  },
};

export function generateMetadata({ params }) {
  const t = T[params.lang];
  return { title: t.title, description: t.desc, alternates: pageAlternates(params.lang, '/how-we-work/') };
}

export default function HowWeWork({ params }) {
  const { lang } = params;
  const t = T[lang];
  const ui = UI[lang];
  const paths = Object.fromEntries(PAGE_LANGS.map((l) => [l, `/${l}/how-we-work/`]));
  const faqLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      <SiteHeader lang={lang} paths={paths} />
      <main>
        <section className="container narrow">
          <h1>{t.h1}</h1>
          <p className="lead">{t.lead}</p>
        </section>

        <section className="container" aria-labelledby="steps-title">
          <h2 id="steps-title">{t.stepsTitle}</h2>
          <ol className="grid steps">
            {t.steps.map(([h, p], i) => (
              <li key={i} className="card">
                <span className="stepno" aria-hidden="true">{i + 1}</span>
                <h3>{h}</h3>
                <p>{p}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="container">
          <div className="grid twocol">
            {t.sections.map(([h, p], i) => (
              <article key={i} className="card">
                <h2>{h}</h2>
                <p className="muted">{p}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container narrow" aria-labelledby="faq-title">
          <h2 id="faq-title">{t.faqTitle}</h2>
          {t.faq.map(([q, a], i) => (
            <details key={i} className="faq">
              <summary>{q}</summary>
              <p className="muted">{a}</p>
            </details>
          ))}
        </section>

        <section className="container">
          <div className="card why">
            <h2>{t.ctaTitle}</h2>
            <div className="cta">
              <a className="btn" href={mailto(t.quote)}>{t.quote}</a>
              <a className="btn secondary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">{ui.whatsapp}</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter lang={lang} footerLine={ui.footerLine} />
    </>
  );
}
