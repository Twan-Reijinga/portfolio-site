export function updateFontSize() {
	let fontSize: number;
	fontSize = window.innerWidth / 25;
	if (fontSize > 85) {
		fontSize = 85;
	}
	return fontSize;
}

export function getAge() {
	let difference: number = Date.now() - new Date(2005, 8, 10).getTime();
	let days: number = difference / (1000*60*60*24);
	console.log(days);
	return days;
}

export default { updateFontSize };
