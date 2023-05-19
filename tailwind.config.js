/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      //blues
      "blue-primary": "#1D3962",
      "blue-secondary": "#107BC2",
      "blue-secondary-two": "#268DB7",
      "blue-secondary-third": "#045769",

      //green
      "green-primary": "#073252",
      "green-secondary": "#3B872A",
      "green-secondary-two": "#86B978",
      "green-secondary-third": "#79F757",

      //neutral colors
      "black-main": "#232421",
      "black-secondary": "#32332F",
      "gray-main": "#6D7067",
      "gray-secondary": "#ABB0A2",
      "gray-third": "#B8BDAE",
      "white-main": "#FFFEFC",

      //warnings
      "yellow-warning": "#F5C30F",
      "red-warning": "#9E130E",
    },
  },
  plugins: [],
};
