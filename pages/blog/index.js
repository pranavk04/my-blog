/** @jsxImportSource theme-ui */

import Link from "next/link";
import { getSortedPosts } from "../../lib/posts";

const BlogIndex = ({ allPostsData }) => {
	return (
		<div>
		<div sx={{display: 'flex', alignItems: 'center'}}>
			<h1 sx={{variant: 'text.heading', ml: 'auto', mr: 'auto'}}>My Blog!</h1>
		</div>
	
		<div sx={{mx: 5}}>
			<p>Here you'll find all my posts and other things that I decided were noteworthy to put here.</p>

			<ul
				sx={{
					listStyle: 'none',
					m: 0,
					px: 3,
					py: 4,
				}}>
				{allPostsData.map(({slug, date, title, exerpt}) => (
					<li
						key={slug}
						sx={{
							mb: 4,
						}}>
						<h2
							key={title}
							sx={{
								m: 0,
							}}>

							<Link
								href='/blog/[slug]'
								as={`/blog/${slug}`}
								sx={{
									color: 'inherit',
									textDecoration: 'none',
									':hover,:focus': {
										color: 'primary',
										textDecoration: 'underline',
									},
								}}>
								{title}
							</Link>
						</h2>
						<small sx={{ fontWeight: 700 }}>{date}</small>
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
