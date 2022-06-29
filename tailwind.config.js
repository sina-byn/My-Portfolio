/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#333333',
        'primary-light': 'rgb(245, 245, 245)',
        orangered: '#ff4500',
        light: '#f5f5f5',
        cover: 'rgb(20, 20, 20)',
      },
    },
    screens: {
      '1030': {'max': '1030px'},
      '800': {'max': '800px'},
      '768': {'max': '768px'},
      '730': {'max': '730px'},
      '600': {'max': '600px'},
      '500': {'max': '500px'},
      '400': {'max': '400px'},
      '360': {'max': '360px'},
    }
  },
  plugins: [],
}
