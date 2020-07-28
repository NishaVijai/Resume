import gitHubImage from '../images/github.svg';
import gitHubHostedImage from '../images/github-hosted.svg';
import netlifyImage from '../images/netlify.svg';
import herokuImage from '../images/heroku.svg';

const expData = [
	{
		id: 1,
		date: 'October 2019 - November 2019',
		title: 'front-end web developer',
		project: 'chingu-voyage 12',
		description: [ 'Built a cloned vaersgo single page website using HTML,CSS and React' ],
		links: [
			{projLink: 'https://github.com/chingu-voyages/v12-solo-NishaVijai', projImgLink: gitHubImage, altText: 'GitHub repository link of v12-solo project'},
			{projLink: 'https://vaersgo.netlify.com/', projImgLink: netlifyImage, altText: 'Cloned-Værsgo website hosted in Netlify'}
			]
        
		// linkOne: [
		//     {text: "Built a cloned vaersgo website",
		//     url: "https://github.com/chingu-voyages/v12-solo-NishaVijai",
		//     name: "V12-Solo-project",
		//     lastText: "using HTML,CSS and React"},
		//     {text: "vaersgo website",
		//     url: "https://vaersgo.netlify.com/",
		//     name: "Cloned-Værsgo",
		//     lastText: "in Netlify"}
		// ]
	}
	,
	{
	id: 2,
	date: 'September 2019 - October 2019',
	title: 'front-end web developer',
	project: 'chingu-voyage 11',
	description: [ 'Built a cloned kickstarter single page website using HTML,CSS and React' ],
		links: [
			{projLink: 'https://github.com/chingu-voyages/v11-solo-NishaVijai', projImgLink: gitHubImage, altText: 'GitHub repository link of v11-solo project'},
			{projLink: 'https://cloned-kickstarter.netlify.com/', projImgLink: netlifyImage, altText: 'Cloned-Kickstarter website hosted in Netlify'}
			]
	// linkOne: [
	//     {text: "Built a cloned kickstarter website",
	//     url: "https://github.com/chingu-voyages/v11-solo-NishaVijai",
	//     name: "V11-Solo-project",
	//     lastText: "using HTML,CSS and React"},
	//     {text: "Hosted kickstarter",
	//     url: "https://cloned-kickstarter.netlify.com/",
	//     name: "Cloned-Kickstarter",
	//     lastText: "in Netlify"}
	// ]
	}
	,
	{
	id: 3,
	date: 'June 2019 - July 2019',
	title: 'front-end web developer',
	project: 'chingu-voyage 09 - group project',
	description: [ 'Group project with two remote team members', 'Built a dynamic web app to showcase shoes using HTML,CSS and React', 'We divided the app into different components and used Trello for project management' ],
		links: [
			{projLink: 'https://github.com/chingu-voyages/v9-toucans-team-14', projImgLink: gitHubImage, altText: 'GitHub repository link of v-09 group project'},
			{projLink: 'https://chingu-shoe-project.herokuapp.com/', projImgLink: herokuImage, altText: 'Shoe Web App hosted in Heroku'}
			]
	// linkOne: [
	//     {textFirst: "Group project with two remote team members"},
	//     {text: "Built a dynamic web app",
	//     url: "https://github.com/chingu-voyages/v9-toucans-team-14",
	//     name: "V09-toucans-team-14",
	//     lastText: "to showcase shoes using HTML,CSS and React"},
	//     {textThird: "We divided the app to different components and used Trello for project management"},
	//     {text: "Hosted shoe app",
	//     url: "https://chingu-shoe-project.herokuapp.com/",
	//     name: "Shoe Web App",
	//     lastText: "in Heroku"}
	// ]
	}
	,
	{
	id: 4,
	date: 'May 2019',
	title: 'front-end web developer',
	project: 'chingu-voyage 09 - prework-solo-project',
	description: [ 'Built a chrome extension called INITAB using HTML,CSS and JavaScript'],
		links: [
			{projLink: 'https://github.com/NishaVijai/Chingu-09-prework-project', projImgLink: gitHubImage, altText: "GitHub repository link of Chingu-09 prework solo project"},
			{projLink: 'https://nishavijai.github.io/Chingu-09-prework-project/', projImgLink: gitHubHostedImage, altText: 'INITAB hosted in Github pages'}
			]
	// linkOne: [
	//     {text: "Built a chrome extension called INITAB",
	//     url: "https://github.com/NishaVijai/Chingu-09-prework-project",
	//     name: "V09-pre-work Solo Project",
	//     lastText: "using HTML,CSS and JavaScript"},
	//     {text: "Hosted INITAB",
	//     url: "https://nishavijai.github.io/Chingu-09-prework-project/",
	//     name: "INITAB",
	//     lastText: "in Github pages"}
	// ]
	}
	,
	{
	id: 5,
	date: 'March 2019 - April 2019',
	title: 'front-end web developer',
	project: 'chingu-voyage 08 - group project',
	description: [ 'Group project with two remote team members from England and Uganda', 'Built a cloned Chingu single page website using HTML, CSS and JavaScript', 'Used GitHub board to track our tasks'],
		links: [
			{projLink: 'https://github.com/chingu-voyages/v8-toucans-team-09', projImgLink: gitHubImage, altText: 'GitHub repository link of v-08 group project'},
			{projLink: 'https://chingu-voyages.github.io/v8-toucans-team-09/', projImgLink: gitHubHostedImage, altText: 'Cloned Chingu website hosted in Github pages'}
			]
	// linkOne: [
	//     {textFirst: "Group project with two remote team members from England and Uganda"},
	//     {text: "Built cloned Chingu website",
	//     url: "https://github.com/chingu-voyages/v8-toucans-team-09",
	//     name: "V08-toucans-team-09",
	//     lastText: "using HTML, CSS and JavaScript"},
	//     {textThird: "Used GitHub board to track our tasks"},
	//     {text: "Hosted chingu website",
	//     url: "https://chingu-voyages.github.io/v8-toucans-team-09/",
	//     name: "Cloned Chingu Website",
	//     lastText: "in Github pages"}
	// ]
	}
	,
	{
	id: 6,
	date: 'February 2019',
	title: 'front-end web developer',
	project: 'chingu-voyage 08 - prework-solo-project',
	description: [ 'Built TickyBot website using HTML, CSS and vanilla JavaScript'],
		links: [
			{projLink: 'https://github.com/NishaVijai/pre-work-solo-project', projImgLink: gitHubImage, altText: 'GitHub repository link of v-08 prework solo project'},
			{projLink: 'https://nishavijai.github.io/pre-work-solo-project/', projImgLink: gitHubHostedImage, altText: 'TickyBot hosted in Github pages'}
			]
	// linkOne: [
	//     {text: "Built TickyBot",
	//     url: "https://github.com/NishaVijai/pre-work-solo-project",
	//     name: "V08-pre-work Solo Project",
	//     lastText: "using HTML, CSS and vanilla JavaScript"},
	//     {text: "Hosted TickyBot",
	//     url: "https://nishavijai.github.io/pre-work-solo-project/",
	//     name: "TickyBot",
	//     lastText: "in Github pages"}
	// ]
	}
];

export default expData;
