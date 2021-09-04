/** @jsxImportSource theme-ui */

import { getAllPostSlugs, getPostData } from "../../lib/posts"
import matter from "gray-matter"
import Head from "next/head"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from 'next-mdx-remote'
import katex from 'katex'
// import hydrate from "next-mdx-remote/hydrate"

// const components = { }

export default function Posts({ source, frontMatter }) {
	// const content = hydrate(source, { components });
	
	return (
		<div>
			<Head>
				<title>{frontMatter.title}</title>
			</Head>

			<div>
				<div sx={{display: 'flex', alignItems: 'center'}}>
					<h1 sx={{variant: 'text.heading', ml: 'auto', mr: 'auto', mb: 1}}>{frontMatter.title}</h1>
				</div>
				<span sx={{display: 'flex', alignItems: 'center'}}> <p sx={{color: 'primary', ml: 'auto', mr: 'auto', mt: 0}}>Date: {frontMatter.date}</p></span>
				
				<div sx={{mx: 5}}>
					<MDXRemote {...source} />
				</div>
			</div>
		</div>
	);
}

export async function getStaticPaths() {
	const paths = getAllPostSlugs();

	return {
		paths, 
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const postContent = await getPostData(params.slug);
	const { data, content } = matter(postContent);

	const mdxSource = await serialize(content, {
		// components, 
		scope: data
	});

	return {
		props: {
			source: mdxSource, 
			frontMatter: data
		}
	};
}
