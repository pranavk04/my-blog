<script lang="ts">
	import ProjectLink from '$lib/components/plink.svelte';
</script>

<div class='space-y-4'>
	<h1 class="md:text-5xl font-heading text-3xl font-black text-center">Projects</h1>
	<p class="text-gray-700 text-center">These are my projects, both research and personal.</p>

	<p>The work I've done below is a mix of mathematics and programming. You can click the names of the
projects below to view technical documents or source code when applicable. 
	</p>
	<ul class='list-disc space-y-2 m-4'>
		<li>
			<ProjectLink src="/dev-log" title="This site">
				Click here for a development log of this website and to see what sorts of changes have happened over time.
			</ProjectLink>
	</li>
	<li>
		<ProjectLink src="/projects" title="Khovanov Homology and Quantum Error Correction">
			This project was done through the Columbia mathematics REU, under Professor Rostislav Akhmechet, 
			and supported by both the math department and the I. I. Rabi Scholars program at Columbia. Khovanov 
			Homology is a powerful invariant in knot theory that categorifies the Jones polynomial of a link diagram, and 
			we used it to investigate families of homological CSS codes arising from quantum error theory.	
		</ProjectLink>
	</li>
		<li>
			<ProjectLink src="/lubin-tate.pdf" title="Lubin Tate Theory and the Local Kronecker-Weber
Theorem">
	This is an expository paper I wrote on Lubin-Tate formal groups, which provide an elementary way
to prove the theorems known as "local class field theory," which are usually proven by using
cohomological methods. 
			</ProjectLink>
		</li>
		<li>
	<ProjectLink src="/knot.pdf" title="Grid Diagrams of Knots">
		This is a short expository paper I wrote on the grid diagrams of topological knots, and a simple
	way to compute the Wirtinger presentation (a presentation of the fundamental group of the knot
		complement, which is a very strong invariant). 
	</ProjectLink>
	</li>
		<li>
			<ProjectLink src="/abstract.pdf" title='NASA SPEARS 3D Microscope'>	
				This is the abstract for the research I counducted through my internship at NASA Ames. I created a machine-learning based data quality 
				evaluator and am working on segmenting the data into distinct regions. I also reimplemented prototyped MATLAB 3D 
				reconstruction algorithms into performant C++ code for use on embedded hardware. You can read more about the SPEARS 3D microscope project
				<a
href="https://www.researchgate.net/profile/Uland-Wong/publication/334077660_Miniature_3D_Microscope_and_Reflectometer_for_Space_Exploration/links/5f7d9b6192851c14bcb38f3d/Miniature-3D-Microscope-and-Reflectometer-for-Space-Exploration.pdf"
class="text-primary-600 visited:text-primary-400 hover:text-primary-400">
					here.
				</a>
			</ProjectLink>
	</li>
		<li>
		<ProjectLink src="/diffusion-models.pdf" title="Deep Learning & Protein Allostery">
				I did some research at the Glasgow Lab at the Columbia University Medical Center during
my freshman year on diffusion models in deep learning for protein allostery. This was funded by the
I.I Rabi Scholars Program at Columbia. Attached is my poster that I presented at the Undergraduate
Research Symposium at Columbia.
			</ProjectLink>
		</li>
		<li>
		<ProjectLink src="/projects" title="Young Tableaux, Representation Theory, and Algebraic Flag
Varieties">
			I studied Young Tableaux, a combinatorial object, and their applications to representation
theory of the general and special linear groups and some of their applications to flag varities in
	algebraic geometry. Done through the Directed Reading Program at Columbia. I then gave a talk on
the RSK correspondence and its applications.
	</ProjectLink>
	</li>
		<li>
			<ProjectLink src='https://github.com/pranavk04/sagashi' title='Sagashi'>
				This is an in-progress command line utility which provides sentence parsing, dictionary lookup, and Anki (a popular flashcard program) 
				integration for the study of the Japanese language. I've mainly implemented this for myself, as having a CLI utility enables scripting 
				with other handy programs, such as an accessory script I wrote in Python to get text in images via OCR. Perfect for studying any kind of media! 
				Written in C++.
			</ProjectLink>
		</li>

		<li>
			<ProjectLink src='https://github.com/pranavk04/ftex' title='F(ast)TeX'>
				A lightweight and minimal language-spec and transpiler written around LaTeX to make taking short notes much much faster. By simplifying syntax with user customization, 
				one is able to focus solely on the math (or anything) at hand. Planned support for slides with beamer. Written in C++. 
			</ProjectLink>
		</li>
		<li>
			<ProjectLink src='/poset.pdf' title="Partially Ordered Sets (Posets)">
			These are the slides from a talk I gave to high school students on introducing partially
ordered sets and associated combinatorial problems with them, including graded posets.
	</ProjectLink>
	</li>
		<!-- <li>
			<ProjectLink src='https://github.com/pranavk04/frc-database-project' title='FRC Database'>
				This is the code for the database I wrote for my FIRST Robotics Team to use for parts management. 
				While the main program is a command line utility, there is a GUI implementation as well. 
				It uses various python scripts to sync with the cloud on write and read, so multiple users can use the application at the same time. 
				Written in C++, with the GUI done using SFML, a lightweight C++ GUI library. 
			</ProjectLink>
		</li>

		<li>
			<ProjectLink src='https://github.com/pranavk04/tag' title='Tag!'>
				This is the code for a game I wrote back in middle school, tag. It was originally written in Javascript on Khan Academy 
				(where I have fond memories of programming games), but I ported it to C++ during 9th grade as a way to learn the language. 
				It's written in SFML as well.
			</ProjectLink>
		</li> -->

	</ul>

</div>
