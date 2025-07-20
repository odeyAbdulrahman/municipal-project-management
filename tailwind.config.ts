import type { Config } from "tailwindcss"

const config: Config = {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
        // Primary brand colors from Sharjah Digital
  			primary: {
          50: '#f6faf7',
          100: '#e8f5ea',
          200: '#d4ebd8',
          300: '#b2d9bb',
          400: '#94d1a4', // rgb(148, 209, 164)
          500: '#005834', // rgb(0, 88, 52) - Main green
          600: '#004a2d',
          700: '#003d25',
          800: '#00321e',
          900: '#002818',
        },
        // Secondary colors
  			secondary: {
          50: '#fafaf8', // rgb(250, 250, 248)
          100: '#f6f6f3', // rgb(246, 246, 243)
          200: '#f4f4ef', // rgb(244, 244, 239)
          300: '#f1f1ea', // rgb(241, 241, 234)
          400: '#eaeae2', // rgb(234, 234, 226)
          500: '#e5e5de', // rgb(229, 229, 222)
          600: '#d5d6d5', // rgb(213, 214, 213)
          700: '#abacae', // rgb(171, 174, 172)
          800: '#a7a79e', // rgb(167, 167, 158)
          900: '#565e59', // rgb(86, 94, 89)
        },
        // Dark colors
        dark: {
          50: '#f8f9f8',
          100: '#e8eae9',
          200: '#d0d4d1',
          300: '#414a45', // rgb(65, 74, 69)
          400: '#2c332f', // rgb(44, 51, 47)
          500: '#212529', // rgb(33, 37, 41)
          600: '#1a1e21',
          700: '#14171a',
          800: '#0f1113',
          900: '#0a0c0d',
        },
        // Accent colors
  			accent: {
          blue: '#0d6efd', // rgb(13, 110, 253)
          orange: '#ff9200', // rgba(255, 146, 0)
        },
        // Utility colors
        background: '#fafaf8', // rgb(250, 250, 248)
        foreground: '#212529', // rgb(33, 37, 41)
        muted: '#f1f1ea', // rgb(241, 241, 234)
        border: '#e5e5de', // rgb(229, 229, 222)
        
        // Legacy colors for backward compatibility
        'sharjah-orange': '#ff9200',
        'sharjah-blue': '#0d6efd',
        'sharjah-green': '#005834',
        'sharjah-purple': '#6f42c1',
        'sharjah-red': '#dc3545',
      },
      fontFamily: {
        // Arabic fonts
        'cairo': ['Cairo', 'sans-serif'],
        'neue-frutiger-arabic': ['Neue Frutiger Arabic', 'sans-serif'],
        // Latin fonts
        'archivo': ['Archivo', 'sans-serif'],
        // Default sans-serif stack
        'sans': ['Cairo', 'Neue Frutiger Arabic', 'Archivo', 'system-ui', 'sans-serif'],
      },
      fontWeight: {
        'regular': '400',
        'medium': '500',
        'bold': '700',
        'heavy': '800',
      },
    },
  },
  plugins: [],
}

export default config
