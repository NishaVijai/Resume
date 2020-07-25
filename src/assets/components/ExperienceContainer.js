import React from 'react';

export default function ExperienceContainer(props) {
	return (
		<div className="projects-container">
			<div className="project-2 projects left-section">
				<p>{props.date}</p>
				<p>{props.title}</p>
				<p>{props.project}</p>
			</div>

			<div className="project-2-description project-description">
				<p>{props.linkOne}</p>
				<p>
					{props.githubText}{' '}
					<a href={props.githubLink} target="_blank" rel="noopener  noreferrer">
						{props.githubName}
					</a>{' '}
					{props.projectLanguages}
				</p>
				<p>{props.linkTwo}</p>
				<p>
					{props.projectTextOne}{' '}
					<a href={props.projectLink} target="_blank" rel="noopener  noreferrer">
						{props.projectName}
					</a>{' '}
					{props.projectTextTwo}{' '}
				</p>
			</div>
		</div>
	);
}
