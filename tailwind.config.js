/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#08090b",
        surface: {
          DEFAULT: "#0e1014",
          subtle: "#12151b",
          elevated: "#181c24",
          border: "#1f242f",
        },
        gold: {
          DEFAULT: "#cca43b",
          light: "#ddb754",
          dark: "#a38029",
          glow: "rgba(204, 164, 59, 0.15)",
        },
        slate: {
          950: "#08090b",
          900: "#0e1014",
          850: "#12151b",
          800: "#181c24",
          700: "#242b38",
          600: "#3d475a",
          500: "#64748b",
          400: "#8fa0b5",
          300: "#cbd5e1",
          200: "#e2e8f0",
          100: "#f1f5f9",
          50: "#f8fafc",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        mono: [
          '"SF Mono"',
          "Menlo",
          "Monaco",
          "Consolas",
          '"Liberation Mono"',
          '"Courier New"',
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};
