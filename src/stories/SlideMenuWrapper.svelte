<script lang="ts">
	import SlideMenu from '$lib/SlideMenu.svelte';
	import { CCLVividColor } from '$lib/const/config';

	export let side: 'left' | 'right' = 'left';
	export let size: string = '320px';
	export let title: string = 'メニュー';
	export let ariaLabel: string = 'メインメニュー';
	export let items: { id: string; label: string; href?: string }[] = [];
	export let currentId: string | undefined = undefined;
	export let accentColor: string = CCLVividColor.SODA_BLUE;

	let open = false;
	const openMenu = () => (open = true);
	const closeMenu = () => (open = false);
</script>

<div style="min-height: 220px; padding: 12px; display:flex; gap: 8px; align-items: center;">
	<button type="button" on:click={openMenu}>Open Menu</button>

	<SlideMenu
		{side}
		{size}
		{title}
		{ariaLabel}
		{items}
		{currentId}
		{accentColor}
		{open}
		on:close={closeMenu}
		on:select={closeMenu}
	/>
</div>
