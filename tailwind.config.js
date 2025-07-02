/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '90rem',
        '9xl': '100rem',
        '10xl': '110rem',
      },
      fontFamily: {
        jost:     ["var(--font-jost)",     "sans-serif"],
        kurale:   ["var(--font-kurale)",   "serif"],
        oks:      ["var(--font-oks-free)", "sans-serif"],
        enthalpy: ["var(--font-enthalpy-298)", "sans-serif"],
      },
      fontSize: {
        '10xl': '10rem',
        '11xl': '11rem',
        '12xl': '12rem',
        '13xl': '13rem',
        '14xl': '14rem',
      },
    },
  },
  plugins: [],
}
