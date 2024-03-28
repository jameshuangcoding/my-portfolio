import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        onyx: '#393D3F',
        'new-white': '#FDFDFF',
        'slight-grey': '#F8F8F8',
        'cadet-grey': '#A5ABAF',
        'custom-orange': '#FF3B00',
        'custom-white': '#F4F0E6',
        'custom-black': '#1A1A1A',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-roboto-mono)'],
        raleway: [],
      },
      // cursor: {
      //   'dragon-boat': ''
      // }
    },
  },
  plugins: [],
};
export default config;
