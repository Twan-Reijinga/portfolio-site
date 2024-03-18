export function getAge(): number {
	const currentDate: Date = new Date();
	const targetDate: Date = new Date(2005, 9, 8);
	let differenceYears: number = currentDate.getFullYear() - targetDate.getFullYear();

	if ((currentDate.getMonth() === 9 && currentDate.getDate() < 8) || currentDate.getMonth() < 9) {
		differenceYears--;
	}

	return differenceYears;
}

export default { getAge };
