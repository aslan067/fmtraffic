"use client";

import '../../app/globals.css';

import en from '../../locales/en.json';
import de from '../../locales/de.json';
import nl from '../../locales/nl.json';
import fr from '../../locales/fr.json';

const DICTS = { en, de, nl, fr };
const SUPPORTED = Object.keys(DICTS);

const SCHEMA = {
  en: {
    name: "FM Traffic",
    description: "Road-safety equipment supplier based in Türkiye, serving European buyers. Delineators, traffic cones, speed bumps, line marking and LED warning solutions.",
    areaServed: "EU",
  },
  de: {
    name: "FM Traffic",
    description: "Lieferant für Verkehrssicherheitsprodukte mit Sitz in der Türkei für europäische Abnehmer. Leitbaken, Kegel, Temposchwellen, Markierungen und LED-Warnsysteme.",
    areaServed: "EU",
  },
  nl: {
    name: "FM Traffic",
    description: "Leverancier van verkeersveiligheidsproducten, gevestigd in Turkije, voor Europese afnemers. Geleidebakens, kegels, drempels, markering en LED-systemen.",
    areaServed: "EU",
  },
  fr: {
    name: "FM Traffic",
    description: "Fournisseur d'équipements de sécurité routière basé en Turquie, au service des acheteurs européens. Balises, cônes, ralentisseurs, marquage et systèmes LED.",
    areaServed: "UE",
  },
};

// Line icons for the product cards, in the same order as `cards` in the locale files:
// cone, speed bump, line marking, LED beacon, bollard.
const ICONS = [
  "M12 3l5 16H7L12 3zM9 12h6M8 16h8M4 21h16",
  "M3 17c2-5 16-5 18 0M3 17h18M8 13.5l1 3.5M12 12.8V17M16 13.5l-1 3.5",
  "M4 20L20 4M7 20l2-2M11 16l2-2M15 12l2-2",
  "M8 14a4 4 0 118 0v4H8v-4zM6 18h12v3H6zM12 3v3M5 7l2 2M19 7l-2 2",
  "M9 4h6v16H9zM9 8h6M9 12h6M6 20h12",
];

export default function Page({ params }) {
  const lang = SUPPORTED.includes(params.lang) ? params.lang : 'en';
  const t = DICTS[lang];
  const s = SCHEMA[lang] || SCHEMA.en;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": s.name,
    "url": "https://fmtraffic.com",
    "logo": "https://fmtraffic.com/favicon.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+905454888381",
      "contactType": "sales",
      "areaServed": s.areaServed,
      "availableLanguage": ["English", "German", "Dutch", "French"]
    },
    "description": s.description,
    "sameAs": ["https://wa.me/905454888381"]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header>
        <div className="container">
          <nav aria-label="Main navigation">
            <a className="logo" href={`/${lang}/`} aria-label="FM Traffic — Home">
              <svg width="28" height="28" viewBox="0 0 128 128" aria-hidden="true">
                <rect width="128" height="128" rx="28" fill="#ff6a00"/>
                <path d="M64 16l28 88H36L64 16z" fill="#fff"/>
                <path d="M64 42l14 46H50l14-46z" fill="#ff6a00"/>
              </svg>
              <span>FM Traffic</span>
              <span className="badge">B2B Export</span>
            </a>

            <div className="langs" role="navigation" aria-label="Language switcher">
              {SUPPORTED.map(l => (
                <a
                  key={l}
                  className="pill"
                  href={`/${l}/`}
                  aria-label={`Switch to ${l.toUpperCase()}`}
                  aria-current={l === lang ? 'page' : undefined}
                >
                  {l.toUpperCase()}
                </a>
              ))}
              <a
                className="pill ext"
                href="https://fmtrafik.com/"
                hrefLang="tr"
                lang="tr"
                title="fmtrafik.com"
                aria-label="Türkçe site: fmtrafik.com"
              >
                TR <span aria-hidden="true">↗</span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="container hero" aria-label="Hero">
          <div>
            <h1>{t.heroTitle}</h1>
            <p className="muted">{t.heroDesc}</p>

            <div style={{ margin: ".6rem 0 1rem" }} aria-label="Key features">
              {t.chips.map((c, i) => (
                <span key={i} className="chip">{c}</span>
              ))}
            </div>

            <div className="cta">
              <a
                className="btn"
                href="https://wa.me/905454888381"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contactUs + " via WhatsApp"}
              >
                {t.contactUs}
              </a>
              <a className="btn secondary" href="#products">
                {t.viewCatalog}
              </a>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <svg className="cone float" viewBox="0 0 400 400" role="img" aria-label="Traffic cone illustration">
              <defs>
                <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#ffb300"/>
                  <stop offset="1" stopColor="#ff6a00"/>
                </linearGradient>
                <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#fff" stopOpacity=".9"/>
                  <stop offset="1" stopColor="#fff" stopOpacity=".75"/>
                </linearGradient>
              </defs>

              <ellipse cx="200" cy="340" rx="130" ry="20" fill="rgba(0,0,0,.35)" />
              <path d="M200 40l90 280H110L200 40z" fill="url(#g1)" />
              <rect x="130" y="180" width="140" height="36" rx="8" fill="url(#g2)" />
              <rect x="116" y="250" width="168" height="36" rx="8" fill="url(#g2)" />
              <rect x="70" y="315" width="260" height="24" rx="12" fill="#121b33" stroke="#1f2a49" />
            </svg>

            <div className="glass" aria-label="Key metrics">
              <div className="kpi">
                <span>{t.kpi1}</span>
                <small>{t.kpi1s}</small>
              </div>
              <div className="kpi">
                <span>{t.kpi2}</span>
                <small>{t.kpi2s}</small>
              </div>
              <div className="kpi">
                <span>{t.kpi3}</span>
                <small>{t.kpi3s}</small>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="container" aria-labelledby="products-title">
          <h2 id="products-title">{t.productsTitle}</h2>
          <p className="muted">{t.productsDesc}</p>

          <div className="grid cards">
            {t.cards.map((c, i) => (
              <article key={i} className="card">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d={ICONS[i % ICONS.length]} />
                </svg>
                <h3>{c.title}</h3>
                <p>{c.desc}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="container" aria-labelledby="why-title">
          <div className="card why">
            <div>
              <h2 id="why-title">{t.whyTitle}</h2>
              <p className="muted">{t.whyDesc}</p>
              <ul className="list" aria-label="Key facts">
                {t.bullets.map((b, i) => (
                  <li key={i}>
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 7L9 18l-5-5" fill="none" stroke="var(--ok)" strokeWidth="2.5"/>
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="why-cta">
              <h2>{t.ctaTitle}</h2>
              <div className="cta">
                <a
                  className="btn"
                  href="https://wa.me/905454888381"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={t.whatsapp}
                >
                  {t.whatsapp}
                </a>
                <a
                  className="btn secondary"
                  href="mailto:info@fmtrafik.com"
                  aria-label={t.email}
                >
                  {t.email}
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <small>{t.footerLine || `© ${new Date().getFullYear()} FM Traffic.`}</small>
          <nav aria-label="Footer navigation" style={{ display: "flex", gap: "10px" }}>
            <a className="pill" href="#products">{t.viewCatalog}</a>
            <a className="pill" href="mailto:info@fmtrafik.com">info@fmtrafik.com</a>
          </nav>
        </div>
      </footer>
    </>
  );
}
