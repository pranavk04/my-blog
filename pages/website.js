export default function Website() {
	return (
		<div className="space-y-4">
			<h1 className="md:text-5xl text-3xl text-primary-900 font-semibold text-center">Website</h1>
			<p className="text-gray-700 text-center">A log of this website's maintenance and development.</p>

			<p>This website was created with a stack of React JS, Next JS, and TailwindCSS. Hosting is done by Vercel, with the domain on Namecheap.</p>
			<h2 className="font-semibold text-primary-800 text-2xl md:text-3xl">Features</h2>

			<ul className="space-y-2">
				<li><b>Blog Posts:</b> these are written in markdown. Using <tt>next-mdx-remote</tt>, the markdown files are fetched from a directory and transformed into HTML content. Tailwind provides very sensible defaults for CMS content with its <tt>prose</tt> class, which is employed for posts. Further styling of markdown content is done within the <tt>tailwind.config.js</tt> file through their typography module.</li>

				<li><b>Blog Search:</b> this is done by a JSON request API, which fetches all the post data and sends it to the search component, where resulting matches to the query are mapped to a list of possible posts using the blog post component. </li>
				<li><b>Blog Post Comments:</b> these are powered by <a className="text-accent-500" href="https://github.com/maggie-j-liu/reactive"><u>Reactive</u></a>, a wonderful widget for adding both comments and reactions to your site via Firebase. I wholeheartedly recommend this if you're looking for an easy way to embed comments into your own site. </li>

			</ul>
		</div>
	)
}

