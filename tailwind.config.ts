import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#ffffff",
        pink: "#FE4977",
        blue: "#6A8DFF",
        orange: "#F49325",
        yellow: "#FBF86A",
        green: "#55FE3A",
        brand: "#55FE3A",
        brandHover: "#8BFE6B",
        brandActive: "#34DA2A",
        backgroundColor: "#F5F5F5",
        error: "#fe4977",
        borderColor: "#9ba5b7",
        current: "currentColor",
      },
      fontFamily: {
        suite: ["SUITE", "sans-serif"],
      },
      fontSize: {
        h0: ["48px", "normal"], // [fontSize, lineHeight]
        h1: ["30px", "42px"],
        h2: ["24px", "32px"],
        body0: ["18px", "normal"],
        body0ExtraBold: ["18px", "normal"],
        body1: ["16px", "24px"],
        body1Bold: ["16px", "24px"],
        body2: ["14px", "normal"],
        body2Bold: ["14px", "normal"],
        body3: ["12px", "16px"],
        body4: ["10px", "16px"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      letterSpacing: {
        body3: "0.72px",
        body4: "0.72px",
      },
    },
  },
  plugins: [],
};
export default config;
