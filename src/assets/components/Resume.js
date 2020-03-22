import React, { Component } from 'react';
import ResumeLeft from './ResumeLeft';
import ResumeRight from './ResumeRight';

import './resume.css';

export default class Resume extends Component {
	render() {
		return (
			<div className="resume-container">
				<div>
					<ResumeLeft />
				</div>

				<div>
					<ResumeRight />
				</div>
			</div>
		);
	}
}
