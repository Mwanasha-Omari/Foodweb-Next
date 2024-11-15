import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'yellow': '#FFC624',
        'primary color': '#EEEEEE',
        'orange':'#FCC55E',
      },
      fontFamily: {
        'water-brush': ['"Water Brush"', 'cursive'],
      },
    },
  },
  plugins: [],
};
export default config;
