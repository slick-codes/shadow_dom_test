import dom from './domMainipulation.js'



class WaveText extends HTMLElement{
	constructor(){
		super()
		const shadowRoot = this.attachShadow({mode: "open"})


		// Setting up shadow Root attributes
		const string = this.getAttribute('value')
		const middleLine = Boolean(this.getAttribute('middleline'))
		const lineColor = this.getAttribute('line-color')
		const upperCase = Boolean(this.getAttribute('upper'))
		const lowerCase = Boolean(this.getAttribute('lower'))
		const bottomBg = this.getAttribute('bottom-bg')
		const topColor = this.getAttribute('top-color')
		const bottomColor = this.getAttribute('bottom-color')
		const topBg = this.getAttribute('top-bg')

		
		shadowRoot.appendChild( dom.startWave(string , {
			string,
			middleLine,
			upperCase,
			bottomBg,
			topBg,
			topColor,
			bottomColor,
		}) )

		// make hr the width of the text
		const hr = shadowRoot.querySelector('hr')
		const topSection = shadowRoot.querySelectorAll('div.top_section span')
		let width = 0
		topSection.forEach( span => width += span.clientWidth)
		if(hr)
			hr.style.width = width + 'px'
	}
}

customElements.define('wave-text', WaveText)