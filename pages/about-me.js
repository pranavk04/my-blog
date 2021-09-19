import Link from 'next/link'

export default function AboutMe() {
	return (
		<div className="space-y-4">
			<h1 className="font-semibold text-primary-900 mb-4 text-center text-5xl"> About Me</h1>

			<p>Hi there! I'm Pranav, and I'm currently a senior in High School. I love learning about biology, math, and computer science, writing, and making new friends! Feel free to shoot me a message on Discord if you'd like to talk, since I'm quickest reached there.</p>

			<p>I also very much enjoy music: I play two instruments, the piano and <a href="https://wikipedia.com/wiki/Venu" className="text-accent-500"><u>Carnatic flute</u></a> (also known as the <i>venu</i>). </p>

			<h2 className="font-semibold text-primary-800 mb-2 text-3xl">Biology</h2>
			<p>Biology has been my main fascination for as long as I can remember. My favorite areas are physiology and molecular biology, but I'm getting more interested in phylogenetics due to the ways it uses math. I've competed in contests such as the USABO (where I've been a semifinalist) and Science Olympiad, where I competed in events like Anatomy and Physiology, Protein Modeling, Designer Genes, and others. My favorite species is <i>Pyrococcus furiosus</i> because it has Tungsten in its proteins and lives in 140 degree water. My favorite plant family is <i>Cucurbitaceae</i> because I grow a lot of them and they taste good!</p>
			<h2 className="font-semibold text-primary-800 mb-2 text-3xl">Math</h2>
			<p>Algebra is my favorite (and best!) math subject, and I'm currently trying to learn Algebraic Geometry. I also enjoy Enumerative Combinatorics and Complex Analysis. In contest math, I enjoy Combinatorics and Olympiad Geometry. I've competed in contests like AIME, PuMAC, and DMM. I've taken multiple graduate math courses at my local university, and enjoyed all of them. I also find LaTeX to be cool and like writing class files with good design. </p>
			<h2 className="font-semibold text-primary-800 mb-2 text-3xl">Computer Science</h2>
			<p>My main interests lie in Computer Vision, Machine Learning, Game Development, and Web Development. I've programmed for my FIRST Robotics Team, done contests like USACO and CodeForces, and done reasearch at the NASA Ames Research Center. I also enjoy technology in general, and I'm always reading about the latest and greatest in computer hardware. </p>
			<h2 className="font-semibold text-primary-800 mb-2 text-3xl">Others</h2>
			<p>I'm a huge anime and manga fan, and know way too much about that stuff. I know Japanese (I can read and listen much better than I can speak), so I enjoy reading Light Novels and Manga in their original format. I also like listening to J-Pop. </p>

			<p>My other favorite genres of music are classical music and melodic death metal. I like to garden, and I have a whole <Link href="/garden"><a>page</a></Link> about it! I've messed around with physics and chemistry, but not that deeply. I do find thermodynamics to be pretty cool though. I also know how to solve a variety of Rubik's cubes, specifically 2x2-6x6, Square 1, Skewb, Megaminx, and Pyraminx. I also love playing rhythm games and watching NBA basketball. </p>
		</div>
	)
}
