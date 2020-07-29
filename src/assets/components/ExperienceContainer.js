import React from 'react';

export default function ExperienceContainer(props) {
	const imgList = props.links.map((lin) => (
		<a key={lin.id} href={lin.projLink} target="_blank" rel="noopener  noreferrer" title={lin.altText}>
			<img src={lin.projImgLink} alt={lin.altText} />
		</a>
	));

	const descriptionContainer = props.description.map((desc) => (
	<li key={desc.id}>{desc.des}</li>));

	return (
		<article className="projects-container">
			<section className="projects left-section">
				<p>{props.date}</p>
				<p>{props.title}</p>
				<p>{props.project}</p>
			</section>

			<section className="project-description">
				<ul>
					{descriptionContainer}
					<li>{imgList}</li>
				</ul>
			</section>
		</article>
	);
}
