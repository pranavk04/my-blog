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
			<h1 className="md:text-5xl text-3xl text-primary-900 font-semibold text-center">Links</h1>
			<p className="text-gray-700 text-center">The various organizations and groups listed below are ones I think you should really check out!</p>

			<ul className='list-disc space-y-2 m-4'>
                <li>
                    <PLink src='https://cncmath.org' title='CNCM'>
                    CNCM is a nonprofit organization dedicated to spreading its love for math to students all across the globe. We run contests, both online and in-person, such as our CNCM Online contest (which has been particularly well received). 
                    We also run a problem of the day mini-contest in our Discord server, which has over 2000 members. 
                    </PLink>
                </li>

                <li>
                    <PLink src='https://inspirenc.us' title='InspireNC'>
                        InspireNC is a nonprofit which works to spread STEAM throughout the Wake county area in North Carolina. If you're interested in programming or robotics, we'd love to have you! We also work to bring engagement opportunities to local children, so if you're interested in working with us, you can contact us at our website. 
                    </PLink>
                </li>

                <li>
                    <PLink src='https://mast.mathadvance.org' title='MAST'>
                        MAST is an organization focused on training its students for the American Invitational Mathematics Examination. We don't charge a fee at the moment, and the application consists of a problemset (designed to gauge readiness for our program) and an essay. We have a fantastic community of wonderful students, so if you'd like to train for the AIME, apply to MAST!
                    </PLink>
                </li>

                <li>                
					<PLink src='https://biologycompetition.org' title='American Regional Biology Competition'>
                        The American Regional Biology Competition (ARBC) is a team based biology competition designed for students to test their knowledge of life science. We operate in-person, using a regions-based system. Check us out, and if there's a region nearby, compete!
                    </PLink>
                </li>
            </ul>

		</div>
	)
	
}