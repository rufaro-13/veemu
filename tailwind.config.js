/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navcolour':'	#0e7490',
        'pinktheme':'#ff1493',
        'bluetheme':'#87c0e6',
        'red':'#ff0000',
        'greentheme':'#32a852',
        'yellowtheme':'#FFD700'
      },

      backgroundImage: {
        'hero_pattern': "url('/src/images/close-up-senior-couple-holding-hands.jpg')",
        'team_work':"url('/src/images/older-man-wheelchair-smiles-nurse-assistant-she-hands-him-glass-water.jpg')",
        
      },

      fontFamily: {
        //'sans': ['Proxima Nova'],
        'cursive':['Lucida Handwriting'],
        'malanya':['malanya'],
      }
    },
    
  },
  plugins: [require('flowbite/plugin')],
}

