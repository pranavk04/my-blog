import Link from "next/link";
import { getSortedPosts } from "../../lib/posts";

import BlogPost from '../../components/blog-post'

const BlogIndex = ({ allPostsData }) => {
	return (
		<div className="mx-20">
			<div className="text-center">
				<h1 className="text-5xl mb-5 font-semibold text-primary-900">Blog</h1>
			</div>
	
		<div>
			<p>Here you'll find all my posts and other things that I decided were noteworthy to put here.</p>

			<ul>
				{allPostsData.map(({slug, date, title, exerpt}) => (
					<li
						key={slug}
						>
							<Link
								href='/blog/[slug]'
								as={`/blog/${slug}`}
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
	const allPostsData = getSortedPosts();

	return {
		props: {
			allPostsData, 
		}, 
	}; 
}
