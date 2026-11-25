import SiteHeader from '../../../components/SiteHeader';
import SiteFooter from '../../../components/SiteFooter';
import { EMAIL, PAGE_LANGS, UI, WHATSAPP, pageAlternates } from '../../../lib/site';

export const dynamicParams = false;
export function generateStaticParams() {
  return PAGE_LANGS.map((lang) => ({ lang }));
}

const T = {
  en: {
    title: 'Contact & Quote Request | FM Traffic',
    desc: 'Request a quote for road-safety equipment from FM Traffic by e-mail or WhatsApp. B2B pricing, CE-certified range, OEM / private label, EXW Türkiye.',
    h1: 'Request a quote',
    lead: 'Send us your enquiry by e-mail or WhatsApp. The more of the details below you include, the faster we can send an accurate quote.',
    checklistTitle: 'Please include',
    checklist: [
      'Products (name or link from this site) and quantities',
      'Size and color, and any logo or packaging requirements',
      'Delivery country and whether you already work with a freight forwarder',
      'When you need the goods',
      'Your company name and contact person',
    ],
    subject: 'Quote request',
    body: 'Products and quantities:\n\nSize / color / branding:\n\nDelivery country / freight forwarder:\n\nRequired by:\n\nCompany and contact person:\n',
    email: 'Write an e-mail',
    whatsapp: 'Message on WhatsApp',
    direct: 'Direct contact',
  },
  de: {
    title: 'Kontakt & Angebotsanfrage | FM Traffic',
    desc: 'Fordern Sie per E-Mail oder WhatsApp ein Angebot für Verkehrssicherheitsprodukte bei FM Traffic an. B2B-Preise, CE-zertifiziertes Sortiment, OEM / Private Label, EXW Türkei.',
    h1: 'Angebot anfragen',
    lead: 'Senden Sie uns Ihre Anfrage per E-Mail oder WhatsApp. Je mehr der folgenden Angaben Sie mitschicken, desto schneller erhalten Sie ein genaues Angebot.',
    checklistTitle: 'Bitte angeben',
    checklist: [
      'Produkte (Bezeichnung oder Link von dieser Website) und Mengen',
      'Größe und Farbe sowie eventuelle Logo- oder Verpackungswünsche',
      'Lieferland und ob Sie bereits mit einer Spedition arbeiten',
      'Gewünschter Liefertermin',
      'Firmenname und Ansprechpartner',
    ],
    subject: 'Angebotsanfrage',
    body: 'Produkte und Mengen:\n\nGröße / Farbe / Branding:\n\nLieferland / Spedition:\n\nGewünschter Termin:\n\nFirma und Ansprechpartner:\n',
    email: 'E-Mail schreiben',
    whatsapp: 'Nachricht per WhatsApp',
    direct: 'Direkter Kontakt',
  },
  nl: {
    "title": "Contact & offerteaanvraag | FM Traffic",
    "desc": "Vraag per e-mail of WhatsApp een offerte aan voor verkeersveiligheidsproducten bij FM Traffic. B2B-prijzen, CE-gecertificeerd assortiment, OEM / private label, EXW Turkije.",
    "h1": "Offerte aanvragen",
    "lead": "Stuur ons uw aanvraag per e-mail of WhatsApp. Hoe meer van de onderstaande gegevens u meestuurt, hoe sneller u een nauwkeurige offerte ontvangt.",
    "checklistTitle": "Vermeld graag",
    "checklist": [
      "Producten (naam of link van deze website) en aantallen",
      "Maat en kleur, en eventuele wensen voor logo of verpakking",
      "Land van levering en of u al met een expediteur werkt",
      "Gewenste leverdatum",
      "Bedrijfsnaam en contactpersoon"
    ],
    "subject": "Offerteaanvraag",
    "body": "Producten en aantallen:\n\nMaat / kleur / branding:\n\nLand van levering / expediteur:\n\nGewenste datum:\n\nBedrijf en contactpersoon:\n",
    "email": "E-mail sturen",
    "whatsapp": "Bericht via WhatsApp",
    "direct": "Direct contact"
  },
  fr: {
    "title": "Contact & demande de devis | FM Traffic",
    "desc": "Demandez un devis pour des équipements de sécurité routière chez FM Traffic par e-mail ou WhatsApp. Tarifs B2B, gamme certifiée CE, OEM / marque privée, EXW Turquie.",
    "h1": "Demander un devis",
    "lead": "Envoyez-nous votre demande par e-mail ou WhatsApp. Plus vous indiquez d’informations ci-dessous, plus vite vous recevrez un devis précis.",
    "checklistTitle": "Merci d’indiquer",
    "checklist": [
      "Produits (nom ou lien de ce site) et quantités",
      "Taille et couleur, ainsi que vos exigences de logo ou d’emballage",
      "Pays de livraison et si vous travaillez déjà avec un transitaire",
      "Date souhaitée",
      "Nom de l’entreprise et interlocuteur"
    ],
    "subject": "Demande de devis",
    "body": "Produits et quantités :\n\nTaille / couleur / marquage :\n\nPays de livraison / transitaire :\n\nDate souhaitée :\n\nEntreprise et interlocuteur :\n",
    "email": "Écrire un e-mail",
    "whatsapp": "Message WhatsApp",
    "direct": "Contact direct"
  },
};

export function generateMetadata({ params }) {
  const t = T[params.lang];
  return { title: t.title, description: t.desc, alternates: pageAlternates(params.lang, '/contact/') };
}

export default function Contact({ params }) {
  const { lang } = params;
  const t = T[lang];
  const ui = UI[lang];
  const paths = Object.fromEntries(PAGE_LANGS.map((l) => [l, `/${l}/contact/`]));
  const mail = `mailto:${EMAIL}?subject=${encodeURIComponent(t.subject)}&body=${encodeURIComponent(t.body)}`;

  return (
    <>
      <SiteHeader lang={lang} paths={paths} />
      <main>
        <section className="container narrow">
          <h1>{t.h1}</h1>
          <p className="lead">{t.lead}</p>
          <div className="cta">
            <a className="btn" href={mail}>{t.email}</a>
            <a className="btn secondary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">{t.whatsapp}</a>
          </div>
        </section>

        <section className="container narrow">
          <div className="card">
            <h2>{t.checklistTitle}</h2>
            <ul className="list">
              {t.checklist.map((b, i) => (
                <li key={i}>
                  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20 7L9 18l-5-5" fill="none" stroke="var(--ok)" strokeWidth="2.5"/>
                  </svg>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="container narrow">
          <h2>{t.direct}</h2>
          <p className="muted">
            E-mail: <a className="textlink" href={`mailto:${EMAIL}`}>{EMAIL}</a><br />
            WhatsApp: <a className="textlink" href={WHATSAPP} target="_blank" rel="noopener noreferrer">+90 545 488 83 81</a>
          </p>
        </section>
      </main>
      <SiteFooter lang={lang} footerLine={ui.footerLine} />
    </>
  );
}
