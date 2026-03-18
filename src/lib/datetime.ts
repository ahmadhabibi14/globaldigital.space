export function formatDate(dateString: string): string {
	const date = new Date(dateString + 'Z'); // Treat input as UTC
	return date.toLocaleDateString('id-ID', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	});
}

export function formatIndonesianDateTime(dateInput: string | Date): string {
	const date = new Date(dateInput + 'Z'); // Treat input as UTC

	const datePart = new Intl.DateTimeFormat('id-ID', {
		day: 'numeric',
		month: 'long',
		year: 'numeric'
	}).format(date);

	const timePart = new Intl.DateTimeFormat('id-ID', {
		hour: '2-digit',
		minute: '2-digit',
		hour12: false
	}).format(date);

	return `${datePart} | ${timePart}`;
}

export function formatSitemapDate(date = new Date()) {
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	];

	const day = date.getDate();
	const month = months[date.getMonth()];
	const year = date.getFullYear();

	let hours = date.getHours();
	const minutes = String(date.getMinutes()).padStart(2, '0');

	const ampm = hours >= 12 ? 'pm' : 'am';
	hours = hours % 12 || 12; // convert 0 → 12

	return `${day} ${month} ${year} ${hours}:${minutes} ${ampm}`;
}
