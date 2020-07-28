import React from 'react';

export default function EducationContainer(props) {
	return (
		<div className="education-container">
			<div className="degrees left-section">
				<p>{props.date}</p>

				<p>{props.name}</p>
			</div>

			<div className="education-description">
				<p>{props.education}</p>
			</div>
		</div>
	);
}
