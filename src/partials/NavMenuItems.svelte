<script lang="ts">
	import { NAVBAR_OPEN } from '@/states/navbar';
	import { Icon } from 'svelte-icons-pack';
	import { RiArrowsArrowDownSLine } from 'svelte-icons-pack/ri';

	let {
		name,
		links
	}: {
		name: string;
		links: {
			name: string;
			link: string;
		}[];
	} = $props();

	let isShowMenu: boolean = $state(false);

	$effect(() => {
		if ($NAVBAR_OPEN == false) {
			isShowMenu = false;
		}
	});

	function closeNavbar() {
		isShowMenu = false;
		NAVBAR_OPEN.set(false);
	}
</script>

<div class="flex flex-col gap-0 px-5">
	<button class="flex flex-row items-center gap-1" onclick={() => (isShowMenu = !isShowMenu)}>
		<span>{name}</span>
		<Icon
			src={RiArrowsArrowDownSLine}
			size="20"
			className="{isShowMenu ? '-rotate-90' : ''} transition-all duration-100"
		/>
	</button>
	<div
		class="overflow-hidden
    transition-all
    duration-300
    ease-in-out
    max-h-0
    {isShowMenu ? 'max-h-96 mt-2' : ''}
    "
	>
		<div class="flex flex-col text-sm">
			{#each links as l (l.name)}
				<a href={l.link} class="py-0.5" onclick={closeNavbar} data-sveltekit-reload>
					{l.name}
				</a>
			{/each}
		</div>
	</div>
</div>
