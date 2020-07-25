import React from 'react';

export default function LinkContainer(props) {
	return (
		<div>
			<li>
				{props.textOne}{' '}
				<a href={props.link} target="_blank" rel="noopener  noreferrer">
					{props.name}
				</a>{' '}
				{props.textTwo}
			</li>
		</div>
	);
}
