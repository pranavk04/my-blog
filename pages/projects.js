export default function Projects() {
	function PLink(props) {
		return (
			<>
				<b><a className="text-lg text-primary-600 hover:text-primary-400" href={props.src}>{props.title}</a></b>
				<hr className="my-2"/>
				<p className="text-sm">{props.children}</p>
			</>
		)
	}
	return (
		<div className='space-y-4'>
			<h1 className="md:text-5xl text-3xl text-primary-900 font-semibold text-center">Projects</h1>
			<p className="text-gray-700 text-center">These are my projects, both research and personal.</p>

			<ul className='list-disc space-y-2 m-4'>
				<li>
					<a className="text-primary-600 hover:text-primary-400 text-lg" href='/abstract.pdf'><b>NASA SPEARS 3D Microscope</b></a>
					<hr className="my-2" />
					<p className="text-sm">This is my abstract for my research internship at NASA Ames. I created a machine-learning based data quality evaluator and am working on segmenting the data into distinct regions. I also reimplemented prototyped MATLAB 3D reconstruction algorithms into performant C++ code for use on embedded hardware. You can read more about the SPEARS 3D microscope project <a href="https://www.researchgate.net/profile/Uland-Wong/publication/334077660_Miniature_3D_Microscope_and_Reflectometer_for_Space_Exploration/links/5f7d9b6192851c14bcb38f3d/Miniature-3D-Microscope-and-Reflectometer-for-Space-Exploration.pdf" className="text-primary-600 visited:text-purple-400 hover:text-primary-400">here</a>.</p>
				</li>

				<li>
					<PLink src='https://github.com/pranavk04/VNParser' title='Visual Novel Parser'>
						This is a currently in-progress Windows application written as a standalone program which uses a custom extension written for the popular <a className="visited:text-purple-400 hover:text-primary-400 text-primary-600" href="https://github.com/Artikash/Textractor">Textractor </a>	
						text extraction engine for Japanese visual novels. It parses the sentences displayed in the game and provides definitions, parts of speech, and readings for each word. It also provides a machine translation. It connects with Anki, a popular flashcard application, allowing the user to create flashcards based on the words extracted from in-game text. I'm mainly making this for myself, because I enjoy having a mouseover dictionary 
						when reading Japanese online, and want to emulate that function for games in a cohesive application while trying my hand at developing a desktop application. Written in C++. 
					</PLink>
				</li>

				<li>
					<PLink src='https://github.com/pranavk04/VNParser-scripts' title='VNParser Scripts'>
						These are the dictionary lookup scripts for the above project. They're in a separate repository since their development is largely orthogonal to the main project, 
						as it only taps into them through an integration. 
					</PLink>
				</li>

				<li>
					<PLink src='https://github.com/pranavk04/Risk-Taking-Survey' title='Risk Taking Survey'>
						This is the code for my research project through the Duke Summer Session in neuroscience research methods. Using data gathered from a Qualtrics survey on risk taking and age, I 
						demonstrated a weak correlation between age and risk-taking, using a custom weighted-average metric to give each survey response a scalar "propensity to engage in risky behavior" value. 
					</PLink>
				</li>

				<li>
					<PLink src='https://github.com/pranavk04/frc-database-project' title='FRC Database'>
						This is the code for the database I wrote for my FIRST Robotics Team to use for parts management. It has both a command line and GUI interface, and is written in C++ using SFML. It uses various python scripts to sync with the cloud on write and read, so multiple users can use the application at the same time. 
					</PLink>
				</li>

				<li>
					<PLink src='https://github.com/pranavk04/tag' title='Tag!'>
						This is the code for a game I wrote back in middle school, tag. It was originally written in Javascript on Khan Academy (where I learned how to program games), but I ported to C++ during 9th grade as a way to learn the language. It's written in SFML. 
					</PLink>
				</li>

				<li>
				</li>
			</ul>

		</div>
	)
	
}