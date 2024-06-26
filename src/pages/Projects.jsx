import React, { Fragment } from 'react';
import ProjectItem from '../components/ProjectItem';
import projectThumbnails from '../data/project-thumbnails';
import projects from '../data/projects.json';
import { useTitle } from '../hooks/useTitle';

const Projects = () => {
	useTitle('Projects');

	const getProjectThumbnail = (project) => {
		return projectThumbnails[project?.repositoryName] || projectThumbnails['placeholder'];
	};

	return (
		<div className="projects">
			<div className="container">
				<div className="content-container">
					<div className="content-header">
						<h1>Awesome Projects</h1>
						<div className="header-underline"></div>
					</div>

				<	div className="project-items card">
						{projects.map((project, index) => (
							<Fragment key={`${project}-${index}`}>
								<ProjectItem
									project={project}
									thumbnail={getProjectThumbnail(project)}
									index={index}
								/>

								{index !== projects.length - 1 && <hr />}
							</Fragment>
						))}
					</div>

				</div>
			</div>
		</div>
		);
	};

export default Projects;
