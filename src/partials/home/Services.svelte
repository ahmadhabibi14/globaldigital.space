<script lang="ts">
	import { Icon, type IconType } from 'svelte-icons-pack';
	import {
	RiArrowsArrowRightLine,
		RiBusinessAdvertisementLine,
		RiBusinessPieChartBoxLine,
		RiDesignBrush2Line,
		RiDesignCompasses2Line,
		RiMediaCameraLine,
		RiSystemApps2AddLine,
		RiSystemUploadCloud2Line,
		RiUserFacesUserFollowLine,
		RiWeatherFireLine
	} from 'svelte-icons-pack/ri';

	const services: {
		name: string;
		descList: string[];
		icon: IconType;
		iconColor?: string;
		hot?: boolean;
	}[] = [
		{
			name: 'Graphic Design & UI/UX Design',
			descList: ['Logo Design', 'Brand Identity', 'UI/UX Website', 'UI/UX Mobile App'],
			icon: RiDesignBrush2Line
		},
		{
			name: 'Web & App Development',
			descList: [
				'Company Profile Website',
				'E-Commerce Website',
				'Web Application',
				'Mobile App Development',
				'System Integration'
			],
			icon: RiSystemApps2AddLine,
			iconColor: 'fill-rose-500',
			hot: true
		},
		{
			name: 'Domain, Hosting & Cloud',
			descList: [
				'Domain Registration',
				'Web Hosting',
				'VPS Server',
				'Cloud Infrastructure',
				'Server Maintenance'
			],
			icon: RiSystemUploadCloud2Line,
			iconColor: 'fill-sky-500'
		},
		{
			name: 'Digital Marketing',
			descList: [
				'Social Media Management',
				'SEO Optimization',
				'Content Marketing',
				'Campaign Strategy'
			],
			icon: RiBusinessPieChartBoxLine,
			iconColor: 'fill-pink-500'
		},
		{
			name: 'Foto & Videografi',
			descList: ['Foto Produk', 'Video Promosi', 'Company Profile Video', 'Dokumentasi Event'],
			icon: RiMediaCameraLine,
			iconColor: 'fill-gdn-2'
		},
		{
			name: 'Online Advertising',
			descList: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'YouTube Ads'],
			icon: RiBusinessAdvertisementLine,
			iconColor: 'fill-amber-500'
		},
		{
			name: 'Brand Consultant',
			descList: ['Brand Strategy', 'Brand Identity Development', 'Rebranding', 'Brand Positioning'],
			icon: RiUserFacesUserFollowLine,
			iconColor: 'fill-violet-500'
		},
		{
			name: 'Architectural Design',
			descList: [
				'Desain Rumah',
				'Desain Masjid',
				'Desain Villa, Hotel dan Hostel',
				'Revisi Sepuasnya',
				'File Lengkap (PDf , 3-D )',
				'Master Plan denah'
			],
			icon: RiDesignCompasses2Line,
			iconColor: 'fill-lime-500'
		}
	];
</script>

<section
	class="container max-w-5xl mx-auto flex flex-col gap-7 mb-10 mt-16 scroll-mt-24"
	id="services"
>
	<div class="flex w-full flex-col gap-2 text-center max-w-4xl mx-auto">
		<h2 class="text-lg font-bold text-gdn-2">OUR SERVICES</h2>
		<p class="font-semibold text-4xl">
			Memastikan solusi digital yang tepat untuk memenuhi kebutuhan Anda.
		</p>
	</div>
	<div class="grid grid-cols-3 gap-4">
		{#each services as srv, i (i)}
			{#if srv.hot}
				<div class="relative w-full h-auto bg-linear-to-br from-gdn-2 to-gdn-3 rounded-lg">
					<div
						class="w-fit h-fit py-1 px-2 text-sm bg-gdn-3 text-gdn-dark
					flex flex-row gap-1 items-center justify-center
					absolute z-2 -top-2 -right-2 rounded-full -rotate-12
					border border-gdn-2/60 shadow shadow-gdn-3/70"
					>
						<Icon src={RiWeatherFireLine} />
						<span>Popular</span>
					</div>
					<div
						class="absolute z-1 top-0 left-0 right-0 bottom-0 m-1 flex flex-col gap-3 p-5 border border-neutral-300
					rounded-md bg-neutral-50
						{i === services.length - 1 ? 'md:col-[2/3]' : ''}"
					>
						<Icon
							src={srv.icon}
							size="50"
							className="shrink-0 {srv.iconColor ? srv.iconColor : 'fill-gdn-2'}"
						/>
						<div class="flex flex-col gap-1 grow">
							<h4 class="font-bold text-lg">{srv.name}</h4>
							<ul class="list-disc list-inside text-sm flex flex-col gap-0 ml-2">
								{#each srv.descList as desc, j (j)}
									<li>{desc}</li>
								{/each}
							</ul>
						</div>
					</div>
				</div>
			{:else}
				<div
					class="flex flex-col gap-3 p-5 border border-neutral-300 rounded-lg bg-neutral-50
				{i === services.length - 1 ? 'md:col-[2/3]' : ''}"
				>
					<Icon
						src={srv.icon}
						size="50"
						className="shrink-0 {srv.iconColor ? srv.iconColor : 'fill-gdn-2'}"
					/>
					<div class="flex flex-col gap-1 grow">
						<h4 class="font-bold text-lg">{srv.name}</h4>
						<ul class="list-disc list-inside text-sm flex flex-col gap-0 ml-2">
							{#each srv.descList as desc, j (j)}
								<li>{desc}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/if}
		{/each}
	</div>
	<div class="w-full flex justify-center items-center">
		<a
			href="/services"
			class="pl-6 pr-14 py-2 bg-gdn-3 3 hover:bg-gdn-3/90 text-gdn-dark rounded-md
			flex justify-center items-center relative group"
		>
			<span>Lihat Harga</span>
			<Icon
				src={RiArrowsArrowRightLine}
				size="20"
				className="absolute right-6 group-hover:translate-x-1 transition-transform duration-200 fill-gdn-dark"
			/>
		</a>
	</div>
</section>
