import React from 'react';
import { FaEnvelope, FaGithub, FaGoodreads, FaLinkedin } from 'react-icons/fa';

const year = new Date().getFullYear().toString();

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-links">
				<a
					href="https://github.com/Zemerik"
					target="_blank"
					rel="noreferrer"
					aria-label="Github"
				>
					<FaGithub className="footer-icon icon" />
				</a>

				<a
					href="mailto:zemerikY@gmail.com"
					target="_blank"
					rel="noreferrer"
					aria-label="Email"
				>
					<FaEnvelope className="footer-icon icon" />
				</a>

				<a
					href="https://www.linkedin.com/in/zemerik/"
					target="_blank"
					rel="noreferrer"
					aria-label="Linkedin"
				>
					<FaLinkedin className="footer-icon icon" />
				</a>
			</div>

			<div>
				<p>Developed by <a href = "https://github.com/Zemerik" target = "_blank">Hemang Yadav (Zemerik) </a></p>
				<p>
					Copyright <span className="copyright">{`${year}©`}</span> All
					Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
