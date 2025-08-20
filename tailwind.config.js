/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      screens: {
        xs: '480px', // breakpoint extra pequeno
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        custom: '900px', // exemplo de breakpoint manual
      },
    },
  },
  plugins: [],
}
