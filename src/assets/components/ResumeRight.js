import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import './resumeRight.css';

export default class ResumeRight extends Component {
	render() {
		const scrollToTop = () => {
			scroll.scrollToTop();
		};

		return (
			<section id="resume-right-container">
				<nav className="nav-item">
					{/* <Link className="link-item" activeClass="active" to="first" spy={true} smooth={true} offset={0} duration={1000}>
						Top
					</Link> */}

					<Link className="link-item" activeClass="active" to="second" spy={true} smooth={true} offset={0} duration={1000}>
						Experience
					</Link>

					<Link className="link-item" activeClass="active" to="third" spy={true} smooth={true} offset={0} duration={1000}>
						Education
					</Link>
				</nav>

				<div>
					<div id="first">
						<header>
							<h2>front-end web developer</h2>
						</header>

						<hr />

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

					<div id="second">
						<div id="projects-container">
							<div className="project-1 projects left-section">
								<h3 className="h3-underline underline">experience</h3>
								<p>October 2019 - November 2019</p>
								<p>front-end web developer</p>
								<p>chingu-voyage 12</p>
								<hr />
							</div>

							<div className="project-1-description project-description">
								<hr />
								<p className="project-first-p">
									Built a cloned Vaersgo website as my second solo project -{' '}
									<a href=" https://vaersgo.netlify.com/" target="_blank" rel="noopener  noreferrer">
										Cloned-Værsgo
									</a>{' '}
									using React. I have practiced my basic React knowledge while building this product.
									The final product is deployed using Netlify. Github repository link - {' '}
									<a
										href="https://github.com/chingu-voyages/v12-solo-NishaVijai"
										target="_blank"
										rel="noopener  noreferrer"
									>
										V12-Solo-project
									</a>{' '}
								</p>
							</div>
						</div>

						<div id="projects-container">
							<div className="project-2 projects left-section">
								<p>September 2019 - October 2019</p>
								<p>front-end web developer</p>
								<p>chingu-voyage 11</p>
								<hr />
							</div>

							<div className="project-2-description project-description">
								<p>
									My first solo project to build a cloned Kickstarter website -{' '}
									<a
										href="https://cloned-kickstarter.netlify.com/"
										target="_blank"
										rel="noopener  noreferrer"
									>
										Cloned-Kickstarter
									</a>{' '}
									using React. Learned to deploy the final product using Netlify. Github repository
									link - {' '}
									<a
										href="https://github.com/chingu-voyages/v11-solo-NishaVijai"
										target="_blank"
										rel="noopener  noreferrer"
									>
										V11-Solo-project
									</a>{' '}
								</p>
							</div>
						</div>

						<div id="projects-container">
							<div className="project-3 projects left-section">
								<p>June 2019 - July 2019</p>
								<p>front-end web developer</p>
								<p>chingu-voyage 09 - group project</p>
								<hr />
							</div>

							<div className="project-3-description project-description">
								<p>
									First time experience to build a dynamic web app using REACT with two remote team
									members. One of the team member chose an app from Dribbble. We have divided the
									components and built a final MVP together -{' '}
									<a
										href="https://chingu-shoe-project.herokuapp.com/"
										target="_blank"
										rel="noopener  noreferrer"
									>
										Shoe Web App
									</a>{' '}
									I learned using react state, while working on this project. We used Heroku to deploy
									our final product. Github repository link -{' '}
									<a
										href="https://github.com/chingu-voyages/v9-toucans-team-14"
										target="_blank"
										rel="noopener  noreferrer"
									>
										V09-toucans-team-14
									</a>{' '}
								</p>
							</div>
						</div>

						<div id="projects-container">
							<div className="project-4 projects left-section">
								<p>May 2019</p>
								<p>front-end web developer</p>
								<p>chingu-voyage 09 - prework-solo-project</p>
								<hr />
							</div>

							<div className="project-4-description project-description">
								<p>
									Pre-work solo project experience to build a chrome extension for the first time. It
									is called -{' '}
									<a
										href="https://nishavijai.github.io/Chingu-09-prework-project/"
										target="_blank"
										rel="noopener  noreferrer"
									>
										INITAB
									</a>{' '}
									using HTML,CSS and JavaScript. Used GitHub io to deploy the final version. Github
									repository link -{' '}
									<a
										href="https://github.com/NishaVijai/Chingu-09-prework-project"
										target="_blank"
										rel="noopener  noreferrer"
									>
										V09-pre-work Solo Project
									</a>{' '}
								</p>
							</div>
						</div>

						<div id="projects-container">
							<div className="project-5 projects left-section">
								<p>March 2019 - April 2019</p>
								<p>front-end web developer</p>
								<p>chingu-voyage 08 - group project</p>
								<hr />
							</div>

							<div className="project-5-description project-description">
								<p>
									First ever group project working with two remote team members from England and
									Uganda. We build a static cloned Chingu website using HTML, CSS and JavaScript {' '}
									<a
										href="https://chingu-voyages.github.io/v8-toucans-team-09/"
										target="_blank"
										rel="noopener  noreferrer"
									>
										Cloned Chingu Website
									</a>{' '}
									. We used GitHub io to deploy our webpage. Github repository link - {' '}
									<a
										href="https://github.com/chingu-voyages/v8-toucans-team-09"
										target="_blank"
										rel="noopener  noreferrer"
									>
										V08-toucans-team-09
									</a>{' '}
								</p>
							</div>
						</div>

						<div id="projects-container">
							<div className="project-6 projects left-section">
								<p>February 2019</p>
								<p>front-end web developer</p>
								<p>chingu-voyage 08 - prework-solo-project</p>
								<hr />
							</div>

							<div className="project-6-description project-description">
								<p>
									Learned to build first solo project{' '}
									<a
										href="https://nishavijai.github.io/pre-work-solo-project/"
										target="_blank"
										rel="noopener  noreferrer"
									>
										TickyBot
									</a>{' '}
									using HTML, CSS and Vanilla JavaScript. Gained my first experience to deploy a
									website using GitHub io. Github repository link -{' '}
									<a
										href="https://github.com/NishaVijai/pre-work-solo-project"
										target="_blank"
										rel="noopener  noreferrer"
									>
										V08-pre-work Solo Project
									</a>{' '}
								</p>
							</div>
						</div>
					</div>

					<button className="to-top-button" onClick={scrollToTop}> Top </button>

					<div id="third">
						<div id="education-container">
							<div className="education-1 degrees left-section">
								<h3 className="h3-underline underline">education</h3>
								<p>August 2017 - January 2018</p>
								<p>M.Sc. Programme</p>
							</div>

							<div className="education-1-description project-description">
								<hr />
								<h4>description</h4>
								<p>First semester at ITU - M.Sc. programme Software Development, Advanced Computing</p>
							</div>
						</div>

						<div id="education-container">
							<div className="education-2 degrees left-section">
								<p>August 2016 - January 2017</p>

								<p>
									Pædagog-<br />uddannelsen UCC
								</p>
							</div>

							<div className="education-2-description project-description">
								<h4>description</h4>
								<p>First semester at Pædagoguddannelsen UCC- Hillerød</p>
							</div>
						</div>

						<div id="education-container">
							<div className="education-3 degrees left-section">
								<p>August 2014 - May 2015</p>

								<p>FIF kursus - UCC</p>
							</div>

							<div className="education-3-description project-description">
								<h4>description</h4>
								<p>Forberedelseskursus for indvandrere og flygtninge på UCC- Skovlunde</p>
							</div>
						</div>

						<div id="education-container">
							<div className="education-4 degrees left-section">
								<p>2003 - 2006</p>

								<p>MCA - Bharathidasan University - India</p>
							</div>

							<div className="education-4-description project-description">
								<h4>description</h4>
								<p>Master of Computer Applications</p>
							</div>
						</div>

						<div id="education-container">
							<div className="education-5 degrees left-section">
								<p>2000 - 2003</p>

								<p>BCA - Jamal Mohamed College - Bharathidasan University - India</p>
							</div>

							<div className="education-5-description project-description">
								<h4>description</h4>
								<p>Bachelor of Computer Applications</p>
							</div>
						</div>

						<div id="education-container">
							<div className="education-6 degrees left-section">
								<p>1998 - 2000</p>

								<p>St.Joseph's Girl's Higher Secondary School - India</p>
							</div>

							<div className="education-6-description project-description">
								<h4>description</h4>
								<p>Higher Secondary Schooling</p>
							</div>
						</div>

						<div id="education-container">
							<div className="education-7 degrees left-section">
								<p>1993 - 1998</p>

								<p>St.Joseph's Girl's Higher Secondary School - India</p>
							</div>

							<div className="education-7-description project-description">
								<h4>description</h4>
								<p>Secondary Schooling</p>
							</div>
						</div>

						<div id="education-container">
							<div className="education-8 degrees left-section">
								<p>1988 - 1993</p>

								<p>Railway School - India</p>
							</div>

							<div className="education-8-description project-description">
								<h4>description</h4>
								<p>Primary Schooling</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		);
	}
}
