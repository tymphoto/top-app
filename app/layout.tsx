import type { Metadata } from 'next';
import '../styles/globals.scss';

export const metadata: Metadata = {
  title: 'Top App',
  description: 'Подбери лучший курс для себя',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700;900&display=swap" rel="stylesheet" />
        <meta property="og:locale" content="ru_RU" />
      </head>
      <body>{children}</body>
    </html>
  );
}
