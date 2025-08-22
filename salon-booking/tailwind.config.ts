// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // If using src directory
  ],
  theme: {
    extend: {
      backgroundImage: {
        "salon-bg": "url('/salon.jpg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
