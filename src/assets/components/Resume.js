import React, { Component } from 'react';
import ResumeLeft from './ResumeLeft';
import ResumeRight from './ResumeRight';

import './resume.css';

export default class Resume extends Component {
	render() {
		return (
			<div className="resume-container">
				<aside>
					<ResumeLeft />
				</aside>

				<main>
					<header>
						<h1>front-end web developer</h1>
					</header>

					<hr id="h1-hr" />
					<ResumeRight />
				</main>
			</div>
		);
	}
}
