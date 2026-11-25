import { EMAIL, PAGE_LANGS, UI } from '../lib/site';

export default function SiteFooter({ lang, footerLine }) {
  const ui = UI[lang];
  return (
    <footer>
      <div className="container footer-row">
        <small>{footerLine || `© ${new Date().getFullYear()} FM Traffic.`}</small>
        <nav aria-label="Footer navigation" className="footer-links">
          {PAGE_LANGS.includes(lang) && (
            <>
              <a className="pill" href={`/${lang}/how-we-work/`}>{ui.howWeWork}</a>
              <a className="pill" href={`/${lang}/contact/`}>{ui.contact}</a>
            </>
          )}
          <a className="pill" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </nav>
      </div>
    </footer>
  );
}
