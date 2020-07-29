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
		description: [ 
			{id: 1,
			des: 'Built a cloned vaersgo single page website using HTML,CSS and React'} ],
		links: [
			{
				id: 1,
				projLink: 'https://github.com/chingu-voyages/v12-solo-NishaVijai',
				projImgLink: gitHubImage,
				altText: 'GitHub repository link of v12-solo project'
			},
			{
				id: 2,
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
		description: [ 
			{id: 1,
			des: 'Built a cloned kickstarter single page website using HTML,CSS and React'} ],
		links: [
			{
				id: 1,
				projLink: 'https://github.com/chingu-voyages/v11-solo-NishaVijai',
				projImgLink: gitHubImage,
				altText: 'GitHub repository link of v11-solo project'
			},
			{
				id: 2,
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
			{id: 1,
			des: 'Group project with two remote team members'},
			{id: 2,
			des: 'Built a dynamic web app to showcase shoes using HTML,CSS and React'},
			{id: 3,
			des: 'We divided the app into different components and used Trello for project management'}
		],
		links: [
			{
				id: 1,
				projLink: 'https://github.com/chingu-voyages/v9-toucans-team-14',
				projImgLink: gitHubImage,
				altText: 'GitHub repository link of v-09 group project'
			},
			{
				id: 2,
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
		description: [ 
			{id: 1,
			des: 'Built a chrome extension called INITAB using HTML,CSS and JavaScript'} ],
		links: [
			{
				id: 1,
				projLink: 'https://github.com/NishaVijai/Chingu-09-prework-project',
				projImgLink: gitHubImage,
				altText: 'GitHub repository link of Chingu-09 prework solo project'
			},
			{
				id: 2,
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
			{id: 1,
			des: 'Group project with two remote team members from England and Uganda'},
			{id: 2,
			des: 'Built a cloned Chingu single page website using HTML, CSS and JavaScript'},
			{id: 3,
			des: 'Used GitHub board to track our tasks'}
		],
		links: [
			{
				id: 1,
				projLink: 'https://github.com/chingu-voyages/v8-toucans-team-09',
				projImgLink: gitHubImage,
				altText: 'GitHub repository link of v-08 group project'
			},
			{
				id: 2,
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
		description: [ 
			{id: 1,
			des: 'Built TickyBot website using HTML, CSS and vanilla JavaScript'} ],
		links: [
			{
				id: 1,
				projLink: 'https://github.com/NishaVijai/pre-work-solo-project',
				projImgLink: gitHubImage,
				altText: 'GitHub repository link of v-08 prework solo project'
			},
			{
				id: 2,
				projLink: 'https://nishavijai.github.io/pre-work-solo-project/',
				projImgLink: gitHubHostedImage,
				altText: 'TickyBot hosted in Github pages'
			}
		]
	}
];

export default expData;
