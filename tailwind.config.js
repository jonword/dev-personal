/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pingonce: {
          "50%": { transform: "scale(2)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        pingonce: "pingonce 0.5s cubic-bezier(0, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
};
