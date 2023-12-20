import type { Config } from 'tailwindcss'
const {fontFamily} = require("tailwindcss/defaultTheme")
const config: Config = {
  darkMode:'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:"#d4af37",
        secondary:"#2ecc71",
        tertiary:{
          dark:"#c0392b",
          light:"#c0662b",
        }
      },
      fontFamily:{
        poppins: ['var(--font-poppins)', ...fontFamily.sans]
      }
    },
  },
  plugins: [],
}
export default config
