export function updateFontSize() {
	let fontSize: number;
	fontSize = window.innerWidth / 25;
	if (fontSize > 90) {
		fontSize = 90;
	}
	return fontSize;
}

export default { updateFontSize };
