/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "custom-gray": {
          "1": "#212529",
          "4": "#868E96",
          "6": "#E9ECEF",
          "8": "#F8F9FA",
          "9": "#FCFEFF",
          "10": "#D9D9D9",
          "11": "#1E1E1E",
        }
      },
      height: {
        "672": "42em",
      },
      maxWidth: {
        "160": "10em",
        "369": "23.0625em",
      }
    },
  },
  plugins: [],
}
