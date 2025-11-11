import type { Metadata } from 'next';
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
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
