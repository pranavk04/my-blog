import Footer from './footer'
import NavBar from './navbar'

export default function layout({ children }) {
	return (
		<div className="flex flex-col justify-between h-screen">
			<NavBar />
			<main className="mb-auto">{children}</main>
			<Footer />
		</div>
	)
}
