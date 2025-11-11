import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

export const metadata: Metadata = {
  title: 'Encantos de Natal — 100 ideias criativas pra decorar com o que você já tem',
  description: 'Descubra como transformar sua casa neste Natal com 100 ideias encantadoras e +50 bônus. Decore gastando pouco e viva o verdadeiro espírito natalino.',
  keywords: 'Natal, decoração, ideias criativas, e-book, inspiração, economia, lar, aconchego',
  openGraph: {
    title: 'Encantos de Natal — 100 ideias criativas pra decorar com o que você já tem',
    description: 'Descubra como transformar sua casa neste Natal com 100 ideias encantadoras e +50 bônus. Decore gastando pouco e viva o verdadeiro espírito natalino.',
    // You can replace this with a real image URL for social media sharing
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Playfair+Display:wght@700;900&display=swap"
          rel="stylesheet"
        />
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '845988434564378');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=845988434564378&ev=PageView&noscript=1"
          />
        </noscript>
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
