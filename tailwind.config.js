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
        background: "#00125e",
        brand: {
          DEFAULT: "#001B94",
          light: "#0024c2",
          dark: "#00115a",
          deep: "#000c40",
          surface: "#021464",
          elevated: "#031975",
          border: "rgba(255, 255, 255, 0.12)",
        },
        emerald: {
          DEFAULT: "#00c875",
          light: "#00e588",
          dark: "#059669",
          glow: "rgba(0, 200, 117, 0.2)",
        },
        red: {
          precision: "#e11d48",
          subtle: "rgba(225, 29, 72, 0.6)",
        },
        surface: {
          DEFAULT: "#021464",
          subtle: "#010e4a",
          elevated: "#031975",
          border: "rgba(255, 255, 255, 0.1)",
        },
        slate: {
          950: "#000a33",
          900: "#000e47",
          850: "#00115a",
          800: "#001878",
          700: "#1a3196",
          600: "#3850b5",
          500: "#6980db",
          400: "#9cb0f5",
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
