/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'DarkBlue': 'hsl(233, 26%, 24%)',
        'LimeGreen': 'hsl(136, 65%, 51%)',
        'BrightCyan': 'hsl(192, 70%, 51%)',
        'GrayishBlue': 'hsl(233, 8%, 62%)',
        'LightGrayishBlue': 'hsl(220, 16%, 96%)',
        'VeryLightGray': 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        'public-sans': 'Public Sans, sans-serif'
      },
      screens: {
        'desktop': '1440px'
      },
      backgroundImage: {
        'backgroundEasyBank': 'url(./assets/images/image-mockups.png)',
        'background-desktop': 'url(./assets/images/bg-intro-desktop.svg)',
        'background-mobile': 'url(./assets/images/bg-intro-mobile.svg)'
      },
      backgroundPosition: {
        'top-4': 'right top -8rem',
        'desktopPosition': 'right -24rem top -16rem',
      },
      backgroundSize: {
        '60': '60%'
      }
    },
  },
  plugins: [],
}