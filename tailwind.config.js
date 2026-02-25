/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#1E40AF', // Electric Blue
        secondary: '#10B981', // Fresh Green
        accent: '#F59E0B', // Bright Orange
        neutral: '#6B7280', // Cool Gray
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      spacing: {
        1: '0.25rem',
        2: '0.5rem',
        3: '0.75rem',
        4: '1rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.5rem',
      },
    },
  },
  plugins: [],
}

