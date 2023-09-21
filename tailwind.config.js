/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}',
  'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'navcolour':'	rgb(147 197 253)',
        'pinktheme':'#ff1493',
        'bluetheme':'#87c0e6',
        'red':'#ff0000',
        'greentheme':'#32a852',
        'cards':'#89cff0',
        'yellowtheme':'#9E8604'
      },

      backgroundImage: {
        'hero_pattern': "url('/src/images/african-social-worker-helping-senior-woman.jpg')",
        'team_work':"url('/src/images/older-man-wheelchair-smiles-nurse-assistant-she-hands-him-glass-water.jpg')",
        'social':"url('/src/images/senior-women-celebrating-friendship-park.jpg')",
        'personal':"url('/src/images/adult-male-waiting-recovery-session-start.jpg')"
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

