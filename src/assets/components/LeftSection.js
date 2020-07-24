import React from 'react';

export default function LeftSection(props) {
	return (
		<div className="project-1 projects left-section">
			<p>{props.date}</p>
			<p>{props.title}</p>
			<p>{props.project}</p>
		</div>
	);
}

// import React, { Component } from 'react'

// export default class LeftSection extends Component {
// 	render() {
// 		return (
// 		<div className="project-1 projects left-section">
// 			<p>{this.props.leftData.date}</p>
// 			<p>{this.props.leftData.title}</p>
// 			<p>{this.props.leftData.project}</p>
// 			<p>{this.props.leftData.hobby.map((hob, id) => <li key={id} >{hob} </li> )}</p>
// 		</div>
// 		)
// 	}
// }
