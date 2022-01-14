import React, { useState } from 'react'
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

import Reactive from '../../components/reactive'

import { IoChevronBack } from 'react-icons/io'
import { FaGithub } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'
// import 'prism-themes/themes/prism-synthwave84.css'
// import hydrate from "next-mdx-remote/hydrate"

// const components = { }

export default function Posts({ source, frontMatter }) {
	// const content = hydrate(source, { components });
	//
	const [showComments, setShowComments] = React.useState(true);

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

				<Link href='/blog'>
					<div className="flex flex-row items-center"> 
						<IoIosArrowBack className="text-accent-900 text-xl"/>
						<a className="text-accent-900 font-semibold text-xl ">Back</a>
					</div>
				</Link>

				<div className="text-center">
					<h1 className="text-primary-900 text-3xl md:text-5xl md:mb-2 font-bold">{frontMatter.title}</h1>
					<span className="text-gray-600 text-lg">{frontMatter.date}</span>
				</div>

				<hr className="mt-8 border-t-2 w-20 mx-auto" />

				<div className="flex">
					<article className="mt-8 mx-auto prose">
						<MDXRemote {...source} />
						<Reactive />
					</article>
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
