import mazeSwapImg from '$lib/assets/images/mazeswap.png';

interface Project {
	title: string;
	date: string;
	discription?: string;
	comment?: string;
	languages?: string[];
	fakeFileName?: string;
	img?: string;
	cardType: 'full' | 'small';
}
const projects: Project[] = [
	{
		title: 'slidify',
		date: '20 jul. 2025',
		discription:
			'Aliquet nibh praesent tristique magna sit. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Risus commodo viverra maecenas accumsan. Mattis nunc sed blandit libero volutpat sed cras ornare. Diam sit amet nisl suscipit adipiscing. Viverra nibh cras pulvinar mattis nunc sed blandit libero volutpat. Turpis massa tincidunt dui ut ornare. Ornare arcu odio ut sem nulla pharetra. Urna id volutpat lacus.',
		comment: 'wow this works!',
		languages: ['js', 'ts'],
		fakeFileName: 'Slidify',
		img: mazeSwapImg,
		cardType: 'full'
	},
	{
		title: 'Slidify',
		date: '20 jul. 2025',
		cardType: 'small'
	},
	{
		title: 'slidify',
		date: '20 jul. 2025',
		discription:
			"The Slidify is a device meant to easily control music wirelessly from a mac/linux computer. This solves a number of problems. First, you never have to keep spotify (or other music apps) open on your computer again, because all the info can be read right from the Slidify's display. This can be handy to save screen space. Another function is to control music while your monitor is off, for when you want to work focused without distraction from your computer, for example.",
		fakeFileName: 'Slidify',
		cardType: 'full'
	}
];

export default projects;
