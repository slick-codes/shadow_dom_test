export default{
	container: {
		margin: 0,
		padding: 0,
		background: "white",
		width: "100%",
		height: "100vh",
		position: "absolute",
		zIndex: 444,
		display: "flex",
		flexFlow: "column",
		// justifyContent: "center",
		// alignItems: "center",
	},
	topSection: {
		margin: 0,
		padding: 0,
		display: "flex",
		overflow: "hidden",
		// justifyContent: "center",
		// alignItems: "center"
	},
	bottomSection:{
		margin: 0,
		padding: 0,
		display: "flex",
		overflow: "hidden",
		// justifyContent: "center",
		// alignItems: "center"
	},
	span:{
		margin: 0,
		padding: 0,
		fontSize: "50px",
		fontFamily: "GeosansLight",
		color: "black"
	},
	animationOption: {
		duration: 900,
		iterations: Infinity,
		direction: 'alternate-reverse',
		timingFunction: 'ease',
		fill: 'backwards'
	},
	keyFrameWaveUp: [
		{
			transform: 'translateY(0)'
		}, 
		{
			transform: 'translateY(1em)'
		}
	],
	keyFrameWaveDown: [
		{
			transform: 'translateY(0em) rotate(180deg) rotateY(180deg)',
		},{
			transform: 'translateY(-1em) rotate(180deg) rotateY(180deg)'
		}

	]

}