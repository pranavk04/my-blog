import * as React from 'react'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

import Navbar from '../components/navbar'
import footer from '../components/footer'

const App = ({ Component, pageProps }) => {
  return (
    <div>
    <Navbar />
    <Component {...pageProps} />
    <footer />
    </div>
  )
}

export default App
