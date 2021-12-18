import style from './style.js'

function createElement(elemName, attributes = {}){
	const elem = document.createElement(elemName)

	Object.keys(attributes).forEach( key => {

		// config for class 
		if(key === 'class' && Array.isArray(attributes[key]))
			return elem.className = attributes[key].splice('').join(' ')
		

		if(key === 'textNode')
			return elem.innerText = attributes[key]

		if(key === 'htmlNode')
			return elem.innerHTML = attributes[key]
		
		// set up styles
		if(key === 'style'){
			return Object.keys(attributes[key]).forEach(value => {
				elem.style[value] = attributes[key][value]  
			})
		}
		elem.setAttribute( key , attributes[key] )
	})


	return elem
}



function setElements(value,  options = { lineColor: 'black' , topColor: 'black', bottomColor:"black" ,middleLine: false , lowerCase: false, upperCase: true , topBg: 'transparent' , bottomBg: "transparent", value: '' }){
	// create container element
	const container = createElement('div' , {name: 'container' , /* style: style.container */ })

	// Create the top Section child div of the container
	const topSection = createElement('div' , { class: 'top_section' , style: { ...style.topSection}})
	container.appendChild(topSection)

	let hr = null

	// Create Horizontal Line
	if(options.middleLine){
		hr = createElement('hr' , { style: { 
			borderColor: options.lineColor ,
			transformOrigin: 'center',
			margin: 0,
			padding: 0
		}});

		container.appendChild(hr)

		hr.animate([
			{transform: 'scalex(0)'},
			{transform: 'scalex(1)'}
		], {duration: 1000})
	}

	// create the bottom Section child div of the Canvas
	const bottomSection = createElement('div' , {style: { ...style.bottomSection}})
	container.appendChild(bottomSection)

	if(options.userCase && options.lowerCase)
		throw new Error('Value cant have data-upper & data-lower in single element')

	if(options.upperCase)
		value = value.toUpperCase()

	if(options.lowerCase)
		value = value.toLowerCase()

	if(!value || typeof value !== 'string')
		throw new Error('value attribute required required!')

	value.split('').forEach( (letter , index ) => {

		let topSpan = createElement('span' , { textNode: letter, style:{ 
			...style.span , 
			transform: 'translateY(1em)',
			color: options.topColor,
			background: options.topBg,
		}})


		topSpan.animate([...style.keyFrameWaveUp], {
			...style.animationOption,
			delay: 100 * (index + 20)
		})

		topSection.appendChild(topSpan)


		let spanTwo = createElement('span', { textNode: letter , style:{ ...style.span, 
			opacity: 0.5,
			background: options.bottomBg,
			color: options.bottomColor
		}})

		spanTwo.animate([...style.keyFrameWaveDown], {
			...style.animationOption,
			delay: 100 * (index + 20)
		})

		bottomSection.appendChild(spanTwo)
	})


	return container

}

function startWave(value , options){
	return setElements(value, options)
}


export default {
	createElement,
	startWave
}