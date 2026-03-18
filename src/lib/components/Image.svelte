<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	export let src: string;
	export let alt: string = '';
	export let classNameContainer: string = '';
	export let classNameImg: string = '';
	export let width: string | number | undefined = undefined;
	export let height: string | number | undefined = undefined;

	let loaded = false;
	let error = false;
	let isVisible = false;

	let container: HTMLDivElement;
	let observer: IntersectionObserver;

	function handleLoad() {
		loaded = true;
	}

	function handleError() {
		error = true;
		loaded = false;
	}

	onMount(() => {
		observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]): void => {
				if (entries.length === 0) return;
				if (entries[0].isIntersecting) {
					isVisible = true;
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		if (container) observer.observe(container);
	});

	onDestroy(() => {
		if (observer) observer.disconnect();
	});
</script>

<div bind:this={container} class="relative overflow-hidden {classNameContainer}">
	{#if !loaded || error}
		<img
			src="/img/placeholder.svg"
			alt="Placeholder"
			class="absolute inset-0 w-full h-full object-cover"
		/>
	{/if}

	{#if isVisible}
		<img
			{src}
			{alt}
			{width}
			{height}
			class="w-full h-full object-cover duration-300 transition-all
        {loaded && !error ? 'opacity-100' : 'opacity-0'}
        {classNameImg}"
			aria-label={alt}
			onload={handleLoad}
			onerror={handleError}
		/>
	{/if}
</div>
