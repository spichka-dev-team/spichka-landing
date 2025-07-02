// src/app/layout.tsx
import './globals.css';
import { jost, kurale, oksFree, enthalpy298 } from './ui/fonts';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`
        ${jost.variable}
        ${kurale.variable}
        ${oksFree.variable}
        ${enthalpy298.variable}
      `}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
