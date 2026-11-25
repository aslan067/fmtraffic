import { LANGS, PAGE_LANGS, UI } from '../lib/site';

// `paths` maps each language to the same page in that language. Languages without a
// matching page fall back to their home page (NL/FR only have the home page).
export default function SiteHeader({ lang, paths = {} }) {
  const ui = UI[lang];
  const hrefFor = (l) => paths[l] || `/${l}/`;

  return (
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

          {PAGE_LANGS.includes(lang) && (
            <div className="mainnav">
              <a href={`/${lang}/#products`}>{ui.products}</a>
              <a href={`/${lang}/how-we-work/`}>{ui.howWeWork}</a>
              <a href={`/${lang}/contact/`}>{ui.contact}</a>
            </div>
          )}

          <div className="langs" role="navigation" aria-label="Language switcher">
            {LANGS.map((l) => (
              <a
                key={l}
                className="pill"
                href={hrefFor(l)}
                hrefLang={l}
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
  );
}
