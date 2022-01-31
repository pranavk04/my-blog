import Link from "next/link";
import { getSortedTech } from "../../lib/tech";


import BlogPost from '../../components/blog-post'

const BlogIndex = ({ allTechData }) => {

	return (
		<div>
			<div className="">
		<h1 className="text-center text-3xl md:text-5xl mb-3 md:mb-5 font-semibold text-primary-900">Tech</h1>
			</div>
	
		<div>
			<p> 
				Here you'll find descriptions of my configurations for development, guides on things I think are important or cool, and discussions of the latest technological developments. 
			</p>

			
                <ul>
                    {allTechData.map(({slug, date, title, exerpt}) => (
                        <li
                            key={slug}
                            >
                                <Link
                                    href='/tech/[slug]'
                                    as={`/tech/${slug}`}
                                    >
                                    <a><BlogPost title={title} date={date} excerpt={exerpt} /></a>
                                </Link>
                            </li>
                        ))}
                </ul>
			</div>
		</div>
	);
};

export default BlogIndex;

export async function getStaticProps() {
	const allTechData = getSortedTech();

	return {
		props: {
			allTechData, 
		}, 
	}; 
}
