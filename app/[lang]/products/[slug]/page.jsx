import SiteHeader from '../../../../components/SiteHeader';
import SiteFooter from '../../../../components/SiteFooter';
import { CATEGORIES, findCategory } from '../../../../lib/catalog';
import { HOST, PAGE_LANGS, UI, WHATSAPP, mailto, pageAlternates } from '../../../../lib/site';

export const dynamicParams = false;

export function generateStaticParams({ params }) {
  return PAGE_LANGS.includes(params.lang) ? CATEGORIES.map((c) => ({ slug: c.slug })) : [];
}

export function generateMetadata({ params }) {
  const c = findCategory(params.slug);
  const t = c[params.lang];
  const path = `/products/${c.slug}/`;
  return {
    title: t.title,
    description: t.desc,
    alternates: pageAlternates(params.lang, path),
    openGraph: {
      type: 'website',
      url: `${HOST}/${params.lang}${path}`,
      title: t.title,
      description: t.desc,
      siteName: 'FM Traffic',
      images: [{ url: `${HOST}/products/${c.image}.webp`, alt: t.name }],
    },
  };
}

export default function CategoryPage({ params }) {
  const { lang, slug } = params;
  const c = findCategory(slug);
  const t = c[lang];
  const ui = UI[lang];
  const path = `/products/${slug}/`;
  const paths = Object.fromEntries(PAGE_LANGS.map((l) => [l, `/${l}${path}`]));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: ui.home, item: `${HOST}/${lang}/` },
      { '@type': 'ListItem', position: 2, name: t.name, item: `${HOST}/${lang}${path}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SiteHeader lang={lang} paths={paths} />

      <main>
        <section className="container page-hero">
          <div>
            <nav className="crumbs" aria-label="Breadcrumb">
              <a href={`/${lang}/`}>{ui.home}</a> <span aria-hidden="true">›</span>{' '}
              <a href={`/${lang}/#products`}>{ui.products}</a>
            </nav>
            <h1>{t.name}</h1>
            <p className="lead">{t.intro}</p>
            <div className="cta">
              <a className="btn" href={mailto(ui.quoteFor(t.name))}>{ui.requestQuote}</a>
              <a className="btn secondary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">{ui.whatsapp}</a>
            </div>
          </div>
          <div className="photo">
            <img src={`/products/${c.image}.webp`} alt={t.name} width="640" height="640" />
          </div>
        </section>

        <section className="container" aria-labelledby="range-title">
          <h2 id="range-title">{ui.range}</h2>
          <div className="grid products">
            {c.products.map((p, i) => (
              <article key={i} className="card product">
                {p.image && (
                  <img src={`/products/${p.image}.webp`} alt={p[lang]} width="640" height="640" loading="lazy" />
                )}
                <h3>{p[lang]}</h3>
              </article>
            ))}
          </div>
          <p className="muted">{ui.rangeNote}</p>
        </section>

        <section className="container" aria-labelledby="ordering-title">
          <div className="card why">
            <div>
              <h2 id="ordering-title">{ui.ordering}</h2>
              <ul className="list">
                {ui.orderingPoints.map((b, i) => (
                  <li key={i}>
                    <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20 7L9 18l-5-5" fill="none" stroke="var(--ok)" strokeWidth="2.5"/>
                    </svg>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <p className="muted"><a className="textlink" href={`/${lang}/how-we-work/`}>{ui.howWeWork} →</a></p>
            </div>
            <div className="why-cta">
              <div className="cta">
                <a className="btn" href={mailto(ui.quoteFor(t.name))}>{ui.requestQuote}</a>
                <a className="btn secondary" href={WHATSAPP} target="_blank" rel="noopener noreferrer">{ui.whatsapp}</a>
              </div>
            </div>
          </div>
        </section>

        <section className="container" aria-labelledby="other-title">
          <h2 id="other-title">{ui.otherCategories}</h2>
          <div className="grid cards">
            {CATEGORIES.filter((o) => o.slug !== slug).map((o) => (
              <a key={o.slug} className="card linkcard" href={`/${lang}/products/${o.slug}/`}>
                <h3>{o[lang].name}</h3>
                <p>{o[lang].short}</p>
              </a>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter lang={lang} footerLine={ui.footerLine} />
    </>
  );
}
