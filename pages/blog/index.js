import Link from "next/link";
import { getSortedPosts } from "../../lib/posts";

import { useCallback, useRef, useState } from 'react'

import BlogPost from '../../components/blog-post'

const BlogIndex = ({ allPostsData }) => {

	const searchRef = useRef(null)
	const [query, setQuery] = useState('')
	const [active, setActive] = useState(false)
	const [results, setResults] = useState([])
	const [message, setMessage] = useState('')

	const searchEndpoint = (query) => `api/search?q=${query}`

	const onChange = useCallback((event) => {
		const query = event.target.value;
		setQuery(query)
		if (query.length) {
			setMessage('')
			fetch(searchEndpoint(query))
				.then(res => res.json())
				.then(res => {
					setResults(res.results)
					console.log(res.results);
				})
		} else {
			setResults([])
			setMessage("Oops! There's no post titled like that! Check your search, maybe?")
		}
	}, [])

	const onFocus = useCallback(() => {
		setActive(true)
		window.addEventListener('click', onClick)
	}, [])

	const onClick = useCallback((event) => {
		if (searchRef.current && !searchRef.current.contains(event.target)) {
			setActive(false)
			window.removeEventListener('click', onClick)
		}
	}, [])

	return (
		<div>
			<div className="text-center">
				<h1 className="text-5xl mb-5 font-semibold text-primary-900">Blog</h1>
			</div>
	
		<div>
			<p>Welcome to my blog! Here you'll find posts about topics that I chose to write about, were suggested to me, or simply things that I think you should know about. You can search for a specific post below, or just scroll and find one you'd like to read!</p>

			<div ref={searchRef}>
				<div className="flex flex-col justify-center items-center">
					<input
						onChange={onChange}
						onFocus={onFocus}
						placeholder='Search Posts!'
						type='text'
						value={query}
						className="mt-5 rounded focus:outline-none focus:border-primary-900"
					/>
				</div>
				{ active && results.length > 0 && (
					<ul>
						{results.map(({ slug, date, title, exerpt }) => (
							<li key={slug}>
								<Link href='/blog/[slug]' as={`/blog/${slug}`}>
							<a><BlogPost title={title} date={date} excerpt={exerpt} /></a>
								</Link>
							</li>
						))}
					</ul>
				)} 

				{query === '' && (
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
				)}
		{query.length > 0 && results.length === 0 && ( 
			<div className="text-center">
				<h1 className="mt-5 text-accent-500">Oops! There's no post with that title. Check your spelling, maybe?</h1> 
			</div>
		)}
			</div>
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
