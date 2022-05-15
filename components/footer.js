import Link from 'next/link'

function Footer() {
	return (
		<div className="mt-20">
			<div className="mt-auto mx-auto">

				<div className="mx-auto max-w-3xl text-sm md:text-base content-center text-center gap-4">
					 <p>Pranav Konda. Contact me <Link href='/contact'><a className="underline text-primary-400">here</a></Link>, or view the source repository <Link href='https://github.com/pranavk04/my-blog'><a className='underline text-primary-400'>here</a></Link>.</p>
				</div>
			</div>
		</div>
	)
}

export default Footer;
