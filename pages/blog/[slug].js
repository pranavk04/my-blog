import { getAllPostSlugs, getPostData } from "../../lib/posts"
import matter from "gray-matter"
import Head from "next/head"
import Link from 'next/link'
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from 'next-mdx-remote'

import remarkMath from 'remark-math'
import remarkParse from 'remark-parse'

import rehypeKatex from 'rehype-katex'
import rehypePrism from 'rehype-prism-plus'

// import 'prism-themes/themes/prism-synthwave84.css'
// import hydrate from "next-mdx-remote/hydrate"

// const components = { }

export default function Posts({ source, frontMatter }) {
	// const content = hydrate(source, { components });
	
	return (
		<div>
			<Head>
				<title>{frontMatter.title}</title>

				<link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css"
          integrity="sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc"
          crossOrigin="anonymous"
        />
			</Head>

			<div>
				<div className="text-center">
					<h1 className="text-primary-900 text-5xl mb-2 font-bold">{frontMatter.title}</h1>
					<span className="text-gray-600 text-lg">Date: {frontMatter.date}</span>
				</div>

				<hr className="mt-8 border-t-2 w-20 mx-auto" />

				<div className="flex">
				<article className="mt-8 mx-auto prose">
					<MDXRemote {...source} />
				</article>
				</div>

				<Link href='/blog'>
					<a>Back</a>
				</Link>
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
		mdxOptions: {
			remarkPlugins: [remarkMath], 
			rehypePlugins: [rehypeKatex, rehypePrism], 
		}, 
		scope: data
	});

	return {
		props: {
			source: mdxSource, 
			frontMatter: data
		}
	};
}
