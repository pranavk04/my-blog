import Link from 'next/link'
import React, { Component, useState } from 'react'

class NavLink extends Component {
	render() {

		const { onPress, where, text } = this.props;

		return (	
			<Link href={where}>
				<a onClick={onPress} className="text-lg block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"><h1>{text}</h1></a>
			</Link>
		)
	}
}

function Navbar() {

	const [expanded, setExpanded] = useState(true);

	return (
		<div>
			<div className="flex items-center justify-between flex-wrap p-10">

				<div className="flex items-center flex-shrink-0 text-white mr-10">
					<Link href='/'>
						<span className="font-semibold text-2xl tracking-tight">Pranav</span>
					</Link>
				</div>

				<div className="block lg:hidden">
					<button onClick={() => {setExpanded(!expanded); console.log(expanded);}} class="flex items-center px-3 py-2 text-black-200">
						      <svg className="fill-current h-5 w-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
					</button>
				</div>

				<div className={"w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto" + (expanded ? " flex" : " hidden")}>
					<div className="text-sm lg:flex-grow">
						<NavLink where='/' text='Home' onPress={() => setExpanded(false)}/>
						<NavLink where='/blog' text='Blog' onPress={() => setExpanded(false)}/>
						<NavLink where='/about-me' text='About Me' onPress={() => setExpanded(false)}/>
						<NavLink where='/resources' text='Resources' onPress={() => setExpanded(false)}/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Navbar;
