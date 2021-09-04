/** @jsxImportSource theme-ui */
import { Button, Flex } from 'theme-ui'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'

function Navbar() {
	return (
		<div sx={{display: 'flex', alignItems: 'center', bg: 'accent'}}>
			<div sx={{py: 3, mr: 'auto', ml: 'auto'}}>
				<Flex as="nav">
					<Link href='/'>
						<a sx={{ml: 2, mr: 2}}><h1 sx={{variant: 'text.heading'}}>Home</h1></a>
					</Link>

					<Link href='/blog'>
						<a sx={{ml: 2, mr: 2}}><h1 sx={{variant: 'text.heading'}}>Blog</h1></a>
					</Link>


					<Link href='/about-me'>
						<a sx={{ml: 2, mr: 2}}><h1 sx={{variant: 'text.heading'}}>About Me</h1></a>
					</Link>

					<Link href='/resources'>
						<a sx={{ml: 2, mr: 2}}><h1 sx={{variant: 'text.heading'}}>Resources</h1></a>
					</Link>
				</Flex>
			</div>
		</div>
	)
}

export default Navbar;
