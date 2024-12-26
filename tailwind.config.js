/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontDisplay: "Protest Revolution, serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
