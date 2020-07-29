import React, { Component } from 'react';
import ExperienceContainer from './ExperienceContainer';
import expData from './experienceData';

export default class ResumeRightProjects extends Component {
	render() {
		const experienceComponent = expData.map((exp) => (
			<ExperienceContainer
				date={exp.date}
				title={exp.title}
				project={exp.project}
				description={exp.description}
				links={exp.links}
			/>
		));
		return (
			<article id="second">
				<hr className="hr-mobile-view" />
				<h2 className="h2-experience">experience</h2>
				<hr className="move-hr" />
				{experienceComponent}
			</article>
		);
	}
}
