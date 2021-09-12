import Link from 'next/link'
import React, { Component, useState } from 'react'

import { FaGithub, FaBars, FaDiscord } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { TiThMenu } from 'react-icons/ti'

class NavLink extends Component {
	render() {

		const { onPress, where, text } = this.props;

		return (	
			<Link href={where}>
				<a onClick={onPress} className="text-lg block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"><h1 className="text-white">{text}</h1></a>
			</Link>
		)
	}
}

function Navbar() {

	const [expanded, setExpanded] = useState(false);

	return (
		<div>
			<div className="bg-black text-white flex items-center justify-between flex-wrap px-20 py-5 mb-20">
				<div className="flex items-center flex-shrink-0 mr-10">
					<Link href='/'>
						<span className="font-semibold text-2xl tracking-tight">Pranav</span>
					</Link>
				</div>

				<div className="flex items-center px-3 py-2">
					<a href="https://github.com/pranavk04/">
						<FaGithub className=" lg:hidden fill-current h-5 w-5 mr-5" />
					</a>

					<a href="mailto:pranavk123455@gmail.com">
						<HiOutlineMail className="lg:hidden h-5 w-5 mr-5" />
					</a>

					<a href="https://discordapp.com/users/392152085040332801/">
						<FaDiscord className="lg:hidden h-5 w-5 mr-5" />
					</a>

					<button onClick={() => {setExpanded(!expanded); console.log(expanded);}}>
						<TiThMenu className=" lg:hidden h-5 w-5" />
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

				<div className="lg:flex py-2 px-3 fill-current hidden lg:items-center lg:w-auto">
					<a href="https://github.com/pranavk04/">
						<FaGithub className="w-5 h-5 ml-5" />
					</a>

					<a href="mailto:pranavk123455@gmail.com">
						<HiOutlineMail className="w-5 h-5 ml-5"/>
					</a>

					<a href="https://discordapp.com/users/392152085040332801/">
						<FaDiscord className="h-5 w-5 ml-5" />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar;
