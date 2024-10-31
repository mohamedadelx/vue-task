export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        candal: ["Candal", "sans-serif"],
        integral: ["Integral CF", "sans-serif"],
      },
      container: {
        center: true,
        1440: "1440px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
