import React, { Component } from 'react'
import './porque.scss'
import './slide.scss'
import ContentText from './ContentText'
import estrela from '../assets/images/Estrela.png'
import Slider from "react-slick";
import mestre from '../assets/images/mestre.jpg'
import mfm from '../assets/images/mfmti.jpg'
import funil from '../assets/images/funil.jpg'
import senai from '../assets/images/senai.jpg'

class Porque extends Component {
	state = {
		title: 'Projetos',
		text: 'Conheça alguns dos projetos que participei. Para saber sobre todas as tecnologias que eu domino ou me chamar para um job, entra em contato',
		items: [
			{
				title: 'Funil em Y',
				desc: 'Site desenvolvido com React para a empresa Layer Up. Possuí um layout de página única e animações e efeitos de transição',
				image: funil,
				link: 'http://funilemy.com.br'
			},
			{
				title: 'Mestre Construtor',
				desc: 'Site simples feito em dois dias. Foi desenvolvido em cima do React',
				image: mestre,
				link: 'http://mestreconstrutor.blog.br'
			},
			{
				title: 'MFMTi',
				desc: 'Site desenvolvido em Wordpress. Possuí blog, integrações com a API do CMS e alta avaliação no PageSpeed',
				image: mfm,
				link: 'http://www.mfmti.com.br'
			},
			{
				title: 'Mundo Senai',
				desc: 'Projeto do Portal e Aplicativo desenvolvidos em Backbone, Underscore e Ionic (mobile).',
				image: senai,
				link: 'https://www.mundosenai.com.br/'
			}
		]
	}
	render() {
		var settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1
		  };
		return (
			<div className="porque" id="porque">
				<div className="porque__intro">
					<ContentText
						title={this.state.title}
						hasSeparator={true}
						separatorIcon={estrela}
						text={this.state.text}
					/>
				</div>
				<div className="porque__info">
					<Slider {...settings}>
						{this.state.items.map((item, i) => 
							<div className="slide" key={`item__${i}`}>
								<h3 className="slide__title">{item.title}</h3>
								<p className="slide__desc">{item.desc}</p>
								<div className="slide__tablet">
									<img src={item.image} alt={`Print do projeto ${item.title}`} className="slide__image"/>
								</div>
								<a href={item.link} className="slide__link" target="_blank" rel="noopener noreferrer">Confira</a>
							</div>
						)}
					</Slider>
				</div>
			</div>
		)
	}
}

export default Porque