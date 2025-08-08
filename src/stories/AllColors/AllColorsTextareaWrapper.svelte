<script lang="ts">
	import Textarea from '../../lib/Textarea.svelte';
	import { CCLVividColor, CCLPastelColor } from '../../lib/const/config';
</script>

<div class="color-palette">
	<h2>Vivid Colors</h2>
	<div class="color-grid">
		{#each Object.entries(CCLVividColor) as [name, color]}
			<div class="color-sample">
				<Textarea
					id={`vivid-${name.toLowerCase()}`}
					label={name}
					borderColor={color}
					placeholder={`--${name.toLowerCase().replace(/_/g, '-')}`}
				/>
			</div>
		{/each}
	</div>

	<h2>Pastel Colors</h2>
	<div class="color-grid">
		{#each Object.entries(CCLPastelColor) as [name, color]}
			<div class="color-sample">
				<Textarea
					id={`pastel-${name.toLowerCase()}`}
					label={name}
					borderColor={color}
					placeholder={`--${name.toLowerCase().replace(/_/g, '-')}`}
				/>
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
