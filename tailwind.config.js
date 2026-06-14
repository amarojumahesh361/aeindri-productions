/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cinematic-black': '#0B0B0B',
        'cinematic-gray': '#181818',
        'cinematic-dark': '#121212',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#F3E5AB',
          dark: '#AA7C11',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 15px rgba(212, 175, 55, 0.35)',
        'gold-glow-lg': '0 0 30px rgba(212, 175, 55, 0.6)',
      }
    },
  },
  plugins: [],
}
