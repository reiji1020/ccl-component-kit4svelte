<script lang="ts">
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';

	const dispatch = createEventDispatcher();

	/** 開閉状態（制御用） */
	export let open: boolean = false;
	/** どの方向から表示するか */
	export let side: 'left' | 'right' | 'top' | 'bottom' = 'right';
	/** パネルサイズ（left/right は幅、top/bottom は高さ） */
	export let size: string = '320px';
	/** 背景のバックドロップを表示するか */
	export let backdrop: boolean = true;
	/** ESC キーで閉じるか */
	export let closeOnEsc: boolean = true;
	/** バックドロップクリックで閉じるか */
	export let closeOnBackdropClick: boolean = true;
	/** アクセシビリティ用ラベル（タイトルが無い場合など） */
	export let ariaLabel: string | undefined;
	/** 追加クラス（外部からパネルへ付与） */
	export let panelClass: string = '';
	/** 追加スタイル（外部からパネルへ付与） */
	export let panelStyle: string = '';

	let panelEl: HTMLDivElement | null = null;

	function handleKeydown(e: KeyboardEvent) {
		if (!open) return;
		if (closeOnEsc && e.key === 'Escape') {
			e.stopPropagation();
			dispatch('close');
		}
	}

	function onBackdropClick() {
		if (!open) return;
		if (closeOnBackdropClick) dispatch('close');
	}

	function lockScroll(lock: boolean) {
		try {
			document.body.style.overflow = lock ? 'hidden' : '';
		} catch {}
	}

	$: lockScroll(open && backdrop);

	onMount(() => {
		window.addEventListener('keydown', handleKeydown, { capture: true });
	});
	onDestroy(() => {
		window.removeEventListener('keydown', handleKeydown, { capture: true } as any);
		lockScroll(false);
	});
</script>

{#if backdrop}
	<div
		class="drawer-backdrop {open ? 'open' : ''}"
		data-testid="drawer-backdrop"
		aria-hidden="true"
		on:click={onBackdropClick}
	/>
{/if}

<div
	bind:this={panelEl}
	{...$$restProps}
	class={`drawer ${open ? 'open' : ''} from-${side} ${panelClass}`}
	role="dialog"
	aria-modal="true"
	aria-hidden={!open}
	aria-label={ariaLabel}
	style={`--drawer-size: ${size}; ${panelStyle}`}
>
	<slot />
</div>

<style>
	.drawer-backdrop {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.35);
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.2s ease;
		z-index: 9998;
	}
	.drawer-backdrop.open {
		opacity: 1;
		pointer-events: auto;
	}

	.drawer {
		position: fixed;
		z-index: 9999;
		background: #fff;
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
		transition: transform 0.22s ease;
		overflow: hidden; /* prevent inner spill */
		visibility: hidden; /* hide when closed to avoid visual leak */
		pointer-events: none; /* ignore interactions when closed */
		/* default size for each side is set via vars */
	}

	.drawer.open {
		visibility: visible;
		pointer-events: auto;
	}

	/* from-right */
	.drawer.from-right {
		top: 0;
		right: 0;
		height: 100%;
		width: var(--drawer-size);
		transform: translateX(100%);
	}
	.drawer.from-right.open {
		transform: translateX(0);
	}

	/* from-left */
	.drawer.from-left {
		top: 0;
		left: 0;
		height: 100%;
		width: var(--drawer-size);
		transform: translateX(-100%);
	}
	.drawer.from-left.open {
		transform: translateX(0);
	}

	/* from-top */
	.drawer.from-top {
		top: 0;
		left: 0;
		width: 100%;
		height: var(--drawer-size);
		transform: translateY(-100%);
	}
	.drawer.from-top.open {
		transform: translateY(0);
	}

	/* from-bottom */
	.drawer.from-bottom {
		bottom: 0;
		left: 0;
		width: 100%;
		height: var(--drawer-size);
		transform: translateY(100%);
	}
	.drawer.from-bottom.open {
		transform: translateY(0);
	}
</style>
