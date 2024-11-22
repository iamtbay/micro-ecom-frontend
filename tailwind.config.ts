import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      updock:['Updock','cursive']
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black0:"#181C14",
      },
    },
  },
  plugins: [],
};
export default config;
