/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          accent: "#058B60",
          background: "#0B1620",
          foreground: "#B9B2B2",
          revivenode: "#02A9F8",
          red: "#B02E2E",
          yellow: "#DA8529",
          purple: "#78058B",
          ochre: "#B69D69",
          white: "#E5E5E5",
        },
      },
    },
  },
  plugins: [],
};
