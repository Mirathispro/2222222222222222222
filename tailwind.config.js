/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          "100": "#000618",
          "200": "rgba(255, 255, 255, 0.8)",
          "300": "rgba(255, 255, 255, 0.2)",
          "400": "rgba(125, 125, 125, 0.29)",
          "500": "rgba(255, 255, 255, 0.51)",
          "600": "rgba(255, 255, 255, 0)",
        },
        darkmagenta: {
          "100": "#ad1aaf",
          "200": "rgba(173, 26, 175, 0.05)",
        },
        white: "#fff",
        powderblue: "rgba(199, 225, 219, 0.11)",
        dodgerblue: {
          "100": "#5991ff",
          "200": "rgba(89, 145, 255, 0.05)",
        },
        lightslategray: "rgba(164, 142, 169, 0.7)",
        mintcream: "#f5fbf2",
        gainsboro: "rgba(217, 217, 217, 0.9)",
      },
      spacing: {},
      fontFamily: {
        "display-text-header-big": "Oxanium",
        lato: "Lato",
        arial: "Arial",
        abel: "Abel",
        inter: "Inter",
      },
      borderRadius: {
        "4xl-5": "23.5px",
        mini: "15px",
        "381xl": "400px",
        "12xs-3": "0.3px",
      },
    },
    fontSize: {
      lg: "18px",
      "81xl": "100px",
      "31xl": "50px",
      "11xl": "30px",
      "6xl": "25px",
      xl: "20px",
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      "45xl": "64px",
      "32xl": "51px",
      "19xl": "38px",
      sm: "14px",
      "21xl": "40px",
      "3xl": "22px",
      "9xl": "28px",
      "16xl": "35px",
      "2xl": "21px",
      inherit: "inherit",
    },
    screens: {
      mq1875: {
        raw: "screen and (max-width: 1875px)",
      },
      mq1400: {
        raw: "screen and (max-width: 1400px)",
      },
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
