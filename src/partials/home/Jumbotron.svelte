<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import { RiArrowsArrowDownSLine } from 'svelte-icons-pack/ri';
</script>

<section class="relative w-full h-[500px]">
	<div class="absolute z-0 left-0 top-0 right-0 bottom-0 flex justify-center items-center">
		<div class="w-auto h-auto">
			<img
				src="/logo/main-logo.svg"
				alt="Jumbotron Background"
				class="w-[400px] h-auto object-cover opacity-10"
			/>
		</div>
	</div>
	<div class="absolute z-1 left-0 top-0 right-0 bottom-0 flex justify-center items-center">
		<div class="flex flex-col gap-5 justify-center items-center container max-w-4xl text-center">
			<div class="flex flex-col gap-2">
				<h1 class="text-6xl font-bold">Solusi Digital Inovatif untuk Masa Depan Bisnis Anda</h1>
				<p class="text-xl">
					Kami membantu membangun identitas digital yang kuat melalui software, website, desain kreatif, dan
					strategi pemasaran yang efektif.
				</p>
				<div class="flex flex-row justify-center items-center mt-7 gap-3 font-semibold">
					<a
						href="#services"
						class="md:flex hidden w-fit h-fit cursor-pointer py-3 px-8
			font-medium rounded-md text-gdn-dark bg-gdn-3 hover:bg-gdn-3/90 border border-gdn-3
			flex-row gap-1.5 items-center justify-center"
					>
						<span>Lihat Layanan</span>
						<Icon src={RiArrowsArrowDownSLine} size="24" className="" />
					</a>
					<a
						href="#services"
						class="md:flex hidden w-fit h-fit cursor-pointer py-3 px-8
			font-medium rounded-md text-gdn-dark border border-gdn-2 bg-white hover:bg-green-100
			flex-row gap-1.5 items-center justify-center"
					>
						<span>Kontak Sales</span>
					</a>
				</div>
			</div>
		</div>
	</div>
</section>
