module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"],
    },
    extend: {
      height: {
        xl: "500px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

