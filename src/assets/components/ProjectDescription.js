import React from 'react';

export default function ProjectDescription(props) {
	return (
		<div className="project-description">
			<ul className="move-top-padding">
				{/* <li>
					Built a cloned vaersgo website{' '}
					<a
						href="https://github.com/chingu-voyages/v12-solo-NishaVijai"
						target="_blank"
						rel="noopener  noreferrer"
					>
						V12-Solo-project
					</a>{' '}
					using HTML,CSS and React
				</li>
				<li>
					Hosted vaersgo{' '}
					<a href=" https://vaersgo.netlify.com/" target="_blank" rel="noopener  noreferrer">
						Cloned-Værsgo
					</a>{' '}
					in Netlify{' '}
				</li> */}
				<li>{props.description} </li>
			</ul>
		</div>
	);
}
