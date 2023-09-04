interface Language {
	text: string;
	color: string;
	textColor: string;
}

const languages: Language[] = [
	{ text: 'TS', color: '#007acc', textColor: '#fff' },
	{ text: 'JS', color: '#f0db4f', textColor: '#000' },
	{ text: 'P5', color: '#ed225d', textColor: '#fff' },
	{ text: 'Python', color: '#0db7ed', textColor: '#000' },
	{ text: 'C++', color: '#007acc', textColor: '#fff' },
	{ text: 'React Native', color: '#61dbfb', textColor: '#000' },
	{ text: 'Docker', color: '#0db7ed', textColor: '#000' },
	{ text: 'Postgress', color: '#316192', textColor: '#fff' },
	{ text: 'MongoDB', color: '#00694A', textColor: '#fff' },
	{ text: 'Svelte', color: '#FF3E00', textColor: '#fff' },
	// { text: 'C#', color: '#984D94', textColor: '#fff' },
	{ text: 'CSS', color: '#006EB6', textColor: '#fff' },
	{ text: 'ELM', color: '#5C6278', textColor: '#fff' },
	// { text: 'Unity', color: '#6D6D6D', textColor: '#fff' },
	{ text: 'R', color: '#1F63B6', textColor: '#fff' }
];

export default languages;
