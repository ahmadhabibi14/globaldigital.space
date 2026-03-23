<script lang="ts">
	import Image from '@/lib/components/Image.svelte';

	const tags: string[] = [
		'#Digital Solutions',
		'#Innovation',
		'#Technology',
		'#Software Innovation',
		'#Creative Design',
		'#Marketing Strategy',
		'#Sustainability',
		'#SEO'
	];
</script>

<section
	class="container max-w-5xl mx-auto flex flex-col gap-5 mb-10 mt-20 scroll-mt-24"
	id="about-us"
>
	<div class="grid grid-cols-[35%_65%] gap-6">
		<div class="flex flex-col gap-6">
			<h2 class="text-4xl font-bold">Transforming Ideas into Digital Reality</h2>
			<div class="flex flex-col gap-4 text-lg">
				<p>
					Global Digital Neuro merupakan perusahaan teknologi digital yang berfokus pada
					pengembangan solusi inovatif untuk membantu bisnis dan organisasi beradaptasi dengan
					perkembangan dunia digital.
				</p>
				<p>
					Kami mengintegrasikan kreativitas desain, pengembangan teknologi, serta strategi pemasaran
					digital untuk menciptakan solusi yang efektif, efisien, dan berkelanjutan.
				</p>
			</div>
			<div class="flex flex-wrap gap-3">
				{#each tags as tag, index (index)}
					<span class="px-3 py-1 border border-gdn-3 text-gdn-dark rounded-full text-xs">{tag}</span
					>
				{/each}
			</div>
		</div>
		<div
			class="h-fit p-7 w-full bg-linear-to-br from-gdn via-gdn-2 to-gdn-3 text-gdn-light rounded-3xl flex flex-col gap-3"
		>
			<Image
				src="/img/illustration/03.jpg"
				alt="Our Vision and Mission"
				classNameContainer="h-[200px] w-full rounded-xl overflow-hidden"
				classNameImg="object-cover object-center h-full w-full"
			/>
			<div class="flex flex-col gap-3">
				<div class="flex flex-col gap-0.5">
					<h3 class="text-2xl font-semibold">Our Vision</h3>
					<span class="h-0.5 w-20 bg-gdn-light"></span>
				</div>
				<p class="text-sm">
					Menjadi perusahaan teknologi digital yang inovatif dan menjadi mitra terpercaya dalam
					transformasi digital di tingkat nasional dan global.
				</p>
			</div>
			<div class="flex flex-col gap-3">
				<div class="flex flex-col gap-0.5">
					<h3 class="text-2xl font-semibold">Our Mission</h3>
					<span class="h-0.5 w-20 bg-gdn-light"></span>
				</div>
				<ul class="list-disc list-inside text-sm flex flex-col gap-1">
					<li>Mengembangkan solusi teknologi digital yang inovatif.</li>
					<li>Membantu bisnis berkembang melalui strategi digital yang efektif.</li>
					<li>Menciptakan desain dan brand yang kuat dan berkarakter.</li>
					<li>Memberikan layanan profesional dan berkualitas tinggi.</li>
					<li>Mendorong pertumbuhan ekosistem ekonomi digital.</li>
				</ul>
			</div>
		</div>
	</div>
</section>
