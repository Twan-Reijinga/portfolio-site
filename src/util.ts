export function updateFontSize() {
	let fontSize: number;
	fontSize = window.innerWidth / 25;
	if (fontSize > 85) {
		fontSize = 85;
	}
	return fontSize;
}

export default { updateFontSize };
