/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#D72C2C', dark: '#B52020', light: '#E84444' },
        charcoal: { DEFAULT: '#1E1E1E', mid: '#2D2D2D', soft: '#3D3D3D' },
        grey: { light: '#F8F8F8', mid: '#F2F2F2', border: '#E0E0E0', text: '#6B6B6B', muted: '#9B9B9B' },
      },
      fontFamily: {
        display: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 2px 12px rgba(0,0,0,0.06)',
        'card-hover': '0 6px 24px rgba(0,0,0,0.12)',
        'red-glow': '0 4px 16px rgba(215,44,44,0.30)',
      },
    },
  },
  plugins: [],
};
