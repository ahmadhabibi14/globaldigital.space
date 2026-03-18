export function capitalizeWords(input: string): string {
	return input
		.trim()
		.toLowerCase()
		.split(/\s+/)
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
}

export function decodeHTML(html: string, defaultValue: string = ''): string {
	if (!html || !html.length) return defaultValue;

	return (
		html
			// numeric entities (decimal)
			.replace(/&#(\d+);/g, (_, dec) => String.fromCharCode(Number(dec)))
			// numeric entities (hex)
			.replace(/&#x([0-9a-fA-F]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
			// common named entities
			.replace(/&amp;/g, '&')
			.replace(/&lt;/g, '<')
			.replace(/&gt;/g, '>')
			.replace(/&quot;/g, '"')
			.replace(/&#39;/g, "'")
			.replace(/&nbsp;/g, ' ')
	);
}
