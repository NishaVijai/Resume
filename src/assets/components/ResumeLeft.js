import React, { Component } from 'react';
import ResumeLeftLang from './ResumeLeftLang';

import langData from './langData';

import './resumeLeft.css';

export default class ResumeLeft extends Component {
	render() {
		const languageComponent = langData.map((data) => (
			<ResumeLeftLang langTitle={data.langTitle} languages={data.languages} />
		));
		return (
			<section className="resume-left">
				<div className="personal">
					<h2>personal</h2>
					<p>
						A self-motivated, creative, and ambitious individual with Masters degree in Computer
						Applications, as well as knowledge and proficiency in JavaScript, React, Semantic HTML, CSS, and
						mobile responsive website development.
					</p>
				</div>

				<hr />

				{languageComponent}
			</section>
		);
	}
}
