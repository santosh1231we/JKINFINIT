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
        background: "#001B94",
        brand: {
          DEFAULT: "#001B94",
          light: "#0024c2",
          dark: "#00147a",
          deep: "#000F5C",
          surface: "#00147a",
          elevated: "#00188c",
          border: "rgba(255, 255, 255, 0.12)",
        },
        emerald: {
          DEFAULT: "#00A86B",
          light: "#00c87e",
          dark: "#008f5b",
          glow: "rgba(0, 168, 107, 0.25)",
        },
        red: {
          DEFAULT: "#E31B23",
          precision: "#E31B23",
          subtle: "rgba(227, 27, 35, 0.6)",
        },
        surface: {
          DEFAULT: "#000F5C",
          subtle: "#000a3d",
          elevated: "#00147a",
          border: "rgba(255, 255, 255, 0.1)",
        },
        slate: {
          950: "#00072b",
          900: "#000a3d",
          850: "#000F5C",
          800: "#00147a",
          700: "#00188c",
          600: "#223fa8",
          500: "#506ec7",
          400: "#8ca4e6",
          300: "#D9E2FF",
          200: "#E6ECFF",
          100: "#F2F5FF",
          50: "#FFFFFF",
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
