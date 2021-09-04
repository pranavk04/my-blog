/** @jsxImportSource theme-ui */
import centering from '../components/centering'

export default function AboutMe() {
	return (
		<div>
			<div sx={{display: 'flex', alignItems: 'center'}}>
				<h1 sx={{mx: 'auto', variant: 'text.heading'}}>About Me</h1>
			</div>

			<div sx={{mx: 5}}>
				<p>I am a thonklord.</p>
			</div>
		</div>
	)
}
