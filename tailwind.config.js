// It's the configuration file that tells Tailwind how to behave when it compiles your styles.



/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // class strategy for manual toggling
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
