import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
  title: 'Spichka Landing Website',
  description: 'Зажигаем ваши идеи',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
