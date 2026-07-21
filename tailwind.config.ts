module.exports = {
  /** @type {import('tailwindcss').Config} */
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        secondary: {
          light: '#f8f9fa',
          DEFAULT: '#e9ecef',
          dark: '#dee2e6',
        },
        safari: {
          dark: '#3f3c43',
          nav: '#252321',
          yellow: '#f7f31d',
          blue: '#65adff',
          gray: '#757575',
          lightgray: '#f5f5f5',
          border: '#eeeeee',
          tablebg: '#f2f2f2',
        },
      },
      fontFamily: {
        hoefler: [
          'Hoefler Text',
          'Georgia',
          'Times New Roman',
          'times',
          'serif',
        ],
        brandon: [
          'Brandon',
          '-apple-system',
          'system-ui',
          'segoe ui',
          'ubuntu',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
