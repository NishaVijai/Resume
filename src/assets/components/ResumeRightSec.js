import React, { Component } from 'react';
import LeftSection from './LeftSection';
// import ProjectDescription from './ProjectDescription';
import leftData from './leftData';
// import ProjectsContainer from './ProjectsContainer';

export default class ResumeRightSec extends Component {
	render() {
		const leftSectionExperience = leftData.map((data) => (
			<LeftSection date={data.date} title={data.title} project={data.project} />
		));

		return (
			<article id="second">
				<h2 className="h2-experience">experience</h2>
				<div className="projects-container">
					<div>{leftSectionExperience}</div>

					<div className="project-description-container">
                    <hr className="move-up-hr" />

						<div className="project-1-description project-description">
							{/* <hr className="move-up-hr" /> */}
							<ul className="move-top-padding">
								<li>
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
								</li>
							</ul>
						</div>

						<div className="project-2-description project-description">
							<ul className="move-top-padding">
								<li>
									Built a cloned kickstarter website{' '}
									<a
										href="https://github.com/chingu-voyages/v11-solo-NishaVijai"
										target="_blank"
										rel="noopener  noreferrer"
									>
										V11-Solo-project
									</a>{' '}
									using HTML,CSS and React
								</li>
								<li>
									Hosted kickstarter
									<a
										href="https://cloned-kickstarter.netlify.com/"
										target="_blank"
										rel="noopener  noreferrer"
									>
										Cloned-Kickstarter
									</a>{' '}
									in Netlify
								</li>
							</ul>
						</div>

						<div className="project-3-description project-description">
							<ul className="move-top-padding">
								<li>Group project with two remote team members</li>
								<li>
									Built a dynamic web app{' '}
									<a
										href="https://github.com/chingu-voyages/v9-toucans-team-14"
										target="_blank"
										rel="noopener  noreferrer"
									>
										V09-toucans-team-14
									</a>{' '}
									to show case shoes using HTML,CSS and React
								</li>
								<li>
									We divided the app to diffrent components and used Trello for project management
								</li>
								<li>
									Hosted shoe app{' '}
									<a
										href="https://chingu-shoe-project.herokuapp.com/"
										target="_blank"
										rel="noopener  noreferrer"
									>
										Shoe Web App
									</a>{' '}
									in Heroku
								</li>
							</ul>
						</div>

						<div className="project-4-description project-description">
							<ul className="move-top-padding">
								<li>
									Built a chrome extension called INITAB{' '}
									<a
										href="https://github.com/NishaVijai/Chingu-09-prework-project"
										target="_blank"
										rel="noopener  noreferrer"
									>
										V09-pre-work Solo Project
									</a>{' '}
									using HTML,CSS and JavaScript
								</li>
								<li>
									Hosted INITAB{' '}
									<a
										href="https://nishavijai.github.io/Chingu-09-prework-project/"
										target="_blank"
										rel="noopener  noreferrer"
									>
										INITAB
									</a>{' '}
									in Github pages
								</li>
							</ul>
						</div>

						<div className="project-5-description project-description">
							<ul className="move-top-padding">
								<li>Group project with two remote team members from England and Uganda</li>
								<li>
									Built cloned Chingu website{' '}
									<a
										href="https://github.com/chingu-voyages/v8-toucans-team-09"
										target="_blank"
										rel="noopener  noreferrer"
									>
										V08-toucans-team-09
									</a>{' '}
									using HTML, CSS and JavaScript
								</li>
								<li>Used GitHub board to track our tasks</li>
								<li>
									Hosted chingu website{' '}
									<a
										href="https://chingu-voyages.github.io/v8-toucans-team-09/"
										target="_blank"
										rel="noopener  noreferrer"
									>
										Cloned Chingu Website
									</a>in Github pages
								</li>
							</ul>
						</div>

						<div className="project-6-description project-description">
							<ul className="move-top-padding">
								<li>
									Built TickyBot{' '}
									<a
										href="https://github.com/NishaVijai/pre-work-solo-project"
										target="_blank"
										rel="noopener  noreferrer"
									>
										V08-pre-work Solo Project
									</a>{' '}
									using HTML, CSS and vanilla JavaScript.
								</li>
								<li>
									Hosted TickyBot{' '}
									<a
										href="https://nishavijai.github.io/pre-work-solo-project/"
										target="_blank"
										rel="noopener  noreferrer"
									>
										TickyBot
									</a>{' '}
									in Github pages
								</li>
							</ul>
						</div>
					</div>
				</div>
			</article>
		);
	}
}
