/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkbg: '#0c0c0c',
        brand: {
          DEFAULT: '#3D81E3',
          light: '#5a99f5',
          dark: '#2563eb',
        },
        cyan: {
          DEFAULT: '#00d2ff',
          light: '#A4F4FD',
          glow: '#00d2ff',
        },
        deepblue: '#0B2551',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      boxShadow: {
        'glass-sm': '0 4px 20px -2px rgba(0, 0, 0, 0.5), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'glass-md': '0 8px 32px -4px rgba(0, 0, 0, 0.6), inset 0 1px 0 0 rgba(255, 255, 255, 0.12)',
        'glass-lg': '0 16px 48px -8px rgba(0, 0, 0, 0.7), inset 0 1px 0 0 rgba(255, 255, 255, 0.16)',
        'glow-brand': '0 0 35px -5px rgba(61, 129, 227, 0.35)',
        'glow-cyan': '0 0 35px -5px rgba(0, 210, 255, 0.35)',
      },
    },
  },
  plugins: [],
}
