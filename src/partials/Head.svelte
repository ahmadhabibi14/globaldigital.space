<script lang="ts">
	import { SiteName, SiteDesc, SiteBaseUrl, SiteImageUrl, SiteAuthor } from '@/lib/constant';

	export let title: string = SiteName;
	export let path: string = '';
	export let description: string = SiteDesc;
	export let imageUrl: string = SiteImageUrl;
	export let author: string = SiteAuthor;
	export let imgWidth: string = '1200';
	export let imgHeight: string = '630';

	const siteUrl: string = SiteBaseUrl + path;
</script>

<svelte:head>
	<title>{title}</title>
	<meta http-equiv="x-ua-compatible" content="ie=edge" />
	<meta name="author" content={author} />
	<meta name="description" content={description} />
	<meta name="referrer" content="no-referrer-when-downgrade" />

	<meta property="og:site_name" content={title} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:locale" content="id_ID" />
	<meta property="og:locale:alternate" content="en_UK" />
	<meta property="og:locale:alternate" content="ms_MY" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={siteUrl} />
	<meta property="og:image" content={imageUrl ? imageUrl : SiteImageUrl} />
	<meta property="og:image:secure_url" content={imageUrl ? imageUrl : SiteImageUrl} />
	<meta property="og:image:width" content={imgWidth} />
	<meta property="og:image:height" content={imgHeight} />
	<meta property="og:image:alt" content={title} />
	<meta property="og:see_also" content="https://www.instagram.com/globaldigitalneuro" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:image:width" content={imgWidth} />
	<meta name="twitter:image:height" content={imgHeight} />

	<meta name="DC.title" content="Geo Tag Generator" />
	<meta name="geo.region" content="ID-JK" />
	<meta name="geo.placename" content="Praya, Lombok Tengah, NTB" />
	<meta name="geo.position" content="-8.702282, 116.268106" />
	<meta name="ICBM" content="-8.702282, 116.268106" />

	<link href={SiteBaseUrl} rel="canonical" />
	<link href={SiteBaseUrl} rel="home" />
	<link type="text/plain" href="{SiteBaseUrl}/humans.txt" rel="author" />
</svelte:head>
