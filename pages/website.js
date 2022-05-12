export default function Website() {
	return (
		<div className="space-y-4">
			<h1 className="md:text-5xl text-3xl text-primary-900 font-semibold text-center">Website</h1>
			<p className="text-gray-700 text-center">A log of this website's maintenance and development.</p>

			<p>This website was created with a stack of React JS, Next JS, and TailwindCSS. I've made extensive use of <a className="text-primary-600" href="https://react-icons.github.io/react-icons"><code>react-icons</code></a> for the icons on the navgiation bar. </p>

			<h2 className="md:text-2xl text-xl text-accent-900 font-semibold">May 2022</h2>
			<ul className=" m-4 list-disc">
				<li>Redid my About Me, and the Recommendations page.</li>
			</ul>

			<h2 className="md:text-2xl text-xl text-accent-900 font-semibold">January 2022</h2>
			<ul className=" m-4 list-disc">
				<li>I revamped the site's UI completely, shifting from the obtuse navigation bar at the top to the side nav with icons. I kept the concept of the top bar, but removed the links and have just kept my GitHub and Discord icons there. </li>
				<li>I also started adding more pages, and cleaning up the unfinished ones.</li>
			</ul>
		</div>
	)
}

