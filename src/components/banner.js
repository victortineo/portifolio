import React from 'react'
import './banner.scss'
import web from '../assets/images/web.png'
import phone from '../assets/images/smartphone.png'
import { Throttle } from 'react-throttle';


const moveBaner = (elm) => {
	if(window.innerWidth < 768){
		return false
	}
	// eixos de movimento do mouse
	const x = elm.clientX;
	const y = elm.clientY;
	// elementos 
	// const pedrasFrente = document.getElementsByClassName('banner__pedrasFrente')[0]
	const web = document.getElementsByClassName('banner__web')[0]
	const phone = document.getElementsByClassName('banner__phone')[0]
	const wrapper = document.getElementsByClassName('banner__wrapper')[0]
	// tamanhos da tela
	const wrapperWidth = wrapper.offsetWidth;
	const wrapperHeight = wrapper.offsetHeight;
	// alteração de estilo
	// pedrasFrente.style.transform = `translate(${(x / wrapperWidth * 40) -4}px, ${(y / wrapperHeight * 40) -20}px)`
	web.style.transform = `translate(${(x / wrapperWidth * 5) -8}px, ${(y / wrapperHeight * 5) -8}px)`
	phone.style.transform = `translate(${(x / wrapperWidth * 12) -8}px, ${(y / wrapperHeight * 5) -8}px)`
}

const Banner = () => {
	return (
		<div className="banner" id='banner'>
			<div className="banner__background"></div>	
			<Throttle time="200" handler="onMouseMove">
				<div className="banner__wrapper" onMouseMove={(e) => moveBaner(e)}>
					<div className="banner__logoWrapper">
						<img className="banner__web" src={web} alt=""/>
						<img className="banner__phone" src={phone} alt=""/>
					</div>
					<div className="banner__logo">
						<h1 className="banner__title">Oi, eu sou o Victor :)</h1>
						<p className="banner__desc">e eu desenvolvo sites</p>
						
					</div>
				</div>
			</Throttle>
		</div>
	)
}

export default Banner