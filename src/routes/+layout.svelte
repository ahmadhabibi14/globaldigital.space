<script lang="ts">
	import './layout.css';
	import './shadcn.css';

	import 'nprogress/nprogress.css';
	import NProgress from 'nprogress';
	import { navigating } from '$app/state';
	import { CURRENT_PATH } from '@/states/page';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import '@fontsource-variable/josefin-sans';

	let { children } = $props();
	let isNavigating = $state(false);

	NProgress.configure({
		minimum: 0.16,
		speed: 500,
		showSpinner: false,
		easing: 'ease'
	});

	$effect(() => {
		if (navigating.to) {
			NProgress.start();
			CURRENT_PATH.set(navigating.to.url.pathname);
			isNavigating = true;
		} else {
			NProgress.done();
			isNavigating = false;
		}
	});

	onMount(() => {
		if (browser) {
			CURRENT_PATH.set(window.location.pathname);
		}
	});
</script>

{@render children()}

{#if isNavigating}
	<div class="fixed inset-0 bg-white flex items-center justify-center z-50">
		<p>Loading...</p>
	</div>
{/if}
