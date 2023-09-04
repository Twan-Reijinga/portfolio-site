import mazeSwapImg from '$lib/assets/images/mazeswap.png';

interface Project {
	title: string;
	date: string;
	discription?: string;
	comment?: string;
	languages?: string[];
	fakeFileName?: string;
	img?: string;
	url?: string;
	cardType: 'full' | 'small';
}

const projects: Project[] = [
	{
		title: 'This Portfolio site',
		date: '04 sep. 2023',
		discription:
			'The site you are currently visiting is version 3 of my personalized portfolio website. I had the design already sitting for years, and I always like to improve on my already nice portfolio site. This was the first time using Svelte to make something and it realy suprized me how much details and animation are now at my fingertips that where not possible without! Like the keyframing of the earth and moon on the top of this page took me ages but looks so nice now!',
		comment: 'Version 3',
		languages: ['CSS', 'TS', 'Svelte'],
		fakeFileName: 'Portfolio',
		url: 'github.com/Twan-Reijinga/portfolio-site',
		cardType: 'full'
	},
	{
		title: 'Metis GameJam 2023',
		date: '14 jul. 2023',
		discription: '...',
		languages: ['JS', 'P5'],
		fakeFileName: 'MetisJam',
		url: 'https://github.com/roembol2000/coderclass-gamejam-2023',
		cardType: 'full'
	},
	{
		title: 'MazeSwap',
		date: '09 jul. 2023',
		discription:
			'MazeSwap is a game made for the GMTK GameJam by Twan and Eliott. The GMTK GameJam is a online event where programmer all over the world build cool games in the span of 48 hours. The theme on the 2023 GMTK GameJam was ROLES REVERSED. MazeSwap is a game played by two people on the same keyboard. In MazeSwap you either have the role of hunter or runner. As the Runner you must get to the other side of the maze and press the button to locate the exit. Stay out of the way of the Hunter, or they will take your place. As the Hunter you must get close to the Runner and swap roles with them, thus becoming the Runner and turning the Runner into the Hunter.',
		comment: 'GMTK GameJam 2023',
		languages: ['JS', 'P5'],
		fakeFileName: 'MazeSwap',
		img: mazeSwapImg,
		url: 'github.com/Twan-Reijinga/MazeSwap',
		cardType: 'full'
	},
	{
		title: 'Slidify',
		date: '05 jul. 2023',
		discription:
			"The Slidify is a device meant to easily control music wirelessly from a mac/linux computer. This solves a number of problems. First, you never have to keep Spotify (or other music apps) open on your computer again, because all the info can be read right from the Slidify's display. This can be handy to save screen space. Another function is to control music while your monitor is off, for when you want to work focused without distraction from your computer, for example.",
		comment: 'Raspberry Pi music control!',
		languages: ['Python'],
		fakeFileName: 'Slidify',
		url: 'github.com/Twan-Reijinga/slidify',
		cardType: 'full'
	},
	{
		title: 'UvA Quatum Masterclass',
		date: '14 feb. 2023',
		cardType: 'small'
	},
	{
		title: 'App for Novanta',
		date: '10 feb. 2023',
		discription:
			'Novata is a Hotel in the Casentino Hills in Italy. In a group of three we made an app that solves two big problems for the hotel. Firstly, there are minibars all over the village owned by Novanta where people could take drinks from. In the app you could register which item you took on you name so that you can get the bill later. Secondly, the app functioned as a sign up for experiences the hotel provided, like getting a massage or renting a bike.',
		languages: ['React Native', 'Docker', 'TS', 'Postgress'],
		fakeFileName: 'Slidify',
		url: 'none',
		cardType: 'full'
	},
	{
		title: 'Orbital Assist Game',
		date: '08 jul. 2022',
		discription:
			'Orbital Assist is a game made by Adam, Roemer, Thijs and Twan for the GameJam of the Coderclass at Metis Montessori Lyceum 2022. On 8 July, everyone had seven hours to make a game that fits the theme 30 seconds. This game won in the category originality.',
		comment: '1st for originality at the Metis Gamejam 2022',
		languages: ['JS', 'P5'],
		fakeFileName: 'OrbitalAssist',
		url: 'github.com/Twan-Reijinga/orbital-assist-game',
		cardType: 'full'
	},
	{
		title: 'Multiplayer pixelnary',
		date: '07 jul. 2022',
		discription: '...',
		languages: ['JS', 'P5'],
		fakeFileName: 'Slidify',
		url: 'github.com/Twan-Reijinga/multiplayer-pixelnary',
		cardType: 'full'
	},
	{
		title: 'AI learns to drive',
		date: '22 jun. 2022',
		discription:
			'I made my own machine learning algorithm with reinforcement learning in JavaScript to let the AI drive a car in your own custom build circuit. With this project I learned how to create a network with nodes and worked with weights and biases that can mutate depending on a feedforward algorithm.',
		comment: 'First AI project!',
		languages: ['JS', 'P5'],
		fakeFileName: 'AiLearnsToDrive',
		url: 'github.com/Twan-Reijinga/AI-learns-to-drive',
		cardType: 'full'
	},
	{
		title: 'VU full C++ course',
		comment: 'Univerity course finished 3 years in advance',
		date: '16 dec. 2021',
		cardType: 'small'
	},
	{
		title: 'Coderclass basic certificate',
		comment: 'finished in 2.5 years',
		date: '23 jun. 2022',
		cardType: 'small'
	},
	{
		title: 'Problem Solving badge',
		date: '19 feb. 2021',
		discription: '...',
		languages: ['Python'],
		fakeFileName: 'ProblemSolving',
		url: 'github.com/Twan-Reijinga/problem-solving',
		cardType: 'full'
	},
	{
		title: 'Shopinglist telegram bot',
		date: '28 jan. 2021',
		discription: '...',
		languages: ['Python'],
		fakeFileName: 'ProblemSolving',
		url: 'github.com/Twan-Reijinga/shared-shoppinglist-bot-telegram',
		cardType: 'full'
	},
	{
		title: 'Internship Grafitiy',
		date: '15 dec. 2021',
		discription:
			'On my sniff internship I was able to develop an error dashboard for web and app development agency Grafity, who helped the development of sites like Bol.com. With this program I made, the server can send a post request if there is a problem with the server. The user will then receive a push notification on his phone, an email with the error and can view the dashboard for more information.',
		comment: 'first internship!',
		languages: ['JS'],
		fakeFileName: 'ErrorDashboard',
		url: 'github.com/Twan-Reijinga/Error-dashboard',
		cardType: 'full'
	},
	{
		title: 'Snake game',
		date: '09 nov. 2020',
		discription: '...',
		comment: 'first Browser Game!',
		languages: ['JS', 'P5'],
		fakeFileName: 'Snake',
		url: 'github.com/Twan-Reijinga/snake-game',
		cardType: 'full'
	},
	{
		title: 'Smart Light Simon Says',
		date: '21 jan. 2020',
		discription:
			'A game made on behalf of game development agency Q42 with 5 philips hue lights that are controlled with a browser program that plays tones and light up lamps. As a player, you need to press the right button combination. Each time you finish correctly one tone will be added. This project was made in a group of three and was meant for a school with death and blind childeren to play with.',
		languages: ['JS'],
		fakeFileName: 'SimonSays',
		url: 'github.com/Twan-Reijinga/simon-says-with-smart-lights',
		cardType: 'full'
	},
	{
		title: 'Unity Roll a Ball',
		date: '21 oct. 2020',
		discription:
			'First unity game where you control a ball that has to roll through a parcour of abstacles. Later that year I followed up with a plane flying game in unity.',
		languages: ['Unity'],
		fakeFileName: 'RollABall',
		url: 'github.com/Twan-Reijinga/unity-roll-a-ball-game',
		cardType: 'full'
	},
	{
		title: 'First Portfolio Website',
		date: '23 dec. 2019',
		discription: 'My first version of a portfolio website.',
		languages: ['CSS', 'JS'],
		fakeFileName: 'Portfolio',
		url: 'github.com/Twan-Reijinga/portfolio',
		cardType: 'full'
	}

	// {
	// 	title: 'slidify',
	// 	date: '20 jul. 2025',
	// 	discription:
	// 		"The Slidify is a device meant to easily control music wirelessly from a mac/linux computer. This solves a number of problems. First, you never have to keep spotify (or other music apps) open on your computer again, because all the info can be read right from the Slidify's display. This can be handy to save screen space. Another function is to control music while your monitor is off, for when you want to work focused without distraction from your computer, for example.",
	// 	fakeFileName: 'Slidify',
	// 	cardType: 'full'
	// }
];

export default projects;
