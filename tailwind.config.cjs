/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      'heading': ['"Alegreya"'],
      'body': ['"Alegreya"']
    }, 
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            h1: {
              color: theme('colors.primary.950'),
              textAlign: 'center',
              letterSpacing: theme('letterSpacing.tight'),
              fontWeight: '800',
              fontFamily: '"Alegreya Sans"'
            },
            h2: {
              color: theme('colors.primary.900'), 
              letterSpacing: theme('letterSpacing.tight'), 
              fontWeight: '800',
              fontFamily: '"Alegreya Sans"'
            },
            h3: {
              color: theme('colors.neutral.900'),
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
      primary: colors.rose,
      // primary: colors.purple, // 800 weight is what we want
      accent: colors.teal,  // 100 weight is what we want 
      // secondary: '#fdf6e3',
      secondary: colors.cyan, 
      highlight: colors.purple,
      gray: colors.neutral,
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

