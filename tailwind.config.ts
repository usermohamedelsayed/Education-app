import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "3xl": "0 30px 60px -20px black",
      },
      colors: {
        bgPrimary: "#09051a",
        bgSubPrimary: "#130331",
        crPrimary: "#673AB7",
        crSubPrimary: "",
        crBorer: "#474747",
        crTextMuted: "#9E9E9E",
      },
    },
    darkMode: "class",
  },
  plugins: [],
};
export default config;
