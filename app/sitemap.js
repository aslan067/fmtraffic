import { CATEGORIES } from '../lib/catalog';
import { HOST, LANGS, PAGE_LANGS } from '../lib/site';

// Generated at build time (static export writes /sitemap.xml).
export const dynamic = 'force-static';

const alt = (langs, path) => ({
  languages: Object.fromEntries([...langs.map((l) => [l, `${HOST}/${l}${path}`]), ['x-default', `${HOST}/en${path}`]]),
});

export default function sitemap() {
  const entries = LANGS.map((l) => ({ url: `${HOST}/${l}/`, alternates: alt(LANGS, '/'), changeFrequency: 'monthly', priority: l === 'en' || l === 'de' ? 1 : 0.8 }));
  const subPaths = ['/how-we-work/', '/contact/', ...CATEGORIES.map((c) => `/products/${c.slug}/`)];
  for (const path of subPaths) {
    for (const l of PAGE_LANGS) {
      entries.push({ url: `${HOST}/${l}${path}`, alternates: alt(PAGE_LANGS, path), changeFrequency: 'monthly', priority: 0.7 });
    }
  }
  return entries;
}
