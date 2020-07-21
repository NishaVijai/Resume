import React, { Component } from 'react';
import './resumeLeft.css';

export default class ResumeLeft extends Component {
	render() {
		return (
			<section className="resume-left">
				<div className="personal">
					<h2>personal</h2>
					<p>
						self-taught front-end developer. Made few projects and obtained certificates from{' '}
						<a href="https://chingu.io/" target="_blank" rel="noopener  noreferrer">
							CHINGU-voyage
						</a>. Currently, working on 30DaysOfCode challenges. Additionally learning Python and Advanced
						CSS.
					</p>
				</div>

				<hr />

				<div className="front-end">
					<h2>front-end</h2>
					<div className="front-end-lang">
						<div>
							<p>html</p>							
							<div className="side-line">
								<div className="fill-in fill-80">80%</div>
							</div>
						</div>

						<div>
							<p>css</p>							
							<div className="side-line">
								<div className="fill-in fill-70">70%</div>
							</div>					
						</div>

						<div>
							<p>javascript</p>
							<div className="side-line">
								<div className="fill-in fill-60">60%</div>
							</div>
						</div>

						<div>
							<p>react</p>
							<div className="side-line">
								<div className="fill-in">50%</div>
							</div>
						</div>
					</div>
				</div>

				<hr />

				<div className="back-end">
					<h2>back-end</h2>
					<div className="back-end-lang">
						<p>python</p>
						<div className="side-line">
							<div className="fill-in">50%</div>
						</div>
					</div>
				</div>

				<hr />

				<div className="languages">
					<h2>languages</h2>
					<div className="lang">
						<p>english</p>
						<div className="side-line">
							<div className="fill-in fill-70">70%</div>
						</div>

						<p>danish</p>
						<div className="side-line">
							<div className="fill-in fill-60">60%</div>
						</div>

						<p>tamil</p>
						<div className="side-line">
							<div className="fill-in fill-90">90%</div>
						</div>

						<p>hindi</p>
						<div className="side-line">
							<div className="fill-in">50%</div>
						</div>

						<p>urdu</p>
						<div className="side-line">
							<div className="fill-in">50%</div>
						</div>
					</div>
				</div>

				<hr />
			</section>
		);
	}
}
