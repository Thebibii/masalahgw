/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        muted: "#F1F5F9",
        primary: "#0F172A",
        secondary: "#F1F5F9",
        accent: "#F1F5F9",
        destructive: "#EF4444",
        input: "#E2E8F0",
        accentForeground: "#0F172A",
        primaryForeground: "#F8FAFC",
        destructiveForeground: "#F8FAFC",
      },
    },
  },
  plugins: [],
};
