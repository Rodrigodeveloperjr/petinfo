/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        "custom-brand": {
          "1": "#364FC7",
          "2": "#3B56D9",
        },
        "custom-sucess": "#087F5B",
        "custom-alert": {
          "1": "#C73650",
          "2": "#DB3C58",
        },
        "custom-gray": {
          "1": "#212529",
          "2": "#343A40",
          "3": "#495057",
          "4": "#868E96",
          "5": "#ADB5BD",
          "6": "#E9ECEF",
          "7": "#F1F3F5",
          "8": "#F8F9FA",
          "9": "#FCFEFF",
          "10": "#D9D9D9",
          "11": "#1E1E1E",
        },
      },
      height: {
        "672": "42em",
        "38": "2.375em",
        "102": "6.375em",
        "419": "26.1875em",
        "82": "5.125em",
        "600": "37.5em",
        "479": "29.9375em",
        "321": "20.0625em",
        "138": "8.625em",
      },
      maxWidth: {
        "160": "10em",
        "369": "23.0625em",
        "320": "20em",
        "391": "24.4375em",
        "603": "37.6875em",
        "152": "9.5em",
        "205": "12.8125em",
      }
    },
  },
  plugins: [],
}
