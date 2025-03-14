/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "colorPrimary": "#4f46e5",
        "colorSecondary": "#7c3aed",
        "colorBlack": "#0f172a",
        "colorDark": "#0a0f1c",
        "colorLight" : "#e2e8f0",
        "colorVidro" : "rgba(255,255,255,0.1)",
        "shadowImage": "rgba(79,70,229,0.5)",
      },
    },
  },
  plugins: [],
};
