import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#0D0B14',
        midnight: '#1C1528',
        primary: '#5F25D6',
        neon: '#8E54FF',
        lilac: '#D3C3EE',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)'],
        sans: ['var(--font-manrope)'],
      },
    },
  },
  plugins: [],
}

export default config