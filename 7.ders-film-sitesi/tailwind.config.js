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
        'moviePoster-gradient': 'linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.9) 30%, rgba(0,0,0,0.7) 50%, rgba(255,255,255,0) 100%)',
      }
    },
  },
  plugins: [],
};

