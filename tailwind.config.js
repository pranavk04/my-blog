const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'), 
            h1: {
              color: theme('colors.accent.700'),
              textAlign: 'center',
              letterSpacing: theme('letterSpacing.tight'),
              fontWeight: '700',
            },
            h2: {
              color: theme('colors.accent.600'), 
              textAlign: 'center',
              letterSpacing: theme('letterSpacing.tight'), 
              fontWeight: '700',
            },
            h3: {
              color: theme('colors.accent.500'),
            }

          },
        },
      }),
    },
    lineHeight: {
      11: '2.75rem', 
      12: '3rem', 
      13: '3.25rem', 
      14: '3.5rem', 
    }, 
    colors: {
      primary: colors.blue, // 800 weight is what we want
      accent: colors.rose,  // 100 weight is what we want 
      secondary: colors.emerald, 
      highlight: colors.purple,
      gray: colors.trueGray,
    }, 
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
