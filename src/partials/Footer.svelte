<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import {
		RiBusinessMailLine,
		RiDevicePhoneLine,
		RiLogosFacebookCircleLine,
		RiLogosInstagramLine,
		RiLogosTwitterXFill,
		RiLogosWhatsappLine,
		RiLogosYoutubeLine,
		RiMapMapPinRangeLine
	} from 'svelte-icons-pack/ri';

	const year: number = new Date().getFullYear();
</script>

<footer class="bg-gdn text-gdn-light flex flex-col pt-14 pb-8 px-6 font-light mt-14">
	<div class="container max-w-5xl mx-auto flex flex-col gap-5">
		<div class="w-full h-fit md:grid md:grid-cols-[3fr_1fr_2fr] flex flex-col gap-4">
			<div class="flex flex-col gap-4 items-start">
				<div class="flex flex-row gap-2 items-center">
					<img
						src="/logo/logo-text-light.svg"
						alt="Global Digital Neuro"
						class="h-18 w-auto object-contain"
					/>
				</div>
				<p>
					Solusi terintegrasi untuk pengembangan brand, website, aplikasi, dan strategi digital marketing yang efektif dan terukur.
				</p>
				<div class="flex flex-row gap-3 items-center" role="navigation">
					<a
						aria-label="Instagram"
						href="https://www.instagram.com/gdn"
						target="_blank"
						class="flex justify-center items-center p-2 rounded-full bg-gdn-light hover:bg-white/90 text-gdn"
					>
						<Icon src={RiLogosInstagramLine} size="22" />
					</a>
					<a
						aria-label="Facebook"
						href="https://www.facebook.com/gdn"
						target="_blank"
						class="flex justify-center items-center p-2 rounded-full bg-gdn-light hover:bg-white/90 text-gdn"
					>
						<Icon src={RiLogosFacebookCircleLine} size="22" />
					</a>
					<a
						aria-label="YouTube"
						href="https://www.youtube.com/channel/gdn"
						target="_blank"
						class="flex justify-center items-center p-2 rounded-full bg-gdn-light hover:bg-white/90 text-gdn"
					>
						<Icon src={RiLogosYoutubeLine} size="22" />
					</a>
					<a
						aria-label="X (Twitter)"
						href="https://www.x.com/gdn"
						target="_blank"
						class="flex justify-center items-center p-2 rounded-full bg-gdn-light hover:bg-white/90 text-gdn"
					>
						<Icon src={RiLogosTwitterXFill} size="19" />
					</a>
					<a
						aria-label="WhatsApp"
						href="https://wa.me/6281213339923"
						target="_blank"
						class="flex justify-center items-center p-2 rounded-full bg-gdn-light hover:bg-white/90 text-gdn"
					>
						<Icon src={RiLogosWhatsappLine} size="22" />
					</a>
				</div>
			</div>
			<div class="flex flex-col gap-3 mt-4">
				<h4 class="text-lg font-semibold text-white">Navigation</h4>
				<nav class="flex flex-col gap-1">
					<a href="/profile" class="hover:underline hover:text-gdn-green">About Us</a>
					<a href="/services" class="hover:underline hover:text-gdn-green">Services</a>
					<a href="/blogs" class="hover:underline hover:text-gdn-green">Blogs</a>
					<a href="/portfolio" class="hover:underline hover:text-gdn-green">Portfolio</a>
				</nav>
			</div>

			<div class="flex flex-col gap-3 mt-4">
				<h4 class="text-lg font-semibold text-white">Contact</h4>
				<div class="flex flex-col gap-1">
					<a
						href="https://maps.app.goo.gl/JHAMACgXWpHYZrKD8"
						target="_blank"
						class="flex flex-row gap-2 items-start hover:underline hover:text-gdn-green"
					>
						<Icon
							size="20"
							className="text-gdn-green fill-gdn-white shrink-0"
							src={RiMapMapPinRangeLine}
						/>
						<p class="grow">
							Praya, Lombok Tengah, Nusa Tenggara Barat, Indonesia
						</p>
					</a>
					<a
						href="mailto:info@globaldigital.space"
						target="_blank"
						class="flex flex-row gap-2 items-center hover:underline hover:text-gdn-green"
					>
						<Icon
							size="20"
							className="text-gdn-green fill-gdn-white shrink-0"
							src={RiBusinessMailLine}
						/>
						<p class="grow">info@globaldigital.space</p>
					</a>
					<a
						href="tel:+6281213339923"
						class="flex flex-row gap-2 items-center hover:underline hover:text-gdn-green"
					>
						<Icon
							size="20"
							className="text-gdn-green fill-gdn-white shrink-0"
							src={RiDevicePhoneLine}
						/>
						<p class="grow">(+62) 812-88xxx</p>
					</a>
				</div>
			</div>
		</div>
		<div class="w-full border-t border-qc-white pt-8">
			<div class="text-qc-white flex flex-row items-center justify-center">
				<p class="">&copy; {year} PT. Global Digital Neuro</p>
			</div>
		</div>
	</div>
</footer>
