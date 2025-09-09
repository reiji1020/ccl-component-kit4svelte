<script lang="ts">
	import Badge from '../../lib/Badge.svelte';
	import { CCLVividColor, CCLPastelColor } from '../../lib/const/config';
</script>

<div class="color-palette">
	<h2>Vivid Colors (solid)</h2>
	<div class="color-grid">
		{#each Object.entries(CCLVividColor) as [name, color]}
			<div class="color-sample">
				<Badge {color} variant="solid" size="md" label={name} />
			</div>
		{/each}
	</div>

	<h2>Pastel Colors (solid, vivid text)</h2>
	<div class="color-grid">
		{#each Object.entries(CCLPastelColor) as [name, color]}
			<div class="color-sample">
				<Badge {color} variant="solid" size="md" label={name} />
			</div>
		{/each}
	</div>

	<h2>Vivid Colors (outline)</h2>
	<div class="color-grid">
		{#each Object.entries(CCLVividColor) as [name, color]}
			<div class="color-sample">
				<Badge {color} variant="outline" size="md" label={name} />
			</div>
		{/each}
	</div>

	<h2>Pastel Colors (outline, vivid text)</h2>
	<div class="color-grid">
		{#each Object.entries(CCLPastelColor) as [name, color]}
			<div class="color-sample">
				<Badge {color} variant="outline" size="md" label={name} />
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
		grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
		gap: 0.75rem;
	}
	.color-sample {
		display: flex;
		justify-content: center;
	}
</style>
