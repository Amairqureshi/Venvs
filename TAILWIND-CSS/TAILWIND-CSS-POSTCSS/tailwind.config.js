module.exports = {
  purge: {
    content:[ './public/**/*.html']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {

      fontFamily: {
        'Questrial': 'Questrial',
        'Didot': 'Didot',
        'Montserrat' :'Montserrat',
       },

      colors: {
       venvs: {
        vsgreen: '#B8C2BB',
        vsgray: '#3A342E',
        vsligray: '#EBEBEB',
        vslibrown: '#E4DFD7',
        }

        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
