import Footer from './footer'
import NavBar from './navbar'
import SideNav from './sidenav'

export default function layout({ children }) {
	return (
		<div className="flex justify-center min-h-screen">
			<div className='px-10 py-5 w-full max-w-screen-xl'>
				<NavBar />
				<div className='my-2' />
				<div className='grid grid-cols-1 gap-y-8 sm:grid-cols-3 md:grid-cols-4 gap-x-10'>
					<div className='order-first'>
						<SideNav />
					</div>
					<div className='sm:col-span-2 md:col-span-3'>
						<div className='p-10 rounded-xl border space-y-10'>
							<main>{children}</main>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
