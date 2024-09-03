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
        main: {
          black: "#121212",
          silver: "#a5acb1",
          white: "#F8F8F8",
        },
        secondary: {
          black: "#1F1F1F",
        },
        green: {
          mint: "#98FF98",
          dark: "#00CC66",
          bright: "#B2FFB2"
        },
      },
    },
  },
  plugins: [],
};
export default config;
