import React from 'react';

export default function EducationContainer(props) {
	return (
		<div className="education-container">
			<div className="education-2 degrees left-section">
				<p>{props.date}</p>

				<p>{props.name}</p>
			</div>

			<div className="education-2-description education-description">
				<p>{props.education}</p>
			</div>
		</div>
	);
}
