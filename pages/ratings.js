import Modal from '../components/modal'
import { LoremIpsum } from 'react-lorem-ipsum'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import matter from 'gray-matter'
export default function Ratings({ source }) {
	return (
		<div>
			<h1>Ratings</h1>
			<p> here are some ratings of cool stuff now go away </p>

			<Modal buttonText="open" title="Modal">
				<MDXRemote {...source} />
			</Modal>
		</div>
	)
}

export async function getStaticProps() {
	const fs = require('fs')
	const source = fs.readFileSync('../ratings/test.md')
	const { data, content } = matter(source)

	const mdxSource = await serialize(content, {
		scope: data
	})

	return {
		props: {
			source: mdxSource, 
			frontMatter: data
		}
	}
}
