<script lang="ts">
	import CommonHeader from '../../lib/CommonHeader.svelte';
	import { CCLVividColor, CCLPastelColor, HeaderHeight } from '../../lib/const/config';
</script>

<div class="color-palette">
	<h2>Vivid Colors</h2>
	<div class="color-grid">
		{#each Object.entries(CCLVividColor) as [name, color]}
			<div class="color-sample">
				<CommonHeader bgColor={color} height={HeaderHeight.NORMAL} logo="beace.svg" logoHeight="50px" />
				<span>{name}</span>
			</div>
		{/each}
	</div>

	<h2>Pastel Colors</h2>
	<div class="color-grid">
		{#each Object.entries(CCLPastelColor) as [name, color]}
			<div class="color-sample">
				<CommonHeader bgColor={color} height={HeaderHeight.NORMAL} logo="beace.svg" logoHeight="50px" />
				<span>{name}</span>
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
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
	.color-sample {
		display: flex;
		flex-direction: column;
		align-items: stretch;
		gap: 0.5rem;
		width: 100%;
	}
</style>
