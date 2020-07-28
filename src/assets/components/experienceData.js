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
			{
				projLink: 'https://github.com/chingu-voyages/v12-solo-NishaVijai',
				projImgLink: gitHubImage,
				altText: 'GitHub repository link of v12-solo project'
			},
			{
				projLink: 'https://vaersgo.netlify.com/',
				projImgLink: netlifyImage,
				altText: 'Cloned-Værsgo website hosted in Netlify'
			}
		]
	},
	{
		id: 2,
		date: 'September 2019 - October 2019',
		title: 'front-end web developer',
		project: 'chingu-voyage 11',
		description: [ 'Built a cloned kickstarter single page website using HTML,CSS and React' ],
		links: [
			{
				projLink: 'https://github.com/chingu-voyages/v11-solo-NishaVijai',
				projImgLink: gitHubImage,
				altText: 'GitHub repository link of v11-solo project'
			},
			{
				projLink: 'https://cloned-kickstarter.netlify.com/',
				projImgLink: netlifyImage,
				altText: 'Cloned-Kickstarter website hosted in Netlify'
			}
		]
	},
	{
		id: 3,
		date: 'June 2019 - July 2019',
		title: 'front-end web developer',
		project: 'chingu-voyage 09 - group project',
		description: [
			'Group project with two remote team members',
			'Built a dynamic web app to showcase shoes using HTML,CSS and React',
			'We divided the app into different components and used Trello for project management'
		],
		links: [
			{
				projLink: 'https://github.com/chingu-voyages/v9-toucans-team-14',
				projImgLink: gitHubImage,
				altText: 'GitHub repository link of v-09 group project'
			},
			{
				projLink: 'https://chingu-shoe-project.herokuapp.com/',
				projImgLink: herokuImage,
				altText: 'Shoe Web App hosted in Heroku'
			}
		]
	},
	{
		id: 4,
		date: 'May 2019',
		title: 'front-end web developer',
		project: 'chingu-voyage 09 - prework-solo-project',
		description: [ 'Built a chrome extension called INITAB using HTML,CSS and JavaScript' ],
		links: [
			{
				projLink: 'https://github.com/NishaVijai/Chingu-09-prework-project',
				projImgLink: gitHubImage,
				altText: 'GitHub repository link of Chingu-09 prework solo project'
			},
			{
				projLink: 'https://nishavijai.github.io/Chingu-09-prework-project/',
				projImgLink: gitHubHostedImage,
				altText: 'INITAB hosted in Github pages'
			}
		]
	},
	{
		id: 5,
		date: 'March 2019 - April 2019',
		title: 'front-end web developer',
		project: 'chingu-voyage 08 - group project',
		description: [
			'Group project with two remote team members from England and Uganda',
			'Built a cloned Chingu single page website using HTML, CSS and JavaScript',
			'Used GitHub board to track our tasks'
		],
		links: [
			{
				projLink: 'https://github.com/chingu-voyages/v8-toucans-team-09',
				projImgLink: gitHubImage,
				altText: 'GitHub repository link of v-08 group project'
			},
			{
				projLink: 'https://chingu-voyages.github.io/v8-toucans-team-09/',
				projImgLink: gitHubHostedImage,
				altText: 'Cloned Chingu website hosted in Github pages'
			}
		]
	},
	{
		id: 6,
		date: 'February 2019',
		title: 'front-end web developer',
		project: 'chingu-voyage 08 - prework-solo-project',
		description: [ 'Built TickyBot website using HTML, CSS and vanilla JavaScript' ],
		links: [
			{
				projLink: 'https://github.com/NishaVijai/pre-work-solo-project',
				projImgLink: gitHubImage,
				altText: 'GitHub repository link of v-08 prework solo project'
			},
			{
				projLink: 'https://nishavijai.github.io/pre-work-solo-project/',
				projImgLink: gitHubHostedImage,
				altText: 'TickyBot hosted in Github pages'
			}
		]
	}
];

export default expData;
