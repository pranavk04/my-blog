import Link from 'next/link'

function Footer() {
	return (
		<div className="mt-20">
			<div className="bg-black mt-auto mx-auto px-4 py-8">

				<div className="mx-auto max-w-3xl content-center text-center text-white grid grid-cols-4 gap-4">
					<div className="font-semibold text-xl">Pranav</div>
					<div className="font-semibold text-xl">Resources</div>
					<div className="font-semibold text-xl">Tech</div>
					<div className="font-semibold text-xl">Writing</div>

					<div>About Me</div>
					<div>Handouts</div>
					<div>Website</div>
					<div>Blog</div>

					<div>CV</div>
					<div>Lectures</div>
					<div>Projects</div>
					<div>Ratings</div>
					
					<div>Contact</div>
					<div>Guides</div>
					<div>Configs</div>
					<div>Suggest</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;
