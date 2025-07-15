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
        'fondo-negro': '#0D0D0D',
        'fucsia': '#FF2EC8',
        'azul': '#00FFFF',
        'verde': '#39FF14',
        'morado': '#9D00FF',
        'amarillo': '#FFFF33',
        'texto-gris': '#CCCCCC',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            textShadow: '0 0 10px #FF2EC8, 0 0 12px #FF2EC8, 0 0 15px #FF2EC8',
          },
          '50%': {
            textShadow: '0 0 15px #FF2EC8, 0 0 20px #FF2EC8, 0 0 25px #FF2EC8',
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
