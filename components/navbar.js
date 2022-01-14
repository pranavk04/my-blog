import Link from 'next/link'
import React, { Component, useState } from 'react'

import { FaGithub, FaBars, FaDiscord } from 'react-icons/fa'
import { Icon } from '@iconify/react'

class NavLink extends Component {
	render() {

		const { onPress, where, text } = this.props;

		return (	
			<Link href={where}>
				<a onClick={onPress} className="text-lg block mt-4 lg:inline-block lg:mt-0 text-black hover:text-white mr-4"><h1 className="">{text}</h1></a>
			</Link>
		)
	}
}

function Navbar() {

	const [expanded, setExpanded] = useState(false);

	return (
		<div>
			<div className="rounded-xl bg-accent-200 border-accent-500 text-accent-700 border flex items-center justify-between flex-wrap p-5 mb-20">
				<div className="flex items-center flex-shrink-0 mr-10">
					<Link href='/'>
						<span className="font-semibold text-2xl tracking-tight">Pranav</span>
					</Link>
				</div>

				<div className="flex py-2 px-3 fill-current lg:items-center lg:w-auto">
					<a href="https://github.com/pranavk04/">
						<FaGithub className="w-5 h-5 ml-5" />
					</a>

					<a href="https://discordapp.com/users/392152085040332801/">
						<Icon icon="simple-icons:discord" className="h-5 w-5 ml-5" />
					</a>
				</div>
			</div>
		</div>
	)
}

export default Navbar;
