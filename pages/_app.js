import * as React from 'react'
import 'tailwindcss/tailwind.css'

import Layout from '../components/layout'

const App = ({ Component, pageProps }) => {
  return (
    <div>
			<Layout>
				<Component {...pageProps} />
			</Layout>
    </div>
  )
}

export default App
