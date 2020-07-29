import React from 'react';

export default function ExperienceContainer(props) {
	const test = props.links.map((lin) => (
		<a href={lin.projLink} target="_blank" rel="noopener  noreferrer" title={lin.altText}>
			<img src={lin.projImgLink} alt={lin.altText} />
		</a>
	));
	return (
		<article className="projects-container">
			<section className="projects left-section">
				<p>{props.date}</p>
				<p>{props.title}</p>
				<p>{props.project}</p>
			</section>

			<section className="project-description">
				<ul>
					{props.description.map((desc) => <li>{desc} </li>)}
					<li>{test}</li>
				</ul>
			</section>
		</article>
	);
}
