import Footer from './footer'
import NavBar from './navbar'

export default function layout({ children }) {
	return (
		<div className="flex flex-col justify-between h-screen">
			<NavBar />
			<main className="content-center max-w-sm md:max-w-2xl mx-auto mb-auto">{children}</main>
			<Footer/>
		</div>
	)
}
