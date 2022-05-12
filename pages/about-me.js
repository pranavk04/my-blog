import Link from 'next/link'

export default function AboutMe() {
	return (
		<div className="space-y-4">
			<h1 className="font-semibold text-primary-900 mb-4 text-center text-3xl md:text-5xl"> About Me</h1>

			<p className="text-center">Hi there, I'm Pranav! I'm a rising freshman at Columbia University.</p>

			<p>
				I'm particularly interested in biophysics and protein interaction. 
				I think deep learning approaches to the above are intriguing. 
			</p>
			<p>
				My favorite field of math is algebraic combinatorics. 
				I'm currently exploring number theory and algebraic geometry. 	
				I'm also involved with a few organizations aimed at math contest preparation, such as CNCM and MAST. 
			</p>
			<p>
				Programming games was my first experience with development. 
				I enjoy writing software that improves my daily life, and try to make everything open source. 
				I've worked a lot with computer vision and machine learning, and have a growing interest in natural language processing. 
			</p>

			<p>In no particular order, here are some other things about me:</p>			
			<ul className='list-disc space-y-2 m-4 ml-8'>
				<li>I play two instruments, the Carnatic flute and the piano.</li>
				<li>I like gardening, and by extension nature photography.</li>
				<li>My favorite kinds of video games are RPGs and adventure games.</li>
				<li>I like to collect over-engineered stationery. </li>
				<li>I'm also an avid anime, manga, and light novel enjoyer.</li>
				<li>I like learning languages. Going for my fifth one soon!</li>
			</ul>
		</div>
	)
}
