/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'custom-gradient': 'linear-gradient(180deg, rgba(0,0,0,0.8), rgba(0,0,0,0))',
      }
    },
  },
  plugins: [],
};
