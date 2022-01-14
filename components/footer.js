import Link from 'next/link'

function Footer() {
	return (
		<div className="mt-20">
			<div className="mt-auto mx-auto px-4 py-8">

				<div className="mx-auto max-w-3xl content-center text-center grid grid-cols-4 gap-4">
					<div className="font-semibold text-xl">Pranav</div>
					<div className="font-semibold text-xl">Resources</div>
					<div className="font-semibold text-xl">Tech</div>
					<div className="font-semibold text-xl">Writing</div>

					<div><Link href="/about-me"><a>About Me</a></Link></div>
					<div><Link href="/handouts"><a>Handouts</a></Link></div>
					<div><Link href="/website"><a>Website</a></Link></div>
					<div><Link href="/blog"><a>Blog</a></Link></div>

					<div>CV</div>
					<div><Link href="/lectures"><a>Lectures</a></Link></div>
					<div><Link href="/projects"><a>Projects</a></Link></div>
					<div><Link href="/ratings"><a>Ratings</a></Link></div>
					
					<div><Link href="/contact"><a>Contact</a></Link></div>
					<div><Link href="/guides"><a>Guides</a></Link></div>
					<div><Link href="/configs"><a>Configs</a></Link></div>
					<div><Link href="/suggest"><a>Suggest</a></Link></div>
				</div>
			</div>
		</div>
	)
}

export default Footer;
