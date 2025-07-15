/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ['var(--font-orbitron)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        'bebas-neue': ['var(--font-bebas-neue)', 'sans-serif'],
      },
      colors: {
        neon: {
          pink: '#ff0066',
          blue: '#00ffff',
          green: '#00ff00',
          purple: '#9900ff',
        },
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(255, 0, 102, 0.5)',
          },
          '50%': {
            boxShadow: '0 0 40px rgba(255, 0, 102, 0.8)',
          },
        },
        pulse: {
          '0%, 100%': {
            opacity: '0.5',
          },
          '50%': {
            opacity: '1',
          },
        },
      },
    },
  },
  plugins: [],
}
