import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

import ResumeRightSecond from './ResumeRightSecond';
import ResumeRightSec from './ResumeRightSec';
import ResumeRightProjects from './ResumeRightProjects';
import ResumeRightThird from './ResumeRightThird';

import './resumeRight.css';
// import ResumeRightProjects from './ResumeRightProjects';

export default class ResumeRight extends Component {
	render() {
		const scrollToTop = () => {
			scroll.scrollTo(2);
		};

		const scrollToExperience = () => {
			scroll.scrollTo(200);
		};

		const scrollToEducation = () => {
			scroll.scrollTo(1150);
		};

		return (
			<section id="resume-right-container">
				<nav className="nav-item">
					<Link
						tabIndex="0"
						className="link-item"
						onKeyPress={scrollToExperience}
						activeClass="active"
						to="second"
						spy={true}
						smooth={true}
						offset={0}
						duration={1000}
					>
						Experience
					</Link>

					<Link
						tabIndex="0"
						className="link-item"
						onKeyPress={scrollToEducation}
						activeClass="active"
						to="third"
						spy={true}
						smooth={true}
						offset={0}
						duration={1000}
					>
						Education
					</Link>
				</nav>

				<div className="right-side-container">

					<hr className="hr-mobile-view" />
					{/* <ResumeRightSecond /> */}
					{/* <ResumeRightSec /> */}
					<ResumeRightProjects />

					<hr className="hr-mobile-view" />
					<ResumeRightThird />

					<button tabIndex="0" className="to-top-button" onKeyPress={scrollToTop} onClick={scrollToTop}>
						{' '}
						Top{' '}
					</button>
				</div>
			</section>
		);
	}
}
