import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#7a4637",
        secondary: "#421917",
        brandDark: "#240802",
        dark: "#1c1c1c",
        light: "#f0f0f0"
      },
      fontFamily:{
        poppins:["Poppins","sans-serif"],
        pacifiko:["Pacifico","cursive"],
        second2:["sriracha","cursive"],
        second3:["srisakdi","system-ui"]
      },
      container:{
        center:true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem",
          
        }
      }
    },
  },
  plugins: [],
};
export default config;
