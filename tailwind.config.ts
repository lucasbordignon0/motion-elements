import type { Config } from "tailwindcss";

import { Figtree } from "next/font/google";
import { Caveat } from 'next/font/google'

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        formula1: ['Formula1', 'sans-serif'],
        figtree: ['Figtree', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        geist: ['Geist', 'sans-serif'],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'mobile': { max: '480px' },
        'desktop': { min: '481px' },
      }
    },
  },
  plugins: [],
};
export default config;
