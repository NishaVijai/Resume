import React from 'react';

export default function ResumeLeftLang(props) {
	return (
		<div>
			<div className="lang-title">
				<h2>{props.langTitle}</h2>
				<div className="languages">
					<p>{props.languages.map((la) => <p>{la}</p>)}</p>
				</div>
			</div>

			{props.children}
			{/* <hr /> */}
		</div>
	);
}
