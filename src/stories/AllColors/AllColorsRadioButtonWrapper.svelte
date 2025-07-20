<script lang="ts">
	import RadioButton from '../../lib/RadioButton.svelte';
	import { CCLVividColor, CCLPastelColor } from '../../lib/const/config';

	let vividGroup = 'STRAWBERRY_PINK';
	let pastelGroup = 'PEACH_PINK';
</script>

<div class="color-palette">
	<h2>Vivid Colors</h2>
	<div class="color-grid">
		{#each Object.entries(CCLVividColor) as [name, color]}
			<div class="color-sample">
				<RadioButton label={name} value={name} bind:group={vividGroup} {color} />
			</div>
		{/each}
	</div>

	<h2>Pastel Colors</h2>
	<div class="color-grid">
		{#each Object.entries(CCLPastelColor) as [name, color]}
			<div class="color-sample">
				<RadioButton label={name} value={name} bind:group={pastelGroup} {color} />
			</div>
		{/each}
	</div>
</div>

<style>
	.color-palette {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}
	.color-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: 1rem;
	}
	.color-sample {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
</style>
