import Link from 'next/Link'
import Image from 'next/image'
function Home() {
	return (
		<div className='space-y-4'>
			<h1 className="text-center text-primary-900 mb-4 font-semibold text-3xl md:text-5xl tracking-tight">Hi! I'm Pranav! </h1>
			<p className="text-gray-700 text-center">Welcome!</p>

			<p>This is my site and blog. The navigator on the side can be used to access every major page on this site. You'll find my writing, projects, reviews (mostly stationery and games), and recommendations (textbooks). </p>
			<p>The website page is a development log, and the tech page is about guides for technical things, like setting up vim, and also contains my setups. </p>
		</div>
	);
}

export default Home;
