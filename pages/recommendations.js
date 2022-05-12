export default function Recommendations() {
    return (
        <div>
            <h1 className="text-center text-3xl md:text-5xl mb-3 md:mb-5 font-semibold text-primary-900">
                Recommendations
            </h1>
            <p className="text-sm text-gray-700 text-center">What I think are the best places to learn things, sorted by subject. </p>

            <h2 className="md:text-2xl text-xl text-accent-900 font-semibold">Biology</h2>
            <ul className="m-4 list-disc">
                <li><b>General Biology</b>: This is pretty standard, but I think Campbell Biology is the be all end all resource for this. </li>
                <li><b>Biochemistry</b>: Lehninger's Biochemistry wins for its engaging text and wonderful presentation. One of my favorite textbooks!</li>
                <li><b>Cell Biology</b>: Albert's Molecular Biology of the Cell. Wonderfully detailed, nice figures, and is the standard text for this stuff. Also, the covers don't miss.</li>
                <li><b>Genetics</b>: Griffith's Introduction to Genetic Analysis. Many quality problems and solutions in this book. Another equivalent textbook (which I think is more theory heavy) is Brooker's Genetics, which I've also read. </li>
                <li><b>Physiology</b>: Guyton and Hall Medical Physiology takes the cake. It's organized into many short chapters, and has a very comfortable layout and is a standard in the medical world for good reason. My absolute favorite biology related textbook.</li>
                <li><b>Plant Biology</b>: Plant Physiology and Devlopment by Taiz. A very good source on plant physiology, much better than Raven's Biology of Plants for relevant material.</li>
                <li>The Made Easy series of medical books are also really good, they present just the critical information and have really fun diagrams!</li>
            </ul>

            <h2 className="md:text-2xl text-xl text-accent-900 font-semibold">Math</h2>
            <ul className="m-4 list-disc">
                <li><b>Algebra</b>: Dummit and Foote. Incredibly detailed, will take you through undergraduate and graduate algebra.</li>
                <li><b>Linear Algebra</b>: Hoffman and Kunze. Covers the essentials and advanced linear algebra topics, which are more abstract. Has a wonderful chapter on determinants.</li>
                <li><b>Analysis</b>: Pugh's Real Mathematical Analysis is a great book with good figures. Rudin is also good, if not dry. For complex analysis, Brown and Churchill's Complex Variables and Applications is good. </li>
                <li><b>Differential Geometry</b>: Lee's Smooth Manifolds is jam packed with content and written very well. Has a nice appendix of the prerequisite content.</li>
                <li><b>Algebraic Geometry</b>: Igor and Sophie Kriz's Introduction to Algebraic Geometry is great! Neat presentation and exposition. Also check out the Rising Sea by Ravi Vakil.</li>
                <li><b>Enumerative Combinatorics</b>: Stanley's Enumerative Combinatorics (both volumes) are the gold standard for enumerative combinatorics, as they're full of insightful problems, 
                    instructive proofs, and a wide breadth of content.</li> 
                <li><b>Algebraic Combinatorics</b>: A combination of Stanley with some book on Matroid theory, like Welsh's Matroid Theory, should be good. Maybe look at the below bullet point too.</li>
                <li><b>Polyhedral Geometry</b>: Ziegler's Lectures on Polytopes is a great book, it's written in a conversational and casual style and is full of diagrams. Wonderful exposition.</li>
                <li><b>Topology</b>: Crossley's Essential Topology covers a great foundation in topology and algebraic topology in a little over 200 pages. With nice explanations and the perfect content
                distribution to tackle higher level subjects or head into research, this is a must have.</li>
                <li><b>Algebraic Number Theory</b>: Jarvis is a great introduction, provided you're familiar with classical number theory already.</li>
                <li><b>Problem Books</b>: Larson's Problem Solving Through Problems, Titu's Putnam and Beyond and Problems From the Book, and the classic Problem Solving Strategies by Engel are wonderful problem books aimed specifically
                at competitions but are worth checking out by every mathematician.</li>
            </ul>
            <h2 className="md:text-2xl text-xl text-accent-900 font-semibold">Computer Science</h2>
            <ul className="m-4 list-disc">
                <li><b>Algorithms</b>: CLRS! The best book out there on algorithms covering a wide expanse of content and being mathematically sound. Great book.</li>
                <li><b>Combinatorial Optimization</b>: the above field but more mathematically rigorous. I'd recommend reading Papadimitriou's title of the same name. It's a gem!</li>
                <li><b>Machine Learning</b>: Shaylev-Schwartz Understanding Machine Learning. Mathematically rigorous and covering supervised, unsupervised, and reinforcement learning, this is a great introduction to formal machine learning theory at the graduate level.</li>
                <li><b>Computer Vision</b>: Prince's Computer Vision. Color diagrams, quality printing, and a strongly Bayesian focus with a wide array of content make this the ideal resource for computer vision. </li>
            </ul>

            <h2 className="md:text-2xl text-xl text-accent-900 font-semibold">Physics</h2>
            <ul className="m-4 list-disc">
                <li><b>Mechanics</b>: Morin. Great introduction and gives you most of the math you need to know. Has really insightful problems.</li>
                <li><b>Electricity and Magnetism</b>: Purcell. The chapter on magnetism, where he derives it using relativity, is legendary, and there are tons of quality problems. Griffith's is also a standard text.</li>
                <li><b>Thermodynamics</b>: Blundell and Blundell's Concepts in Thermal Physics is great! It covers a lot of content past the core of kinetic molecular theory, classical thermodynamics, and statistical mechanics as cool extra chapters. </li>
                <li><b>Quantum Mechanics</b>: Shankar. Applicable at the undergraduate and graduate levels (you can skip the harder graduate topics without loss of continuity, and they're labelled), with great mathematical foundations.</li>
                <li><b>Astrophysics</b>: Carol and Ostile. The BOB really does hold up as a great book on astrophysics, covering everything you'll need!</li>
                <li><b>Control Theory</b>: Feedback Systems by Åström and Murray.</li>
            </ul>

        </div>
    )
}