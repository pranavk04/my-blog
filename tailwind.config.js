const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['Avenir', 'Helvetica'], 
    }, 
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.accent.700'),
              textAlign: 'center',
              letterSpacing: theme('letterSpacing.tight'),
              fontWeight: '700',
            },
            h2: {
              color: theme('colors.accent.900'), 
              letterSpacing: theme('letterSpacing.tight'), 
              fontWeight: '700',
            },
            h3: {
              color: theme('colors.accent.500'),
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            }
          },
        },
      }),
    colors: {
      // primary: colors.brown,
      // accent: colors.fuchsia,
      primary: colors.sky, // 800 weight is what we want
      accent: colors.rose,  // 100 weight is what we want 
      // secondary: '#fdf6e3',
      secondary: colors.emerald, 
      highlight: colors.purple,
      gray: colors.trueGray,
    }, 
    },
    lineHeight: {
      11: '2.75rem', 
      12: '3rem', 
      13: '3.25rem', 
      14: '3.5rem', 
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
