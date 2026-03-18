<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import { RiOthersLightbulbFlashLine, RiSystemAddCircleLine } from 'svelte-icons-pack/ri';

	const partners: {
		name?: string;
		imgUrl: string;
	}[] = [
		{ name: 'Indonesia Respon', imgUrl: '/partners/indonesia-respon.png' },
		{ name: 'Quran Center Hidayatullah', imgUrl: '/partners/quran-center.png' },
		{ name: 'Jayakarta Halal Center', imgUrl: '/partners/jhc.png' },
		{ name: 'Mnine Production', imgUrl: '/partners/mnine.png' },
		{ name: 'HIGIVE Indonesia', imgUrl: '/partners/higive.png' },
		{ name: 'Yayasan Pondok Yatim Istiqomah', imgUrl: '/partners/istiqomah.png' }
	];
</script>

<section
	class="w-full h-auto border-t border-b border-neutral-200 bg-neutral-50 pb-12 px-4 relative mt-16"
>
	<div class="absolute left-0 right-0 -top-10 z-3 flex justify-center items-center">
		<div
			class="w-[600px] h-fit border border-neutral-300 bg-white
    flex flex-row gap-2 items-start py-5 px-7 rounded-md text-sm"
		>
			<Icon src={RiOthersLightbulbFlashLine} size="30" className="shrink-0 fill-gdn-2" />
			<p class="grow leading-5">
				Didukung oleh tim yang berpengalaman di bidang software, desain, dan pemasaran digital, kami
				menghadirkan layanan yang terintegrasi mulai dari pembuatan brand, pengembangan website dan
				aplikasi, hingga strategi pemasaran digital yang efektif dan terukur.
			</p>
		</div>
	</div>
	<div class="container max-w-5xl mx-auto text-center mt-32 flex flex-col gap-7">
		<h3 class="text-sm font-bold text-gdn-2">GDN IS TRUSTED BY</h3>
		<div
			class="flex flex-wrap gap-x-10 gap-y-8
    justify-center items-center mx-auto"
		>
			{#each partners as p (p.name)}
				<div class="h-fit w-auto group" title={p.name}>
					<img src={p.imgUrl} alt={p.name} class="h-10 w-auto" />
				</div>
			{/each}
			<div class="h-fit w-auto group">
				<div
					class="h-10 w-fit border-2 border-dashed border-neutral-300 py-auto
          flex flex-row gap-1.5 justify-center items-center px-6 rounded-md font-medium text-sm"
				>
					<p class="select-none">Your Company</p>
					<Icon
						src={RiSystemAddCircleLine}
						size="17"
						className="shrink-0 fill-neutral-600 -mt-0.5"
					/>
				</div>
			</div>
		</div>
	</div>
</section>
