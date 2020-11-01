import React from 'react'
import './banner.scss'
import web from '../assets/images/web.png'
import phone from '../assets/images/smartphone.png'
import { Throttle } from 'react-throttle';

const moveBaner = (elm) => {
	if(window.innerWidth < 768){
		return false
	}
	const x = elm.clientX;
	const y = elm.clientY;
	const web = document.querySelector('.banner__icon--web')
	const phone = document.querySelector('.banner__icon--phone')
	const wrapper = document.querySelector('.banner__wrapper')
	const wrapperWidth = wrapper.offsetWidth;
	const wrapperHeight = wrapper.offsetHeight;
	web.style.transform = `translate(${(x / wrapperWidth * 8) -12}px, ${(y / wrapperHeight * 8) -8}px)`
	phone.style.transform = `translate(${(x / wrapperWidth * 8) -8}px, ${(y / wrapperHeight * 8) -8}px)`
}

const Banner = () => {
	return (
		<div className="banner" id='banner'>
			<div className="banner__background"></div>	
			<Throttle time="300" handler="onMouseMove">
				<div className="banner__wrapper" onMouseMove={(e) => moveBaner(e)}>
					<div className="banner__logoWrapper">
						<img className="banner__icon banner__icon--web" src={web} alt=""/>
						<img className="banner__icon banner__icon--phone" src={phone} alt=""/>
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