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
        'forest-green': '#2D5016',
        'warm-golden': '#D4A574',
        'earth-brown': '#6B4423',
        'soft-cream': '#F5F1E8',
        'pure-white': '#FFFFFF',
        'sky-blue': '#87CEEB',
        'vibrant-orange': '#FF8C42',
        'deep-forest': '#1a3009',
        'light-sage': '#A8B89D',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'serif'],
        'sans': ['DM Sans', 'sans-serif'],
        'display': ['Playfair Display', 'serif'],
        'marathi': ['Tiro Devanagari Marathi', 'serif'],
      },
    },
  },
  plugins: [],
};
export default config;

