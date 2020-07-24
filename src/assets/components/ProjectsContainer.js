import React from 'react';

export default function ProjectsContainer(props) {
	return (
		<div className="projects-container">
			<div className="projects left-section">
				<p>{props.date}</p>
				<p>{props.title}</p>
				<p>{props.project}</p>
			</div>

			{/* <div className="project-3-description project-description">
				<ul>
                    {/* {props.description.map((desc, i) => <li key={i}>{desc}</li> )} */}
                    {/* <li>{props.description}</li> */}
                {/* </ul> */}
			{/* </div> */} */}
		</div>
	);
}
