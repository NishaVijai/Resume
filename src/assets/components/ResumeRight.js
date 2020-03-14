import React, { Component } from 'react';

export default class ResumeRight extends Component {
	render() {
		return (
			<div className="resume-right">
				<div className="left-section">
					<div className="empty" />
					<div className="experience">
						<h3>experience</h3>
						<div className="project-1 projects">
							<p>Oct 2019 - Nov 2019</p>
							<p>front-end developer</p>
							<p>chingu-voyage 12</p>
						</div>
						<hr />

						<div className="project-2 projects">
							<p>Sep 2019 - Oct 2019</p>
							<p>front-end developer</p>
							<p>chingu-voyage 11</p>
						</div>
						<hr />
						<div className="project-3 projects">
							<p>June 2019 - July 2019</p>
							<p>front-end developer</p>
							<p>chingu-voyage 09</p>
						</div>
						<hr />

						<div className="project-4 projects">
							<p>May 2019 - June 2019</p>
							<p>front-end developer</p>
							<p>chingu-voyage 08</p>
						</div>
						<hr />
					</div>

					<div className="education">
						<h3>education</h3>
						<p>Self-taught</p>
					</div>
				</div>

				<div className="right-section">
					<div className="title">
						<h2>front-end web developer</h2>

						<hr />

						<p>
							Address: <address>Skibsegen 96, 3070 Snekkersten</address>
						</p>

						<p>
							Mail: <a href="mailto:nishavijai@gmail.com">nishavijai@gmail.com</a>
						</p>

						<p>
							Mobile: <a href="tel:+45-53265717">+45-53265717</a>
						</p>

						<p>
							Website:{' '}
							<a href="https://nishasportfolio.netlify.com/" target="_blank" rel="noopener  noreferrer">
								nishasportfolio
							</a>
						</p>
					</div>

					<div className="project-description">
						<div className="project-1-description">
							<p>solo project - built a cloning website</p>
						</div>
						<div className="project-2-description">
							<p>solo project - built a cloning website</p>
						</div>
						<div className="project-3-description">
							<p>group project - built a cloning website</p>
						</div>
						<div className="project-4-description">
							<p>group project - built a cloning website</p>
						</div>
					</div>
				</div>

				{/* <div className="first">
						
					</div> */}

				{/* <div className="second">
						
					</div> */}
				{/* <div className="third">
						
					</div> */}
			</div>
		);
	}
}
