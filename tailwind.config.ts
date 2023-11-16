import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        copy: ["Satoshi Regular", "sans-serif"],
        headings: ["Rational Regular", "sans-serif"],
        mono: ["Mono Code", "monospace"],
      },
      colors: {
        graydark: "#505050",
        graydarksoft: "#5C5C5C",
        blackbg: "#181818",
        blackbgsection: "#151515",
        bgcode: "#151515",
        darkborder: "#292929",
        notegren: "rgb(212 ,242 ,233)",
        graywhite: "#D3D3D3",
        notegreen: "rgb(59, 187, 150)",
        primary: {
          purple: "rgb(142 ,68, 236)",
          green: "rgb(59, 187, 150)",
          orange: "rgb(237, 107, 34)",
          blue: "rgb(89 ,181, 248)",
          pink: "rgb(249, 114 ,137)",
        },
        secondary: {
          purple: "rgb(179 ,130 ,242)",
        },
        gray: {
          EE: "rgb(238,238,238)",
          "1F": "rgb(31,31,31)",
          "15": "#151515",
          F7: "rgb(247 ,247,247)",
          "50": "rgb(80,80,80)",
        },
        quaternary: {
          purple: "rgb(245,230,255)",
          blue: "rgb(230,247,254)",
          pink: "rgb(255,229,234)",
          orange: "rgb(254,241,233)",
          green: "rgb(212,242,233)",
        },
      },

      fontSize: {
        base: "1.125rem",
        sm: "14px",
        md: "16px",
        "3xl": "36px",
        "4xl": "48px",
        "5xl": "56px",
        "6xl": "3rem",
        "7xl": "3.5rem",
        "xl-tight": "1.375rem",
      },
      letterSpacing: {
        "250": "-0.2px",
        "125": "-0.1px",
        "0": "0px",
      },
      lineHeight: {
        "200": "1rem",
        title: "1.063",
      },
      fontWeight: {
        "bold-900": "900",
        "bold-700": "700",
        "bold-500": "500",
        "bold-300": "300",
        "bold-400": "400",
        medium: "500",
      },
      borderWidth: {
        "1": "1px",
      },
      borderRadius: {
        max: "50px",
        "400": "32px",
        "200": "16px",
        "100": "8px",
        "50": "4px",
        "25": "2px",
      },
      screens: {
        sm: "640px", // Pequeño
        md: "768px", // Mediano
        lg: "1024px", // Grande
        xl: "1280px", // Extra grande
      },
      spacing: {
        "1400": "112px",
        "1000": "80px",
        "800": "64px",
        "600": "48px",
        "400": "32px",
        "300": "24px",
        "200": "16px",
        "150": "12px",
        "100": "8px",
        "50": "4px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
