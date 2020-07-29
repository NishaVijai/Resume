import React from 'react';

export default function EducationContainer(props) {
	return (
		<article className="education-container">
			<section className="degrees left-section">
				<p>{props.date}</p>

				<p>{props.name}</p>
			</section>

			<section className="education-description">
				<p>{props.education}</p>
			</section>
		</article>
	);
}
