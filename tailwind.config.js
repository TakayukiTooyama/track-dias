/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#ffffff',
      black: '#121212',
      gray: {
        100: '#F8F8F8',
        200: '#F3F3F6',
        300: '#E0E0E0',
        400: '#BDBDBD',
        500: '#828282',
        600: '#4F4F4F',
        700: '#333333',
        800: '#232323',
        900: '#1C1C1C',
      },
      border: {
        light: '#F0F0F0',
        dark: '#414141',
      },
      orange: '#FF8126',
      red: '#FC443A',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
  ],
};
