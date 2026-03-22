<script lang="ts">
	import Head from '@/partials/Head.svelte';
	import AboutUs from '@/partials/home/AboutUs.svelte';
	import Jumbotron from '@/partials/home/Jumbotron.svelte';
	import Partners from '@/partials/home/Partners.svelte';
	import Services from '@/partials/home/Services.svelte';
</script>

<Head title="Global Digital Neuro - Solusi digital untuk kebutuhan bisnis Anda" />

<div class="w-full flex flex-col">
	<Jumbotron />
	<Partners />
	<AboutUs />
	<Services />
</div>
