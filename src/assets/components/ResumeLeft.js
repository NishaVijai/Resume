import React, { Component } from 'react';
import langData from './langData';

import './resumeLeft.css';
import ResumeLeftLang from './ResumeLeftLang';

export default class ResumeLeft extends Component {
	render() {
		const languageComponent = langData.map((data) => <ResumeLeftLang langTitle = {data.langTitle} languages={data.languages} />)
		return (
			<section className="resume-left">
				<div className="personal">
					<h2>personal</h2>
					<p>A self-motivated, creative, and ambitious individual with Masters degree in Computer Applications, as well as knowledge and proficiency in JavaScript, React, Semantic HTML, CSS, and mobile responsive website development.</p>
				</div>

				<hr />

				{languageComponent}
				{/* <div className="front-end">
					<h2>front-end</h2>
					<div className="front-end-lang">
						<div>
							<p>html</p>
						</div>

						<div>
							<p>css - Tailwind & Bulma </p>
						</div>

						<div>
							<p>react</p>
						</div>

						<div>
							<p>javascript</p>
						</div>
					</div>
				</div> */}

				{/* <hr />

				<div className="back-end">
					<h2>back-end</h2>
					<div className="back-end-lang">
						<p>python</p>
					</div>
				</div>

				<hr />

				<div className="languages">
					<h2>languages</h2>
					<div className="lang">
						<p>english</p>

						<p>danish</p>

						<p>tamil</p>

						<p>hindi</p>

						<p>urdu</p>
					</div>
				</div>

				<hr /> */}
			</section>
		);
	}
}
