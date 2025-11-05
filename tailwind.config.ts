import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        heading: ['Manrope', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        surface: {
          DEFAULT: "hsl(var(--surface))",
          foreground: "hsl(var(--surface-foreground))",
        },
        text: {
          primary: "hsl(var(--text-primary))",
          secondary: "hsl(var(--text-secondary))",
          muted: "hsl(var(--text-muted))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        warning: {
          DEFAULT: "hsl(var(--warning))",
          foreground: "hsl(var(--warning-foreground))",
        },
        slate: {
          50: "hsl(var(--slate-50))",
          100: "hsl(var(--slate-100))",
          200: "hsl(var(--slate-200))",
          300: "hsl(var(--slate-300))",
          400: "hsl(var(--slate-400))",
          500: "hsl(var(--slate-500))",
          600: "hsl(var(--slate-600))",
          700: "hsl(var(--slate-700))",
          900: "hsl(var(--slate-900))",
        },
      },
      boxShadow: {
        'card': 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        'elevation-1': '0 1px 2px rgba(0,0,0,0.06), 0 1px 1px rgba(0,0,0,0.04)',
        'elevation-2': '0 4px 10px rgba(0,0,0,0.08), 0 2px 4px rgba(0,0,0,0.06)',
        'elevation-3': '0 12px 24px rgba(0,0,0,0.14), 0 6px 12px rgba(0,0,0,0.10)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
        "pulse-down": {
          "0%, 100%": { transform: "translateY(0)", opacity: "0.6" },
          "50%": { transform: "translateY(6px)", opacity: "1" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 1.8s ease-in-out infinite",
        "pulse-down": "pulse-down 1.6s ease-in-out infinite",
        "fade-in": "fade-in 250ms ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
