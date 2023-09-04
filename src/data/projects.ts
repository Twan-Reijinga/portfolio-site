import mazeSwapImg from '$lib/assets/images/mazeswap.png';

interface Project {
	title: string;
	date: string;
	discription?: string;
	comment?: string;
	languages?: string[];
	fakeFileName?: string;
	img?: string;
	url: string;
	cardType: 'full' | 'small';
}

const projects: Project[] = [
	{
		title: 'This Portfoliosite',
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
		title: 'MazeSwap',
		date: '09 jul. 2023',
		discription:
			'MazeSwap is a game made for the GMTK GameJam by Twan and Eliott. The GMTK GameJam is a online event where programmer all over the world build cool games in the span of 48 hours. The theme on the 2023 GMTK GameJam was ROLES REVERSED. MazeSwap is a game played by two people on the same keyboard. In MazeSwap you either have the role of hunter or runner. As the Runner you must get to the other side of the maze and press the button to locate the exit. Stay out of the way of the Hunter, or they will take your place. As the Hunter you must get close to the Runner and swap roles with them, thus becoming the Runner and turning the Runner into the Hunter.',
		comment: 'GMTK GameJam 2023!',
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
	}
	// {
	// 	title: 'Slidify',
	// 	date: '20 jul. 2025',
	// 	cardType: 'small'
	// },
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
