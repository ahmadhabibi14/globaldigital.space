<script lang="ts">
	import Navbar from '@/partials/Navbar.svelte';
	import Footer from '@/partials/Footer.svelte';

	let { children } = $props();
</script>

<div class="bg-white text-neutral-800 top-0 mt-20 bottom-0 left-0 right-0">
	<div class="w-full h-full flex flex-col max-w-full">
		<Navbar />
		<main class="flex flex-col left-0 right-0 h-auto">
			{@render children()}
		</main>
		<Footer />
	</div>
</div>
