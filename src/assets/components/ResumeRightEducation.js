import React, { Component } from 'react';
import EducationContainer from './EducationContainer';
import educationData from './educationData';

export default class ResumeRightEducation extends Component {
	render() {
		const educationComponent = educationData.map((data) => (
			<EducationContainer date={data.date} name={data.name} education={data.education} />
		));
		return (
			<article id="third">
				<h3>education</h3>
				<hr className="move-hr" />

				{educationComponent}
			</article>
		);
	}
}
