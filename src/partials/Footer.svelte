<script lang="ts">
	import { Icon, type IconType } from 'svelte-icons-pack';
	import { BsTelephoneFill } from 'svelte-icons-pack/bs';
	import {
		FaBrandsFacebook,
		FaBrandsSquareInstagram,
		FaBrandsSquareWhatsapp,
		FaBrandsSquareXTwitter,
		FaBrandsSquareYoutube,
		FaSolidMapLocationDot
	} from 'svelte-icons-pack/fa';
	import { IoMail } from 'svelte-icons-pack/io';
	import { TrOutlineMail } from 'svelte-icons-pack/tr';

	const year: number = new Date().getFullYear();

	const socials: {
		name: string;
		url: string;
		icon: IconType;
	}[] = [
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/gdn',
			icon: FaBrandsSquareInstagram
		},
		{
			name: 'Facebook',
			url: 'https://www.facebook.com/gdn',
			icon: FaBrandsFacebook
		},
		{
			name: 'YouTube',
			url: 'https://www.youtube.com/channel/gdn',
			icon: FaBrandsSquareYoutube
		},
		{
			name: 'X (Twitter)',
			url: 'https://www.x.com/gdn',
			icon: FaBrandsSquareXTwitter
		},
		{
			name: 'WhatsApp',
			url: 'https://wa.me/6281213339923',
			icon: FaBrandsSquareWhatsapp
		}
	];
</script>

<footer
	class="bg-neutral-50 text-neutral-600 border-t border-neutral-300 flex flex-col pt-50 pb-8 px-6 mt-80 relative"
>
	<div class="absolute z-2 left-0 right-0 -top-50">
		<div class="container max-w-5xl mx-auto">
			<div class="relative bg-gdn rounded-2xl flex justify-end pl-6 pr-10 py-12">
				<img
					src="/img/illustration/megaphone-dynamic-color.png"
					alt="Megaphone Illustration"
					class="absolute -top-12 left-6 w-[330px] h-auto object-contain"
				/>
				<div class="w-7/12 flex flex-col gap-4 text-gdn-light justify-start">
					<div class="flex flex-col gap-2">
						<h3 class="text-3xl font-bold">Subsribe to our newsletter to get updates to our latest work</h3>
						<p class="text-sm font-light">Dapatkan diskon <span class="relative isolate flip-selection px-1 py-0.5"><span class="absolute inset-0 -z-10 -skew-y-3 bg-gdn-3"></span><span class="text-neutral-900">20%</span></span> lebih murah dengan berlangganan newsletter kami.</p>
					</div>
					<div class="flex flex-col gap-4">
						<div class="relative w-9/12">
							<Icon
								src={TrOutlineMail}
								size="20"
								className="absolute left-4 top-1/2 -translate-y-1/2 stroke-gdn-light"
							/>
							<input
								type="email"
								name="email-newsletter"
								id="email-newsletter"
								placeholder="Enter your email address"
								class="w-full py-3.5 pl-12 pr-40 bg-gdn-light/20 rounded-full font-light"
							/>
							<button class="absolute right-2 top-1/2 -translate-y-1/2
							bg-white text-gdn-dark px-6 py-2 rounded-full font-medium
							hover:bg-gdn-light transition-colors duration-200 cursor-pointer
							">
								Subscribe

							</button>
						</div>
						<p class="text-xs font-light">
							You’ll be able to unsubscribe at any time. <br/>
							Read our privacy policy <a href="/privacy-policy" class="underline">here</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="container max-w-5xl mx-auto flex flex-col gap-5">
		<div class="w-full h-fit md:grid md:grid-cols-[3fr_1fr_2fr] flex flex-col gap-4">
			<div class="flex flex-col gap-4 items-start">
				<div class="flex flex-row gap-2 items-center">
					<img
						src="/logo/logo-text-dark.svg"
						alt="Global Digital Neuro"
						class="h-14 w-auto object-contain"
					/>
				</div>
				<p>
					Solusi terintegrasi untuk pengembangan brand, website, aplikasi, dan strategi digital
					marketing yang efektif dan terukur.
				</p>
				<div class="flex flex-row gap-4 items-center" role="navigation">
					{#each socials as social (social.name)}
						<a
							aria-label={social.name}
							href={social.url}
							target="_blank"
							class="flex justify-center items-center text-gdn-2 hover:text-gdn transition-colors duration-200"
						>
							<Icon src={social.icon} size="25" />
						</a>
					{/each}
				</div>
			</div>

			<div class="flex flex-col gap-4 mt-4 text-sm w-fit">
				<div class="flex flex-col gap-1">
					<h4 class="text-lg font-semibold text-gdn">Company</h4>
					<span class="h-0.5 w-16 bg-gdn"></span>
				</div>
				<nav class="flex flex-col gap-1">
					<a href="/profile" class="hover:underline hover:text-gdn-green">About Us</a>
					<a href="/services" class="hover:underline hover:text-gdn-green">Services</a>
					<a href="/blogs" class="hover:underline hover:text-gdn-green">Blogs</a>
					<a href="/portfolio" class="hover:underline hover:text-gdn-green">Portfolio</a>
					<a href="/partnership" class="hover:underline hover:text-gdn-green">Partnership</a>
				</nav>
			</div>

			<div class="flex flex-col gap-4 mt-4 text-sm w-fit">
				<div class="flex flex-col gap-1">
					<h4 class="text-lg font-semibold text-gdn">Contact</h4>
					<span class="h-0.5 w-16 bg-gdn"></span>
				</div>
				<div class="flex flex-col gap-1.5">
					<a
						href="https://maps.app.goo.gl/JHAMACgXWpHYZrKD8"
						target="_blank"
						class="flex flex-row gap-2 items-start hover:underline hover:text-gdn-green"
					>
						<Icon size="17" className="fill-gdn-2 shrink-0" src={FaSolidMapLocationDot} />
						<p class="grow">Praya, Lombok Tengah, Nusa Tenggara Barat, Indonesia</p>
					</a>
					<a
						href="mailto:info@globaldigital.space"
						target="_blank"
						class="flex flex-row gap-2 items-center hover:underline hover:text-gdn-green"
					>
						<Icon size="17" className="fill-gdn-2 shrink-0" src={IoMail} />
						<p class="grow">info@globaldigital.space</p>
					</a>
					<a
						href="tel:+6281213339923"
						class="flex flex-row gap-2 items-center hover:underline hover:text-gdn-green"
					>
						<Icon size="17" className="fill-gdn-2 shrink-0" src={BsTelephoneFill} />
						<p class="grow">(+62) 812-88xxx</p>
					</a>
				</div>
			</div>
		</div>
		<div class="w-full border-t border-t-neutral-300 border-qc-white pt-8 text-xs">
			<div class="text-qc-white flex flex-row items-center justify-between">
				<p class="">
					{year} &copy; Copyright by <span class="font-semibold">PT. Global Digital Neuro</span>.
					All Rights Reserved
				</p>
				<div class="flex flex-row gap-6 justify-end items-center">
					<a href="/terms" class="hover:underline hover:text-gdn-2"> Terms of Use </a>

					<a href="/legal" class="hover:underline hover:text-gdn-2"> Legal </a>
					<a href="/privacy" class="hover:underline hover:text-gdn-2"> Privacy Policy </a>
				</div>
			</div>
		</div>
	</div>
</footer>
