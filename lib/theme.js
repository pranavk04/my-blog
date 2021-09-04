import nightOwl from '@theme-ui/prism/presets/night-owl'

const theme = {
	fonts: {
		body: 'system-ui, sans-serif', 
		heading: '"Avenir Next", sans-serif', 
		monospace: 'Menlo, monospace'
	}, 
	colors: {
		text: '#000', 
		background: '#fff', 
		primary: '#00074a',
		secondary: '#00298c', 	
		accent: '#ffeaac', 
		highlight: '#feffa6',
	}, 
	fontWeights: {
		body: 400, 
		heading: 700, 
	}, 
	styles: {
		pre: {
			...nightOwl,
		},
		root: {
			fontFamily: 'body', 
			fontWeight: 'body', 
		},
		h1: {
			fontSize: 32, 
			fontFamily: 'heading', 
			fontWeight: 'heading', 
			color: 'primary', 
			mt: 4, 
			mb: 2,
		}, 
		h2: {
			fontSize: 24, 
			fontFamily: 'heading', 
			fontWeight: 'heading', 
			color: 'secondary', 
			mt:4, 
			mb:2, 
		},
		p: {
			fontFamily: 'body'
		}, 
	},
	text: {
		heading: {
			fontFamily: 'heading', 
			fontWeight: 'heading', 
			color: 'primary', // override for other color ig?
		},
	}, 
	buttons: {
		primary: {
			color: 'primary',
			bg: 'accent', 
			'&:hover': {
				bg: 'secondary',
			}
		}, 
		secondary: {
			color: 'background', 
			bg: 'accent', 
		}, 
	}, 
}

export default theme;
