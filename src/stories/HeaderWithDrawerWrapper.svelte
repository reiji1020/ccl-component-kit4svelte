<script lang="ts">
	import Header from '$lib/Header.svelte';
	import SlideMenu from '$lib/SlideMenu.svelte';
	import { CCLVividColor, HeaderHeight } from '$lib/const/config';

	export let bgColor: string = CCLVividColor.STRAWBERRY_PINK;
	export let height: string = HeaderHeight.NORMAL;
	export let side: 'left' | 'right' | 'top' | 'bottom' = 'left';
	export let size: string = '320px';

	let open = false;
	const openDrawer = () => (open = true);
	const closeDrawer = () => (open = false);
</script>

<div class="hdr-drawer-demo">
	<Header {bgColor} {height} />

	<button type="button" class="hamburger" aria-label="メニューを開く" on:click={openDrawer}>
		☰
	</button>

	<SlideMenu
		{open}
		{side}
		{size}
		title="メニュー"
		ariaLabel="メインメニュー"
		items={[
			{ id: 'home', label: 'Home', href: '#' },
			{ id: 'products', label: 'Products', href: '#' },
			{ id: 'about', label: 'About', href: '#' },
			{ id: 'contact', label: 'Contact', href: '#' }
		]}
		currentId={'home'}
		on:close={closeDrawer}
		on:select={() => closeDrawer()}
	/>
</div>

<style>
	.hdr-drawer-demo {
		position: relative;
		/* Header height varies; reserve enough space for overlay button */
		min-height: 140px;
	}
	.hamburger {
		position: absolute; /* overlay inside header area */
		z-index: 10001; /* above header anchor */
		top: 16px;
		left: 5%;
		transform: translateX(-50%);
		width: 40px;
		height: 40px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		border: none;
		background: transparent;
		color: #fff; /* blend into colored header */
		font-size: 26px;
		line-height: 1;
		cursor: pointer;
		pointer-events: auto; /* clickable */
	}
	.hamburger:focus-visible {
		outline: 2px solid #fff;
		outline-offset: 2px;
		border-radius: 6px;
	}
</style>
