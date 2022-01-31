import React, { useState } from 'react'
import { getAllRatingSlugs, getRatingsData } from '../../lib/ratings'
import matter from 'gray-matter'
import Head from 'next/head'
import Link from 'next/link'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { IoIosArrowBack } from 'react-icons/io'
import Stars from '../../components/stars'
import Image from 'next/image'

export default function Ratings({source, frontMatter }) {
    return (
        <div>
            <Head>
                <title>{frontMatter.title}</title>
            </Head>

            <div>
                <Link href='/ratings'>
                    <div className='flex flex-row items-center mb-2'>
                        <IoIosArrowBack className='text-accent-900 text-xl' />
                        <a className='flex-1 text-accent-900 font-semibold text-xl'>Back</a>

                        <Stars className='' starcount={frontMatter.starcount} />
                    </div>
                </Link>

                <div className='text-center'>
                    <h1 className='text-primary-900 text-3xl md:text-5xl md:mb-2 font-bold'>
                        {frontMatter.title}
                    </h1>
                    {/* <span className='text-gray-600 text-lg'>{frontMatter.date}</span> */}
                </div>

                <hr className='my-8 border-t-2 w-20 mx-auto' />
                <div className='text-center'>
                    <Image height={150} width={300} src={'/'+frontMatter.id} />
                </div>
                <div className='flex'>
                    <article className='mt-8 mx-auto prose'>
                        <MDXRemote {...source} />
                    </article>
                </div>
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = getAllRatingSlugs();

    return {
        paths, 
        fallback: false
    };
}

export async function getStaticProps({ params }) {
    const ratingsContent = await getRatingsData(params.slug);
    const { data, content } = matter(ratingsContent);

    const mdxSource = await serialize(content, {
        scope: data
    });

    return {
        props: {
            source: mdxSource, 
            frontMatter: data
        }
    };
}