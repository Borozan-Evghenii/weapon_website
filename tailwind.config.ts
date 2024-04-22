import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#212121',
        whiteSmoke: '#f9f9f9',
        lightGray: '#999999',
        darkGray: '#333333',
        black: '#000'
      },
      borderRadius: {
        '10': '10px',
        '20': '20px'
      },
      fontSize: {
        '60': '60px',
        '40': '40px',
        '37': '37px',
        '18': '18px',
        '15': '15px',
        '14': '14px',
        '12': '12px'
      }
    }
  },
  plugins: []
};
export default config;
