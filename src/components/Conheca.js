import React, { Component } from 'react'
import './conheca.scss'
import ContentText from './ContentText'
import ConhecaItem from './ConhecaItem'
import estrela from '../assets/images/Estrela.png'
import pattern from '../assets/images/pattern.png'
import javascript from '../assets/images/javascript.png'
import world from '../assets/images/grid-world.png'


class Conheca extends Component {

	state = {
		title: 'Desenvolvedor Web & Mobile',
		text: 'Sou engenheiro front-end com foco em desenvolvimento de aplicativos web e mobile. Sou apaixonado por inovação e participar de todos os processos de um projeto. Atualmente estou trabalhando em projetos open source com foco em React e React Native.',
		items: [
			{
				texto: 'Desenvolvimento de Single Page Applications e aplicativos Web, Mobile e PWA usando o Framework',
				titulo: 'React & React Native',
				imagem: javascript
			},
			{
				texto: 'Desenvolvo aplicativos sempre visando as boas práticas aplicadas em projetos.',
				titulo: 'Design Patterns',
				imagem: pattern
			},
			{
				texto: 'Criar um site não é apenas aplicar o layout, mas garantir que tudo funcione bem e que todos possam usufruir.',
				titulo: 'Performance & acessibilidade',
				imagem: world
			}
		]
	}
	render() {
		return (
			<div className="conheca" id="conheca"> 
				<div className="conheca__info">
					<ContentText
						title={this.state.title}
						text={this.state.text}
						hasSeparator={true}
						separatorIcon={estrela}
					/>
				</div>
				<div className="conheca__compose">
					{this.state.items.map((i, index) => (
						<React.Fragment key={`card_${index}`}>
							<ConhecaItem
								text={i.texto}
								title={i.titulo}
								image={i.imagem}
							/>
						</React.Fragment>
					))}
				</div>
			</div>
		)
	}
}

export default Conheca