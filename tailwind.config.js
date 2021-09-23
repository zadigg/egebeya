module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        amazon_blue: "#243c5a",
        amazon_blue_light: "#232F3E",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
