import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#E01B24',
          dark: '#B5131C',
          light: '#FF2D37',
        },
        charcoal: {
          DEFAULT: '#1A1A1A',
          medium: '#2D2D2D',
          light: '#4A4A4A',
        },
        gray: {
          surface: '#F5F5F5',
          border: '#E5E5E5',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
        },
      },
    },
  },
  plugins: [],
}

export default config
