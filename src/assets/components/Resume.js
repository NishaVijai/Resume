import React, { Component } from 'react';
import ResumeLeft from './ResumeLeft';
import ResumeRight from './ResumeRight';

import './resume.css';

export default class Resume extends Component {
	render() {
		return (
			<div className="resume-container">
				<header>
					<h1 tabIndex="0">front-end web developer</h1>
					<p id="h1-hr" />
					<address id="first">
						<p tabIndex="0">
							Mail:{' '}
							<a href="mailto:nishavijai@gmail.com" title="Nisha's g-mail address">
								nishavijai@gmail.com
							</a>
						</p>

						<p tabIndex="0">
							Mobile:{' '}
							<a href="tel:+45-53265717" title="Nisha's mobile number">
								+45-53265717
							</a>
						</p>

						{/* <p tabIndex="0">
								Website:{' '}
								<a
									href="https://nishasportfolio.netlify.com/"
									target="_blank"
									rel="noopener  noreferrer"
								>
									nishasportfolio
								</a>
							</p> */}
					</address>
				</header>
				<aside>
					<ResumeLeft />
				</aside>

				<main>
					<ResumeRight />
				</main>
			</div>
		);
	}
}
