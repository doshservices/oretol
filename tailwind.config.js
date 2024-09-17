/** @type {import('tailwindcss').Config} */
export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    screens: {
      'xxl': '1350px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
      'ssm': '420px',
      'lsm': '320px'
    },
    colors: {
      'Primary': '#1B1F38',
      'Secondary': '#42BEFA',
      'grey100': '#6A6A6A',
      'dark200': '#2d2d2d',
      'light200': '#f8f8f8',
      'transparentDark': 'hsla(0, 0%, 13%, 0.8)',
      'borderHash': '#BABABA',
      'borderCartActions': '#999999'
    },
    fontFamily: {
      outfit: ['Outfit, Montserrat', 'sans-serif'],
    },
    boxShadow: {
      'shawdowCart': '0px 1px 2px 0px #1018280D'
    }
  },
};
export const plugins = []; 