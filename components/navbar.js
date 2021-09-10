import Link from 'next/link'

function Navbar() {
	return (
		<div>
			<div>
					<Link href='/'>
						<a><h1>Home</h1></a>
					</Link>

					<Link href='/blog'>
						<a><h1>Blog</h1></a>
					</Link>


					<Link href='/about-me'>
						<a><h1>About Me</h1></a>
					</Link>

					<Link href='/resources'>
						<a ><h1>Resources</h1></a>
					</Link>
			</div>
		</div>
	)
}

export default Navbar;
