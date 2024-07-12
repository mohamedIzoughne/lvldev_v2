/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#1D1E1E',
        secondary: '#E63946',
      },
      borderRadius: {
        main: '15px',
      },
      fontWeight: {
        book: '350',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '0.5rem',
        sm: '1rem',
        lg: '2rem',
        xl: '2.5rem',
        '2xl': '6rem',
      },
    },
  },
  plugins: [],
}
