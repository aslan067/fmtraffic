export const metadata = {
  metadataBase: new URL('https://fmtraffic.com'),
  title: 'FM Traffic — Road-Safety Equipment',
  description: 'EU-wide road safety supply: delineators, cones, speed bumps, line marking, LED warning.',
  robots: 'index,follow',
  icons: { icon: '/favicon.svg' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}

