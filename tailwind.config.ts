import type { Config } from 'tailwindcss'

const baseColors = {}

const baseWidths = {
  main: '1140px',
  aside: '300px',
  card: '280px',
}

const baseHeights = {
  header: '65px',
  body: 'calc(100vh - 65px)',
  footer: '80px',
  'full-card': '340px',
  'sm-card': '180px',
}

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      zIndex: {
        max: '99999999999',
      },
      width: {
        ...baseWidths,
      },
      minWidth: {
        ...baseWidths,
      },
      maxWidth: {
        ...baseWidths,
      },
      height: {
        ...baseHeights,
      },
      minHeight: {
        ...baseHeights,
      },
      maxHeight: {
        ...baseHeights,
      },
      textColor: {
        ...baseColors,
      },
      borderColor: {
        ...baseColors,
      },
      backgroundColor: {
        ...baseColors,
      },
      boxShadow: {
        bold: '0 0 0 4px hsl(var(--border))',
        'bold-lg': '0 0 0 8px hsl(var(--border))',
      },
      colors: {
        ...baseColors,
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
export default config
