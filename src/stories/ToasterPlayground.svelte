<script lang="ts">
	import Toaster from '$lib/Toaster.svelte';
	import { toast } from '$lib/index';

	export let position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right';
	export let maxVisible: number = 5;
	export let duration: number = 3000;

	export let variant: 'success' | 'error' | 'warning' | 'info' = 'info';
	export let message: string = 'Here is some information';
	export let dismissible: boolean = true;
	export let showControls: boolean = false;

	function show() {
		toast.show({ message, variant, duration });
	}
</script>

<div style="min-height: 200px; display:flex; gap:10px; align-items:center; flex-wrap: wrap;">
	{#if showControls}
		<button type="button" on:click={show}>Show Toast</button>
		<span style="color: var(--wrap-grey); font-size: 13px;"
			>Use controls to edit message/duration/variant, then click Show Toast.</span
		>
	{/if}
	<Toaster {position} {maxVisible} {dismissible} />
</div>
