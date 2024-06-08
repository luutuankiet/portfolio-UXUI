module.exports = {
  content: ["./**/*.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'cinemate-gradient': 'linear-gradient(91deg, #999F48 10.9%, #4F5128 51.47%, #0A0A0A 97.32%)',
        'karisma-gradient': 'linear-gradient(91deg, #9EAA90 10.9%, #333B2B 51.47%, #0A0A0A 97.32%)',
        'gotyme-gradient': 'linear-gradient(91deg, #8CAFAF 10.9%, #015F5E 37.66%, #0A0A0A 97.32%)',
      },

      colors: {
        'cinemate-light': '#EBECE0',
        'cinemate-strong': '#494C26',
        'karisma-light' : '#E6EDDD',
        'karisma-strong' : '#505B44',
        'gotyme-strong' : '#004A49',
      },

      padding: {
        'margin': '10%',
      },

      fontFamily: {
        'be-vietnam': ['"Be Vietnam Pro"', 'sans-serif'],
      },
    },
  },

  variants: {
    extend: {},
  },

  plugins: [],
};
