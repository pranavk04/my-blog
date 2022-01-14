export default function Resources() {

	function RLink(props) {
		return (
			<>
			<b><a className="text-primary-600 hover:text-primary-400 text-lg" href={props.src}>{props.title}</a></b>
			<hr className="my-2"/>
			<p className="text-sm">{props.children}</p>
			</>	
		)
	}
	return (
		<div className="space-y-4">
			<h1 className="md:text-5xl text-3xl text-primary-900 font-semibold text-center">Resources</h1>
			<p className="text-gray-700 text-center">These are resources that I have made, hopefully they're helpful! At the moment, all of them are math related.</p>

			<p>Below you'll find links to various files or videos, with accompanying descriptions. Click the title to view them.</p>

			<ul className="m-4 list-disc space-y-2">
				<li><RLink title="Burnside's Lemma" src="https://cncmath.org/lectures/Burnside's%20Lemma">
				This was done for CNCM. You'll find both the handout (a PDF file) and a link to a YouTube lecture. I go into deriving 
				Burnside's lemma and then applying it, so there is a lot of group theory (specifically orbits, stabilizers, and group actions) but you can safely skip the derivation and learn to use Burnside's just fine. 
				</RLink></li>

				<li><RLink title="Euclidean Algorithm" src="https://cncmath.org/lectures/Euclidean%20Algorithm%20and%20Bezout's%20Identity">
					This was done for CNCM. There's a handout and a video, which cover the Euclidean Algorithm, Bézout's Identity, and other number theory topics with examples. 
				</RLink></li>

				<li><RLink title="Complex Analysis: Contour Integration" src="https://cncmath.org/lectures/Contour%20integration%20and%20the%20Fundamental%20Theorem%20of%20Algebra">
					This was done for CNCM. There's just a video at the moment, I have to find the handout file. Prerequisites wise, knowing regular integration is necessary, and familiarity with multivariable calculus is helpful, but not needed. I do some fun stuff at the end like proving the Fundamental Theorem of Algebra though!
					</RLink></li>

				<li><RLink title="Real Analysis Notes" src="https://github.com/pranavk04/analysis_real">
					These are my notes from when I took Real Analysis in the fall of 2020. They're typeset in LaTeX. They're not very rigorous, and the beginning sections are not that complete, but they do cover most introductory analysis topics. I am working on writing a much more comprehensive introduction to analysis with my friends at Math Advance! though, so stay peeled for that! 
					</RLink></li>
			</ul>
		</div>
	)
}

