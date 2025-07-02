// src/app/fonts.ts
import localFont from 'next/font/local';

export const jost = localFont({
  variable: '--font-jost',
  display: 'swap',
  src: [
    { path: '../../fonts/Jost/static/Jost-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../../fonts/Jost/Jost-VariableFont_wght.ttf', weight: '100 900', style: 'normal' },
  ],
});

export const kurale = localFont({
  variable: '--font-kurale',
  display: 'swap',
  src: [{ path: '../../fonts/Kurale/Kurale-Regular.ttf', weight: '400', style: 'normal' }],
});

export const oksFree = localFont({
  variable: '--font-oks-free',
  display: 'swap',
  src: [{ path: '../../fonts/Oks/oks.ttf', weight: '400', style: 'normal' }],
});

export const enthalpy298 = localFont({
  variable: '--font-enthalpy-298',
  display: 'swap',
  src: [{ path: '../../fonts/Enthalpy/enthalpy298regular.ttf', weight: '400', style: 'normal' }],
});
