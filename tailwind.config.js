/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}', // Asegúrate de incluir las rutas correctas
  ],
  theme: {
    extend: {
      // Personalizaciones del tema
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
  safelist: [
    'z-50',
    'opacity-100',
    'opacity-0',
    'data-[state=open]:opacity-100',
    'data-[state=closed]:opacity-0',
  ],
};