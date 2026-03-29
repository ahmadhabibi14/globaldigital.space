<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	let {
		src,
		alt,
		classNameContainer,
		classNameImg,
		width,
		height,
		fetchpriority,
		draggable
	}: {
		src: string;
		alt?: string;
		classNameContainer?: string;
		classNameImg?: string;
		width?: string | number;
		height?: string | number;
		fetchpriority?: 'auto' | 'high' | 'low';
		draggable?: 'true' | 'false';
	} = $props();

	let loaded: boolean = $state(false);
	let error: boolean = $state(false);
	let isVisible: boolean = $state(false);

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
			draggable="false"
			aria-label="Image placeholder"
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
			loading="lazy"
			{fetchpriority}
			{draggable}
			decoding="async"
			ondragstart={(
				e: DragEvent & {
					currentTarget: EventTarget & HTMLImageElement;
				}
			) => {
				if (draggable === 'false') e.preventDefault();
			}}
		/>
	{/if}
</div>
