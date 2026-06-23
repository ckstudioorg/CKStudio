/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          red: '#8B0000',
          black: '#111111',
          white: '#E6E6E6',
        },
        brand: {
          gold: '#D4AF37',
          red: '#8B0000',
          black: '#111111',
          silver: '#E6E6E6',
        },
        secondary: {
          black: '#1a1a1a',
          gray: '#f5f5f5',
        },
        dark: {
          950: '#050505',
          900: '#0a0a0a',
          800: '#111111',
          700: '#1a1a1a',
          600: '#222222',
          500: '#2a2a2a',
          400: '#333333',
        },
        crimson: {
          50: '#fff1f1',
          100: '#ffe1e1',
          200: '#ffc7c7',
          300: '#ff9f9f',
          400: '#ff6464',
          500: '#d72c2c',
          600: '#8B0000',
          700: '#760000',
          800: '#5f0000',
          900: '#420000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
        'marquee': 'marquee 30s linear infinite',
        'marquee-reverse': 'marqueeReverse 30s linear infinite',
        'scroll-left': 'scrollLeft 35s linear infinite',
        'scroll-right': 'scrollRight 35s linear infinite',
        'text-reveal': 'textReveal 1s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
        'particle': 'particle 15s linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(139, 0, 0, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(139, 0, 0, 0.6)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(-33.33%)' },
          '100%': { transform: 'translateX(0)' },
        },
        textReveal: {
          '0%': { opacity: '0', transform: 'translateY(20px)', filter: 'blur(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)', filter: 'blur(0)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(139, 0, 0, 0.5)' },
          '100%': { textShadow: '0 0 20px rgba(139, 0, 0, 0.8), 0 0 40px rgba(139, 0, 0, 0.4)' },
        },
        particle: {
          '0%': { transform: 'translate(0, 0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translate(100px, -800px) rotate(720deg)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(139, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 0, 0, 0.03) 1px, transparent 1px)',
        'dot-pattern': 'radial-gradient(circle, rgba(139, 0, 0, 0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '60px 60px',
        'dot': '24px 24px',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
