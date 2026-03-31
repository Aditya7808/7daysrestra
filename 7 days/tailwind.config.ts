/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#fef3e2",
          100: "#fde4b9",
          200: "#fcd48c",
          300: "#fbc35e",
          400: "#fab63c",
          500: "#f9a825",
          600: "#f59220",
          700: "#ef7918",
          800: "#e96212",
          900: "#df3d08",
        },
        burgundy: {
          50: "#fce4ec",
          100: "#f8bbd0",
          200: "#f48fb1",
          300: "#f06292",
          400: "#ec407a",
          500: "#8b1a2b",
          600: "#7a1726",
          700: "#6a1321",
          800: "#5a101c",
          900: "#3e0b13",
        },
        cream: {
          50: "#fffdf7",
          100: "#fefaf0",
          200: "#fdf5e1",
          300: "#fcefd2",
          400: "#fbe9c3",
          500: "#f5e6cc",
        },
        dark: {
          700: "#2d2013",
          800: "#1f1609",
          900: "#120d05",
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(139,26,43,0.85) 0%, rgba(18,13,5,0.9) 100%)",
        "section-gradient":
          "linear-gradient(180deg, #fffdf7 0%, #fefaf0 100%)",
        "dark-gradient":
          "linear-gradient(135deg, #1f1609 0%, #2d2013 50%, #120d05 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
