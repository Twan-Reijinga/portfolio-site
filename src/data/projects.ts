import mazeSwapImg from '$lib/assets/images/mazeswap.png';
import traficSimImg from '$lib/assets/images/traficSim.png';
import slidifyImg from '$lib/assets/images/slidify.jpeg';
import novantaImg from '$lib/assets/images/novataApp.png';
import orbitalImg from '$lib/assets/images/obitalAssist.png';

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
		title: 'SeaFishilization',
		date: '08 apr. 2024',
		discription:
			"Sea Fishilazition is a game inspired on Civilization (VI) made for the FishFest GameJam by Maurits, Midas and Twan. We made this game using C++ and Raylib. Defend your city against waves of enemy's. Every X seconds a wave of enemy's spawn who wants to destroy your castle. It's your task to defend the castle. You have to do so by training units and placing tiles to improve production. The more waves you survive the bigger and stronger the waves get.",
		comment: 'FishFest GameJam',
		languages: ['C++'],
		fakeFileName: 'SeaFishilization',
		url: 'github.com/Twan-Reijinga/SeaFishilization',
		cardType: 'full'
	},
	{
		title: 'PWS AI Trafic Lights',
		date: '01 feb. 2024',
		discription:
			'Our PWS (ProfielWerkStuk) research is focused on optimizing the traffic light system with artificial intelligence. For this purpose, we built a traffic simulation and controlled it with a reinforcement learning algorithm. Traffic lights are essential in our society worldwide. With the increasing number of road users, traffic light optimization is becoming an increasingly urgent issue. Great advances in technology and artificial intelligence offer opportunities to address this issue. Behind our current traffic lights are already complex algorithms that continuously make calculations to guide everyone from A to B as smoothly as possible. But how do these algorithms work? How can artificial intelligence improve this? Which algorithms are best suited? And what data does artificial intelligence need for efficient flow? These questions are at the heart of our comprehensive research.',
		comment: '247 hours to make the PWS of our dreams',
		languages: ['Unity', 'Python'],
		fakeFileName: 'AITraficLights',
		img: traficSimImg,
		url: 'github.com/Twan-Reijinga/TrafficLight-AI',
		cardType: 'full'
	},
	{
		title: 'This Portfolio site',
		date: '04 sep. 2023',
		discription:
			'The site you are currently visiting is version 3 of my personalized portfolio website. I had the design already sitting for years, and I always like to improve on my already nice portfolio site. This was the first time using Svelte to make something and it realy suprized me how much details and animation are now at my fingertips that where not possible before! Like the keyframing of the earth and moon on the top of this page took me ages, but looks so nice now! Hope you like it too :)',
		comment: 'Version 3',
		languages: ['CSS', 'TS', 'Svelte'],
		fakeFileName: 'Portfolio',
		url: 'github.com/Twan-Reijinga/portfolio-site',
		cardType: 'full'
	},
	{
		title: 'Metis GameJam 2023',
		date: '14 jul. 2023',
		discription:
			'In a team of four, we developed a game for the second Metis GameJam. Our previous game was a big success and won #1 for orinality, so we had high hopes. The theme was RITUALS. That was a difficult theme for us, because we had no inspiration. We build a game that looks frindly. You need to take as much friends with you as you can find, but nothing is as it seams...',
		languages: ['JS', 'P5'],
		fakeFileName: 'MetisJam',
		url: 'github.com/roembol2000/coderclass-gamejam-2023',
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
		img: slidifyImg,
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
		img: novantaImg,
		url: 'none',
		cardType: 'full'
	},
	{
		title: 'Orbital Assist Game',
		date: '08 jul. 2022',
		discription:
			'Orbital Assist is a game made by Adam, Roemer, Thijs and Twan for the GameJam of the Coderclass at Metis Montessori Lyceum 2022. On 8 July, everyone had seven hours to make a game that fits the theme 30 seconds. This game won in the category originality.',
		comment: '#1 originality Metis Gamejam 2022',
		languages: ['JS', 'P5'],
		fakeFileName: 'OrbitalAssist',
		img: orbitalImg,
		url: 'github.com/Twan-Reijinga/orbital-assist-game',
		cardType: 'full'
	},
	{
		title: 'Multiplayer pixelnary',
		date: '07 jul. 2022',
		discription:
			'Multiplayer pixelnary was my first project where I tried to work with websockets to make a multiplayer game. The comsept is simple: like pixelnary you get something to draw, and you have to make a pixelart. The other persons in the group can guess. Next round someone else can draw. You can join server with codes and make your own.',
		languages: ['JS', 'P5', 'NodeJS'],
		fakeFileName: 'Slidify',
		url: 'github.com/Twan-Reijinga/multiplayer-pixelnary',
		cardType: 'full'
	},
	{
		title: 'AI learns to drive',
		date: '22 jun. 2022',
		discription:
			'I made my own machine learning algorithm with reinforcement learning in JavaScript to let the AI drive a car in a circuit and optimaze for the best route. With this project I learned how to create a neural network with nodes and worked with weights, biases, mutations and the feedforward algorithm.',
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
	// {
	// 	title: 'Problem Solving challanges',
	// 	comment: 'Worked on challanging codeForces problems',
	// 	date: '19 feb. 2021',
	// 	languages: ['Python'],
	// 	fakeFileName: 'ProblemSolving',
	// 	url: 'github.com/Twan-Reijinga/problem-solving',
	// 	cardType: 'small'
	// },
	{
		title: 'Shopinglist telegram bot',
		date: '28 jan. 2021',
		discription:
			"To get a better understanding about API's, I created a Telegram bot that listens to commands to modify a shopping list. You can create groups, add people to the group and add items and delete things from it when you are in the grocery store.",
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
		discription:
			'For an end project for game development in P5, I made a Snake game for the Arcade at Metis. It keeps track of the highscore and speed can be controlled via the main menu.',
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
			'First Unity game where you control a ball that has to roll through a parcour of abstacles. Later that year I followed up with a plane flying game in unity.',
		languages: ['Unity'],
		fakeFileName: 'RollABall',
		url: 'github.com/Twan-Reijinga/unity-roll-a-ball-game',
		cardType: 'full'
	},
	{
		title: 'First Portfolio Website',
		date: '23 dec. 2019',
		discription: 'My first version of this portfolio website.',
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
