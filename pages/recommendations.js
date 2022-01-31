export default function Recommendations() {
    return (
        <div>
            <h1 className="text-center text-3xl md:text-5xl mb-3 md:mb-5 font-semibold text-primary-900">
                Recommendations
            </h1>
            <p className="text-sm text-gray-700 text-center">What I think are the best places to learn things, sorted by subject. </p>

            <h2 className="md:text-2xl text-xl text-accent-900 font-semibold">Biology</h2>
            <ul className="m-4 list-disc">
                <li>General Biology: This is pretty standard, but I think Campbell Biology is the be all end all resource for this. </li>
                <li>Biochemistry: Lehninger's Biochemistry wins for its engaging text and wonderful presentation. One of my favorite textbooks!</li>
                <li>Cell Biology: Albert's Molecular Biology of the Cell. Wonderfully detailed, nice figures, and is the standard text for this stuff. Also, the covers don't miss.</li>
                <li>Genetics: Griffith's Introduction to Genetic Analysis. Many quality problems and solutions in this book. Another equivalent textbook (which I think is more theory heavy) is Brooker's Genetics, which I've also read. </li>
                <li>Physiology: Guyton and Hall Medical Physiology takes the cake. It's organized into many short chapters, and has a very comfortable layout and is a standard in the medical world for good reason. My absolute favorite biology related textbook.</li>
                <li>Plant Biology: Plant Physiology and Devlopment by Taiz. A very good source on plant physiology, much better than Raven's Biology of Plants for relevant material.</li>
                <li>Epidemiology: Gordis Epidemiology is a really good (and compact) book.</li>
                <li>The Made Easy series of medical books are also really good, they present just the critical information and have really fun diagrams!</li>
            </ul>

            <h2 className="md:text-2xl text-xl text-accent-900 font-semibold">Math</h2>
            <ul className="m-4 list-disc">
                <li>Algebra: Dummit and Foote. Incredibly detailed, will take you through undergraduate and graduate algebra.</li>
                <li>Linear Algebra: Hoffman and Kunze. Covers the essentials and advanced linear algebra topics, which are more abstract. Has a wonderful chapter on determinants.</li>
                <li>Analysis: Pugh's Real Mathematical Analysis is a great book with good figures. Rudin is also good, if not dry. For complex analysis, Brown and Churchill's Complex Variables and Applications is good. </li>
                <li>Differential Geometry: Lee's Smooth Manifolds is jam packed with content and written very well. Has a nice appendix of the prerequisite content.</li>
                <li>Algebraic Geomtry: Igor and Sophie Kriz's Introduction to Algebraic Geometry is great! Neat presentation and exposition. Also check out the Rising Sea by Ravi Vakil.</li>
                <li>Combinatorics: Stanley's Enumerative Combinatorics (both volumes) are the gold standard for enumerative combinatorics, as they're full of insightful problems, 
                    instructive proofs, and a wide breadth of content. For Matroid theory, I'd recommend Welsh's Matroid Theory. Written by one of the best, it has stood up to the test of time. For geometric
                    combinatorics I'd recommend Ziegler's Lectures on Polytopes (GTM 152), which has wonderful diagrams and is organized as a series of "lectures". 
                </li>
                <li>Topology: Crossley's Essential Topology covers a great foundation in topology and algebraic topology in a little over 200 pages. With nice explanations and the perfect content
                distribution to tackle higher level subjects or head into research, this is a must have.</li>
                <li>Algebraic Number Theory: Jarvis is a great introduction, provided you're familiar with classical number theory already.</li>
            </ul>
            <h2 className="md:text-2xl text-xl text-accent-900 font-semibold">Computer Science</h2>
            <ul className="m-4 list-disc">
                <li>Algorithms: CLRS! The best book out there on algorithms covering a wide expanse of content and being mathematically sound. Great book.</li>
                <li>Machine Learning: Shaylev-Schwartz Understanding Machine Learning. Mathematically rigorous and covering supervised, unsupervised, and reinforcement learning, this is a great introduction to formal machine learning theory at the graduate level.</li>
                <li>Computer Vision: Prince's Computer Vision. Color diagrams, quality printing, and a strongly Bayesian focus with a wide array of content make this the ideal resource for computer vision. </li>
            </ul>

            <h2 className="md:text-2xl text-xl text-accent-900 font-semibold">Physics</h2>
            <ul className="m-4 list-disc">
                <li>Mechanics: Morin. Great introduction and gives you most of the math you need to know. Has really insightful problems.</li>
                <li>Electricity and Magnetism: Purcell. The chapter on magnetism, where he derives it using relativity, is legendary, and there are tons of quality problems. Griffith's is also a standard text.</li>
                <li>Thermodynamics: Blundell and Blundell's Concepts in Thermal Physics is great! It covers a lot of content past the core of kinetic molecular theory, classical thermodynamics, and statistical mechanics as cool extra chapters. </li>
                <li>Quantum Mechanics: Shankar. Applicable at the undergraduate and graduate levels (you can skip the harder graduate topics without loss of continuity, and they're labelled), with great mathematical foundations.</li>
                <li>Astrophysics: Carol and Ostile. The BOB really does hold up as a great book on astrophysics, covering everything you'll need!</li>
                <li>Control Theory: Feedback Systems by Åström and Murray.</li>
            </ul>

        </div>
    )
}