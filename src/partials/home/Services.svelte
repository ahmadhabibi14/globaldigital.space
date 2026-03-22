<script lang="ts">
	import { Icon, type IconType } from 'svelte-icons-pack';
	import { RiBusinessAdvertisementLine, RiBusinessPieChartBoxLine, RiDesignBrush2Line, RiMediaCameraLine, RiSystemApps2AddLine, RiSystemUploadCloud2Line, RiUserFacesUserFollowLine } from 'svelte-icons-pack/ri';

	const services: {
		name: string;
		descList: string[];
		icon: IconType;
    iconColor?: string;
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
      iconColor: 'fill-rose-500'
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
			name: 'Online Advertising',
			descList: ['Google Ads', 'Facebook Ads', 'Instagram Ads', 'YouTube Ads'],
			icon: RiBusinessAdvertisementLine,
            iconColor: 'fill-amber-500'
		},
		{
			name: 'Foto & Videografi',
			descList: ['Foto Produk', 'Video Promosi', 'Company Profile Video', 'Dokumentasi Event'],
			icon: RiMediaCameraLine,
      iconColor: 'fill-gdn-2'
		},
		{
			name: 'Brand Consultant',
			descList: ['Brand Strategy', 'Brand Identity Development', 'Rebranding', 'Brand Positioning'],
			icon: RiUserFacesUserFollowLine,
      iconColor: 'fill-violet-500'
		}
	];
</script>

<section
	class="container max-w-5xl mx-auto flex flex-col gap-7 mb-10 mt-16 scroll-mt-24"
	id="services"
>
	<div class="flex w-full flex-col gap-2 text-center max-w-4xl mx-auto">
		<h2 class="text-lg font-bold text-gdn-2">OUR SERVICES</h2>
    <p class="font-semibold text-4xl">Memastikan solusi digital yang tepat untuk memenuhi kebutuhan Anda.</p>
	</div>
	<div class="grid grid-cols-3 gap-4">
		{#each services as srv, i (i)}
			<div class="flex flex-col gap-3 p-5 border border-neutral-200 rounded-lg bg-neutral-50
      {i === services.length - 1 ? 'md:col-[2/3]' : ''}">
				<Icon src={srv.icon} size="50" className="shrink-0 {srv.iconColor  ? srv.iconColor : 'fill-gdn-2'}" />
				<div class="flex flex-col gap-1 grow">
					<h4 class="font-bold text-lg">{srv.name}</h4>
					<ul class="list-disc list-inside text-sm flex flex-col gap-0 ml-2">
						{#each srv.descList as desc, j (j)}
							<li>{desc}</li>
						{/each}
					</ul>
				</div>
			</div>
		{/each}
	</div>
</section>
