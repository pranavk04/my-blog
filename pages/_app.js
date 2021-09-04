import * as React from 'react'
import Head from 'next/head'

import theme from '../lib/theme'
import { ThemeProvider } from 'theme-ui'

import Navbar from '../components/navbar'
import footer from '../components/footer'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <footer />
    </ThemeProvider>
  )
}

export default App
