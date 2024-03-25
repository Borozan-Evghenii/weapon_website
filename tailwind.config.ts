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
        borderColor: '#f9f9f9'
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
