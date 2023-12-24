/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,vue}"],
  theme: {
    screens: {
      'mobileL': '425px',
      'sm':'640px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '1xl':'',
      '2xl':'1536px',

    },
    extend: {
      fontFamily: {
        cardo: ['Cardo', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      backgroundImage: {
        'travelImage': 'url(@/assets/images/main-img.png)',
        'tutorialImage1': 'url(@/assets/images/Tutorial/Tutorial-photo-1.png)',
        'tutorialImage2': 'url(@/assets/images/Tutorial/Tutorial-photo-2.png)',
        'linesImage1': 'url(@/assets/images/explore-bg.png)',
        'exploreImage1': 'url(@/assets/images/explore-bg.png)',
        'countryImage1': 'url(@/assets/images/Country/country.jpg)',
      },
    }
  },
  plugins: [],
}

