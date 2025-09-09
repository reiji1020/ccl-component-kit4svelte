<script lang="ts">
	import Dialog from '../../lib/Dialog.svelte';
	import Button from '../../lib/Button.svelte';
	import { CCLVividColor, CCLPastelColor } from '../../lib/const/config';

	type Entry = { name: string; color: string; open: boolean };
	let vividEntries: Entry[] = Object.entries(CCLVividColor).map(([name, color]) => ({
		name,
		color,
		open: false
	}));

	function openAt(i: number) {
		vividEntries[i].open = true;
		vividEntries = [...vividEntries];
	}

	function closeAt(i: number) {
		vividEntries[i].open = false;
		vividEntries = [...vividEntries];
	}
</script>

<div class="color-palette">
	<h2>Vivid Colors</h2>
	<div class="color-grid">
		{#each vividEntries as item, i}
			<div class="color-sample">
				<Button label={`Open (${item.name})`} bgColor={item.color} onClick={() => openAt(i)} />
				<Dialog
					open={item.open}
					title={item.name}
					borderColor={item.color}
					on:close={() => closeAt(i)}
				>
					<p>このダイアログは {item.name} の色設定で表示されています。</p>
					<svelte:fragment slot="footer">
						<Button label="Cancel" bgColor={CCLPastelColor.CLOUD_GREY} onClick={() => closeAt(i)} />
						<Button label="OK" bgColor={CCLVividColor.STRAWBERRY_PINK} onClick={() => closeAt(i)} />
					</svelte:fragment>
				</Dialog>
			</div>
		{/each}
	</div>
</div>

<style>
	.color-palette {
		display: flex;
		flex-direction: column;
		gap: 2rem;
		padding: 1rem;
	}
	.color-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
		gap: 1rem;
	}
	.color-sample {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 0.75rem;
	}
</style>
