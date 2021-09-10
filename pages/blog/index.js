import Link from "next/link";
import { getSortedPosts } from "../../lib/posts";

const BlogIndex = ({ allPostsData }) => {
	return (
		<div>
			<div>
				<h1>My Blog!</h1>
			</div>
	
		<div>
			<p>Here you'll find all my posts and other things that I decided were noteworthy to put here.</p>

			<ul>
				{allPostsData.map(({slug, date, title, exerpt}) => (
					<li
						key={slug}
						>
						<h2
							key={title}
							>

							<Link
								href='/blog/[slug]'
								as={`/blog/${slug}`}
								>
								{title}
							</Link>
						</h2>
						<small>{date}</small>
						<p>{exerpt}</p>
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
