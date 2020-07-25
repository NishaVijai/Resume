import React from 'react';

export default function ExperienceContainer(props) {
	const linkContainer = props.linkOne.map((lin) => {
		return lin.textFirst !== null && lin.textThird !== null ? (
			<li>
				{lin.textFirst}
				{lin.text}{' '}
				<a href={lin.url} target="_blank" rel="noopener  noreferrer">
					{lin.name}
				</a>{' '}
				{lin.lastText}
				{lin.textThird}
			</li>
		) : (
			<li>
				{lin.text}{' '}
				<a href={lin.url} target="_blank" rel="noopener  noreferrer">
					{lin.name}
				</a>{' '}
				{lin.lastText}
			</li>
		);
	});
	return (
		<div className="projects-container">
			<div className="project-2 projects left-section">
				<p>{props.date}</p>
				<p>{props.title}</p>
				<p>{props.project}</p>
			</div>

			<div className="project-2-description project-description">
				{/* <ul> */}
				{linkContainer}
				{/* <li>{props.linkOne.map((lin) => <li>{lin.text}{' '}
						<a href={lin.url} target="_blank" rel="noopener  noreferrer">
							{lin.name}
						</a>{' '}{lin.lastText} </li> )} </li> */}
				{/* {props.linkOne.map((link) => (
						<li>
						{link.textOne}{' '}
						<a href={link.link} target="_blank" rel="noopener  noreferrer">
							{link.name}
						</a>{' '}
						{link.textTwo}
					</li>))} */}

				{/* <li>
						{props.githubText}{' '}
						<a href={props.githubLink} target="_blank" rel="noopener  noreferrer">
							{props.githubName}
						</a>{' '}
						{props.projectLanguages}
					</li>
					<li>{props.linkTwo}</li>
					<li>
						{props.projectTextOne}{' '}
						<a href={props.projectLink} target="_blank" rel="noopener  noreferrer">
							{props.projectName}
						</a>{' '}
						{props.projectTextTwo}{' '}
					</li> */}
				{/* </ul> */}
			</div>
		</div>
	);
}
