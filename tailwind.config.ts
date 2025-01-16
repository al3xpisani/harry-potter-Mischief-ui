/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
    // animation: {
    //   'magic-spin-once': 'spinOnce 1s ease-out forwards',
    // },
    // keyframes: {
    //   spinOnce: {
    //     '0%': { transform: 'rotate(0deg)', opacity: '0' },
    //     '100%': { transform: 'rotate(360deg)', opacity: '1' },
    //   },
    // },
    animation: {
      'ping-visible-once': 'pingVisible 1s cubic-bezier(0, 0, 0.2, 1) forwards',
    },
    keyframes: {
      pingVisible: {
        '0%': { transform: 'scale(0)', opacity: '0' },
        '100%': { transform: 'scale(1)', opacity: '1' },
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('@vidstack/react/tailwind.cjs'),
  ],
} satisfies Config;
