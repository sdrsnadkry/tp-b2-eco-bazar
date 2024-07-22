/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontSize: {
        d1: ["4.5rem", "5.25rem"],
        h1: ["3.5rem", "4.2rem"],
        h2: ["3rem", "3.6rem"],
        h3: ["2.5rem", "3rem"],
        h4: ["2.25rem", "2.7rem"],
        h5: ["2rem", "2.4rem"],
        "body-xxl": ["1.5rem", "2.25rem"],
        "body-xl": ["1.5rem", "1.875rem"],
        "body-large": ["1.5rem", "1.6875rem"],
        "body-medium": ["1.5rem", "1.5rem"],
        "body-small": ["1.5rem", "1.3125rem"],
        "body-tiny": ["1.5rem", "0.975rem"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        "semi-bold": 600,
        bold: 700,
      },
      colors: {
        "success-bright": "#84D187",
        success: "#00B207",
        "success-dark": "#2C742F",
        warning: "#FF8A00",
        error: "#EA4B48",
        white: "#FFFFFF",
        grey: {
          50: "#F2F2F2",
          100: "#E6E6E6",
          200: "#CCCCCC",
          300: "#B3B3B3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4D4D4D",
          800: "#333333",
          900: "#1A1A1A",
        },
        "green-grey": {
          50: "#EDF2EE",
          100: "#DAE5DA",
          200: "#B4CCB4",
          300: "#96B297",
          400: "#7A997C",
          500: "#618062",
          600: "#406B42",
          700: "#2B572E",
          800: "#173B1A",
          900: "#002603",
        },
      },
    },
  },
  plugins: [],
};
