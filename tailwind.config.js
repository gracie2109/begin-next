/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {  
      boxShadow: {
        'custom': 'rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;',
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}
