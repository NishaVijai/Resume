import React from 'react';

export default function EducationContainer(props) {
	return (
		<article className="education-container">
			<section className="degrees left-section">
				<p tabIndex="0">{props.date}</p>

				<p tabIndex="0">{props.name}</p>
			</section>

			<section className="education-description">
				<p tabIndex="0">{props.education}</p>
			</section>
		</article>
	);
}
