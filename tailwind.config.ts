import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          title: '#0f172a',
          body: '#334155',
        },
      },
      screens: {
        xxs: '318px',
        xs: '430px',
        sm: '576px',
        fablet: '672px',
        md: '768px',
        'mid-lg': '865px',
        lg: '982px',
        tb: '1012px',
        xl: '1200px',
      },
    },
  },
  plugins: [],
};
export default config;
