import React from 'react';
import { Link } from 'react-router-dom';

import { FaEnvelope } from 'react-icons/fa';
import Frame from '../components/Frame';
import { useTitle } from '../hooks/useTitle';

const Home = () => {
	useTitle('home');
	return (
		<div className="hero-container">
			<div className="greet-card">
				<h1>
					<span>ZemShowcase</span>
					<p>Showcase & Connect with Developers</p>
				</h1>

				<div className="greet-bottom">
					<div className="greet-info">
						<p>
							ZemShowcase stands as an open-source platform, providing users with the opportunity to exhibit their projects seamlessly to fellow developers. 
							This exhibition is fostered through the simple act of adding one's Project to the platform, 
							thus creating a digital hub where like-minded individuals can engage, collaborate, and share insights within the expansive realm of software development. 
							With its user-friendly interface and inclusive community ethos, 
							ZemShowcase serves as a dynamic space where projects are highlighted, ideas are exchanged, and innovation thrives.
						</p>
						<Frame />
					</div>

					<div className="greet-buttons">
						<Link to="/projects" type="button" className="btn" aria-label="projects">
							Projects
						</Link>

						<a
							href="https://github.com/Zemerik/ZemShowcase"
							target="_blank"
							type="button"
							className="btn" rel="noreferrer"
							>
						Github
						</a>

						<a
							href="https://zemprofiles.vercel.app"
							target="_blank"
							type="button"
							className="btn"
							rel="noreferrer"
						>
						ZemProfiles
						</a>

						<a
							href="mailto:zemeriky@gmail.com"
							target="_blank"
							rel="noreferrer"
							type="button"
							className="btn"
							aria-label="Email"
							title="Send me an email!"
							style={{
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								fontSize: '1.375rem',
							}}
						>
							<FaEnvelope className="icon" />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
