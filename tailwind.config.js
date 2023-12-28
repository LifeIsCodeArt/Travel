/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,vue}"],
  theme: {
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

