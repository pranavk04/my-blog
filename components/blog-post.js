import React from 'react'

export default function BlogPost(props) {
	return (
		<div className="block p-4 mr-5 ml-5">
			<h1 className="text-3xl mb-1 font-semibold text-accent-900">{props.title}</h1>
			<p className="mb-2 text-accent-800">{props.date}</p>
			<hr className="mb-2"/>
			<p>{props.excerpt}</p>
		</div>
	)
}
