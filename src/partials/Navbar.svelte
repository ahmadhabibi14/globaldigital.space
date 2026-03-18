<script lang="ts">
	import { Icon } from 'svelte-icons-pack';
	import { BsList, BsX } from 'svelte-icons-pack/bs';
	import { RiArrowsArrowDownSLine, RiWeatherFlashlightLine } from 'svelte-icons-pack/ri';
	import * as HoverCard from '$lib/components/ui/hover-card/index.js';
	import { NAVBAR_OPEN } from '@/states/navbar';
	import NavMenuItems from './NavMenuItems.svelte';

	function closeNavbar() {
		NAVBAR_OPEN.set(false);
	}
</script>

<div
	id="top"
	class="top-0 z-99 fixed w-full h-20 flex flex-col items-center justify-center py-auto bg-white/90 backdrop-blur border-b border-b-neutral-200"
>
	<div
		class="h-full px-4 md:px-0 container max-w-5xl flex flex-row items-center justify-between mx-auto"
	>
		<div class="flex flex-row gap-3 items-center">
			<a
				href="/"
				class="w-fit h-fit
				focus:outline-none focus:ring-0 focus:ring-offset-0
				flex flex-row items-center gap-2"
			>
				<img
					src="/logo/logo-text.svg"
					alt="Global Digital Neuro"
					class="h-12 w-auto object-contain"
					fetchpriority="high"
				/>
			</a>
		</div>
		<nav class="hidden md:flex flex-row gap-8 items-center justify-center w-fit">
			<a href="/" class="hover:text-gdn-2">Home</a>
			<a href="/products" class="hover:text-gdn-2">Products</a>
			<a href="/profil">
				<HoverCard.Root openDelay={100} closeDelay={100}>
					<HoverCard.Trigger class="flex flex-row items-center gap-1 hover:text-gdn-2">
						<span>About us</span>
						<Icon src={RiArrowsArrowDownSLine} size="20" className="fill-neutral-400" />
					</HoverCard.Trigger>
					<HoverCard.Content class="z-100 px-2 py-3">
						<div class="flex flex-col text-sm">
							<a
								href="/profil#tentang"
								class="block px-4 py-2 hover:bg-gdn-2/10 hover:text-gdn-2 rounded-md"
							>
								Profile
							</a>
							<a
								href="/profil#visi"
								class="block px-4 py-2 hover:bg-gdn-2/10 hover:text-gdn-2 rounded-md"
							>
								Visiion
							</a>
							<a
								href="/profil#misi"
								class="block px-4 py-2 hover:bg-gdn-2/10 hover:text-gdn-2 rounded-md"
							>
								Mission
							</a>
							<a
								href="/profil#struktur"
								class="block px-4 py-2 hover:bg-gdn-2/10 hover:text-gdn-2 rounded-md"
							>
								Company Structure
							</a>
							<a
								href="/profil#logo"
								class="block px-4 py-2 hover:bg-gdn-2/10 hover:text-gdn-2 rounded-md"
							>
								Logo Meaning
							</a>
						</div>
					</HoverCard.Content>
				</HoverCard.Root>
			</a>
			<a href="/services" class="hover:text-gdn-2">Services</a>
			<a href="/portfolio" class="hover:text-gdn-2">Portfolio</a>
			<a href="/posts" class="hover:text-gdn-2">Blogs</a>
		</nav>
		<a
			href="https://wa.me/62xxxx"
			class="md:flex hidden w-fit h-fit cursor-pointer py-2 px-8
			font-medium rounded-md text-gdn-dark bg-gdn-3 hover:bg-gdn-3/90
			text-sm flex-row gap-1.5 items-center justify-center"
		>
			<Icon src={RiWeatherFlashlightLine} size="17" className="" />
			<span>Try Now</span>
		</a>
		<div class="flex md:hidden">
			<button type="button" onclick={() => ($NAVBAR_OPEN = !$NAVBAR_OPEN)} class="">
				<Icon src={$NAVBAR_OPEN ? BsX : BsList} size="30" />
			</button>
		</div>
	</div>
</div>

<aside
	class="{$NAVBAR_OPEN ? 'translate-y-0' : ''}
  top-20
  fixed z-98 transition-all
  duration-300
  ease-in-out
  bg-white
  w-full h-fit
  -translate-y-full
  "
>
	<div class="flex flex-col gap-3 pt-5 pb-3 font-medium">
		<a href="/" class="hover:text-qc px-5" onclick={closeNavbar}>Beranda</a>
		<span class="h-px w-full border-t border-dashed border-gray-300"></span>
		<NavMenuItems
			name="Profil"
			links={[
				{ name: 'Tentang', link: '/profil#tentang' },
				{ name: 'Visi', link: '/profil#visi' },
				{ name: 'Misi', link: '/profil#misi' },
				{ name: 'Struktur', link: '/profil#struktur' },
				{ name: 'Logo', link: '/profil#logo' }
			]}
		/>
		<span class="h-px w-full border-t border-dashed border-gray-300"></span>
		<NavMenuItems
			name="Program"
			links={[
				{ name: 'Semua Program', link: '/program' }
			]}
		/>
		<span class="h-px w-full border-t border-dashed border-gray-300"></span>
		<a href="/layanan" class="hover:text-qc px-5" onclick={closeNavbar}>Layanan</a>
		<span class="h-px w-full border-t border-dashed border-gray-300"></span>
		<a href="/posts" class="hover:text-qc px-5" onclick={closeNavbar}>Artikel</a>
		
	</div>
</aside>
