interface Language {
	text: string;
	color: string;
	textColor: string;
	favorite?: boolean;
}

const languages: Language[] = [
	{ text: 'P5', color: '#ed225d', textColor: '#fff' },
	{ text: 'Python', color: '#0db7ed', textColor: '#000', favorite: true },
	{ text: 'PostgreSQL', color: '#316192', textColor: '#fff', favorite: true },
	{ text: 'MongoDB', color: '#00694A', textColor: '#fff', favorite: true },
	{ text: 'Docker', color: '#0db7ed', textColor: '#000', favorite: true },
	{ text: 'Svelte', color: '#FF3E00', textColor: '#fff' },
	{ text: 'Java', color: '#ff9820', textColor: '#000', favorite: true },
	{ text: 'C++', color: '#007acc', textColor: '#fff', favorite: true },
	{ text: 'C#', color: '#984D94', textColor: '#fff', favorite: true },
	{ text: 'CSS', color: '#006EB6', textColor: '#fff' },
	{ text: 'ELM', color: '#5C6278', textColor: '#fff' },
	{ text: 'Unity', color: '#6D6D6D', textColor: '#fff' },
	// { text: 'R', color: '#1F63B6', textColor: '#fff' },
	{ text: 'NodeJS', color: '#6cc24a', textColor: '#000' },
	{ text: 'React Native', color: '#61dbfb', textColor: '#000', favorite: true },
	{ text: 'Vue', color: '#41B883', textColor: '#fff', favorite: true },
	{ text: 'TS', color: '#007acc', textColor: '#fff', favorite: true },
	{ text: 'JS', color: '#f0db4f', textColor: '#000', favorite: true },
];

export default languages;
