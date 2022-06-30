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
      '1030px': {'max': '1030px'},
      '900px': {'max': '900px'},
      '800px': {'max': '800px'},
      '768px': {'max': '768px'},
      '730px': {'max': '730px'},
      '600px': {'max': '600px'},
      '500px': {'max': '500px'},
      '400px': {'max': '400px'},
      '360px': {'max': '360px'},
    },
    borderRadius :{
      'blob': '30% 70% 65% 35% / 30% 29% 71% 70%',
    },
  },
  plugins: [],
}