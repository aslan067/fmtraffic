import en from '@/locales/en.json';
import de from '@/locales/de.json';
import nl from '@/locales/nl.json';
import fr from '@/locales/fr.json';
import tr from '@/locales/tr.json';
import '@/app/globals.css';

const DICTS = { en, de, nl, fr, tr };
const SUPPORTED = Object.keys(DICTS);

export const dynamic = 'error'; // tam SSG

export default function Page({ params }) {
  const lang = SUPPORTED.includes(params.lang) ? params.lang : 'en';
  const t = DICTS[lang];

  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <svg width="28" height="28" viewBox="0 0 128 128" aria-hidden="true">
                <rect width="128" height="128" rx="28" fill="#ff6a00"/>
                <path d="M64 16l28 88H36L64 16z" fill="#fff"/>
                <path d="M64 42l14 46H50l14-46z" fill="#ff6a00"/>
              </svg>
              <span>FM Traffic</span>
              <span className="badge">EU Supply</span>
            </div>
            <div className="langs">
              {SUPPORTED.map(l => (
                <a key={l} className="pill" aria-current={l===lang ? 'true':'false'} href={`/${l}/`}>{l.toUpperCase()}</a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      <main>
        <section className="container hero">
          <div>
            <h1>{t.heroTitle}</h1>
            <p className="muted">{t.heroDesc}</p>
            <div style={{margin:'.6rem 0 1rem'}}>
              {t.chips.map((c, i) => <span key={i} className="chip">{c}</span>)}
            </div>
            <div className="cta">
              <a className="btn" href="https://wa.me/900000000000" target="_blank" rel="noopener">{t.contactUs}</a>
              <a className="btn secondary" href="#products">{t.viewCatalog}</a>
            </div>
          </div>

          <div className="hero-visual">
            <svg className="cone float" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Traffic Cone Illustration">
              <defs>
                <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#ffb300"/>
                  <stop offset="1" stopColor="#ff6a00"/>
                </linearGradient>
                <linearGradient id="g2" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#ffffff" stopOpacity=".9"/>
                  <stop offset="1" stopColor="#ffffff" stopOpacity=".75"/>
                </linearGradient>
              </defs>
              <ellipse cx="200" cy="340" rx="130" ry="20" fill="rgba(0,0,0,.35)"/>
              <path d="M200 40l90 280H110L200 40z" fill="url(#g1)"/>
              <rect x="130" y="180" width="140" height="36" rx="8" fill="url(#g2)"/>
              <rect x="116" y="250" width="168" height="36" rx="8" fill="url(#g2)"/>
              <rect x="70" y="315" width="260" height="24" rx="12" fill="#121b33" stroke="#1f2a49"/>
            </svg>

            <div className="glass">
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

        <section id="products" className="container grid">
          <div className="row">
            <div>
              <h2>{t.productsTitle}</h2>
              <p className="muted">{t.productsDesc}</p>
              <ul className="list">
                {t.bullets.map((b, i) => (
                  <li key={i}>
                    <svg className="check" width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M20 7L9 18l-5-5" stroke="var(--ok)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid cards">
              {t.cards.map((c, i) => (
                <div key={i} className="card">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="2" stroke="#ffb300"/>
                    <path d="M8 8h8v8H8z" fill="#ff6a00"/>
                  </svg>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container">
          <div className="grid card" style={{padding:'24px'}}>
            <div className="row">
              <div>
                <h2>{t.whyTitle}</h2>
                <p className="muted">{t.whyDesc}</p>
              </div>
              <div>
                <h2>{t.ctaTitle}</h2>
                <div className="cta" style={{marginTop:'.6rem'}}>
                  <a className="btn" href="https://wa.me/900000000000" target="_blank" rel="noopener">{t.whatsapp}</a>
                  <a className="btn secondary" href="mailto:sales@fmtraffic.com">{t.email}</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container" style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'12px',flexWrap:'wrap'}}>
          <small>© {new Date().getFullYear()} FM Traffic.</small>
          <div style={{display:'flex',gap:'10px'}}>
            <a className="pill" href="#products">{t.productsLink || 'Products'}</a>
            <a className="pill" href="mailto:sales@fmtraffic.com">sales@fmtraffic.com</a>
            <a className="pill" href="tel:+90">+90 (___) ___ __ __</a>
          </div>
        </div>
      </footer>
    </>
  );
}

