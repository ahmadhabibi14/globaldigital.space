export interface WPUser {
	id: number;
	name: string;
	slug: string;

	url: string;
	link: string;

	description: string;

	avatar_urls: WPAvatarUrls;

	meta: unknown[];

	_links: WPUserLinks;
}

export interface WPAvatarUrls {
	[size: string]: string;
}

export interface WPAvatarUrls {
	'24': string;
	'48': string;
	'96': string;
}

export interface WPUserLinks {
	self: Array<{
		href: string;
		targetHints?: {
			allow: string[];
		};
	}>;

	collection: Array<{
		href: string;
	}>;
}
