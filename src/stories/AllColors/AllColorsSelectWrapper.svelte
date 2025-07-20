<script lang="ts">
	import Select from '../../lib/Select.svelte';
	import type { SelectOption } from '../lib/Select.svelte';
	import { CCLVividColor, CCLPastelColor } from '../../lib/const/config';

	const options: SelectOption[] = [
		{ value: 'option1', label: 'オプション 1' },
		{ value: 'option2', label: 'オプション 2' },
		{ value: 'option3', label: 'オプション 3' }
	];
</script>

<div class="color-palette">
	<h2>Vivid Colors</h2>
	<div class="color-grid">
		{#each Object.entries(CCLVividColor) as [name, color]}
			<div class="color-sample">
				<Select
					id={`vivid-${name.toLowerCase()}`}
					label={name}
					{options}
					value={'option1'}
					borderColor={color}
				/>
			</div>
		{/each}
	</div>

	<h2>Pastel Colors</h2>
	<div class="color-grid">
		{#each Object.entries(CCLPastelColor) as [name, color]}
			<div class="color-sample">
				<Select
					id={`pastel-${name.toLowerCase()}`}
					label={name}
					{options}
					value={'option1'}
					borderColor={color}
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
