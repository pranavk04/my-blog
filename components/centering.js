/** @jsxImportSource theme-ui */

export default function Centering({ props }) {
	return (
		<div>
			<div sx={{display: 'flex', alignItems: 'center'}}>
				{props}
			</div>
		</div>
	);
}
