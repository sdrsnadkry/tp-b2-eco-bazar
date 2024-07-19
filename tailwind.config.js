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
      fontSize: {
        d1: ["4.5rem", "5.25rem"],
        h1: ["3.5rem", "4.2rem"],
        h2: ["3rem", "28px"],
        h3: ["24px", "32px"],
        h4: ["24px", "32px"],
        h5: ["24px", "32px"],
        "body-xxl": ["24px", "32px"],
        "body-xl": ["24px", "32px"],
        "body-large": ["24px", "32px"],
        "body-medium": ["24px", "32px"],
        "body-small": ["24px", "32px"],
        "body-tiny": ["24px", "32px"],
      },
      fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        "semi-bold": 600,
        bold: 700,
        "extra-bold": 800,
        black: 900,
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
        },
        "green-grey": {
          50: "#EDF2EE",
          100: "#DAE5DA",
        },
      },
    },
  },
  plugins: [],
};
