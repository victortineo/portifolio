import React from 'react'
import './footer.scss'
import {  FaGithub, FaLinkedin } from 'react-icons/fa'
import {  IoIosMail } from 'react-icons/io'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__wrapper">
				<div className="footer__col">
					<h2 className="footer__title">Contato</h2>
					<p className="footer__news">
						Gostou? Entre em contato comigo pelas redes!
					</p>
					<div className="footer__socials">
						<a className="footer__social" href="https://linkedin.com/in/victortineo" rel="noopener noreferrer" target="_blank"><FaLinkedin /></a>
						<a className="footer__social" href="https://github.com/victortineo" rel="noopener noreferrer" target="_blank"><FaGithub /></a>
						<a className="footer__social" href="mailto:victor.tineo141@gmail.com" rel="noopener noreferrer" target="_blank"><IoIosMail /></a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer