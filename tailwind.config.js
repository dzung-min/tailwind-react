module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/src/assets/img/hero-image.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
