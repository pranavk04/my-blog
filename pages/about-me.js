import Link from 'next/link'

export default function AboutMe() {
	return (
		<div className="space-y-4">
			<h1 className="font-semibold text-primary-900 mb-4 text-center text-5xl"> About Me</h1>

			<p>Hey, I'm Pranav. I'm currently 17 and a senior in high school. I really like molecular biology, math, computer science, linguistics (and learning new languages!), writing, anime, and music.</p>

			<h2 className="font-semibold text-accent-900 mb-2 text-xl">Academics</h2>
			<p>
				I'm particularly interested in systems biology and the world of proteins. 
				My favorite species is <i>Pyrococcus furiosus</i>, because it
				has tungsten in its enzymes (which is very rare), and has a name meaning "rushing fireball". 
				In terms of competitions, I competed in Science Olympiad throughout 
				high school, in Anatomy & Physiology, Protein Modeling, Designer Genes, and Disease Detectives, and was a 
				USABO semifinalist multiple times.
			</p>

			<p>
				Mathematically my interest currently lies in combinatorics. I've also had experience with analysis and linear algebra. 
				I owe a lot to competitive math in helping me discover my love for the subject. 
				I qualified for the AIME multiple times, have written a couple handouts, and I serve as a staff member in 
				organizations such as CNCM and MAST. 
			</p>
			<p>
				Programming games was my first experience with computer science. 
				I've worked a lot with computer vision and its uses, such as my research at NASA 
				and our vision systems in FRC robotics. I'm also interested in machine learning and neural networks, particularly
				in their biological applications. 
			</p>

			<h2 className="font-semibold text-accent-900 mb-2 text-xl">Others</h2>
			<p>I'm an avid anime, manga, and light novel enjoyer (I taught myself Japanese in order to read these without waiting for translations), and 
				I'm also really into stationery, computer hardware, RPGs, and adventure games. I also play two instruments, the Carnatic flute and piano. 
				I'm a former cuber and origami-ist as well. I also like to draw, although I'm not very good at it. I find writing quite enjoyable, and 
				hope to do more of it on this website. 
			</p>
		</div>
	)
}
