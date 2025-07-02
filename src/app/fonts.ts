import localFont from 'next/font/local';

export const jost = localFont({
  variable: '--font-jost',
  display: 'swap',
  src: [
    { path: '../../public/fonts/Jost/static/Jost-Thin.ttf', weight: '100', style: 'normal' },
    { path: '../../public/fonts/Jost/static/Jost-ExtraLight.ttf', weight: '200', style: 'normal' },
    { path: '../../public/fonts/Jost/static/Jost-Light.ttf', weight: '300', style: 'normal' },
    { path: '../../public/fonts/Jost/static/Jost-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../../public/fonts/Jost/static/Jost-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../../public/fonts/Jost/static/Jost-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../../public/fonts/Jost/static/Jost-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../../public/fonts/Jost/static/Jost-ExtraBold.ttf', weight: '800', style: 'normal' },
    { path: '../../public/fonts/Jost/static/Jost-Black.ttf', weight: '900', style: 'normal' },
    { path: '../../public/fonts/Jost/static/Jost-Italic.ttf', weight: '400', style: 'italic' },
    { path: '../../public/fonts/Jost/static/Jost-ExtraLightItalic.ttf', weight: '200', style: 'italic' },
    { path: '../../public/fonts/Jost/static/Jost-LightItalic.ttf', weight: '300', style: 'italic' },
    { path: '../../public/fonts/Jost/static/Jost-MediumItalic.ttf', weight: '500', style: 'italic' },
    { path: '../../public/fonts/Jost/static/Jost-SemiBoldItalic.ttf', weight: '600', style: 'italic' },
    { path: '../../public/fonts/Jost/static/Jost-BoldItalic.ttf', weight: '700', style: 'italic' },
    { path: '../../public/fonts/Jost/static/Jost-ExtraBoldItalic.ttf', weight: '800', style: 'italic' },
    { path: '../../public/fonts/Jost/static/Jost-BlackItalic.ttf', weight: '900', style: 'italic' },
    { path: '../../public/fonts/Jost/static/Jost-ThinItalic.ttf', weight: '100', style: 'italic' },
    { path: '../../public/fonts/Jost/Jost-VariableFont_wght.ttf', weight: '100 900', style: 'normal' },
    { path: '../../public/fonts/Jost/Jost-Italic-VariableFont_wght.ttf', weight: '100 900', style: 'italic' },
  ],
});

export const kurale = localFont({
  variable: '--font-kurale',
  display: 'swap',
  src: [
    { path: '../../public/fonts/Kurale/Kurale-Regular.ttf', weight: '400', style: 'normal' },
  ],
});

export const oksFree = localFont({
  variable: '--font-oks-free',
  display: 'swap',
  src: [
    { path: '../../public/fonts/Oks/oks.ttf', weight: '400', style: 'normal' },
  ],
});

export const enthalpy298 = localFont({
  variable: '--font-enthalpy-298',
  display: 'swap',
  src: [
    { path: '../../public/fonts/Enthalpy/enthalpy298regular.ttf', weight: '400', style: 'normal' },
  ],
});
