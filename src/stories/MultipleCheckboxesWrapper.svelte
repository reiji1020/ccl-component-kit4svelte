<script lang="ts">
	import Checkbox from '../lib/Checkbox.svelte';

	export let checked1: boolean = false;
	export let checked2: boolean = false;
	export let checked3: boolean = false;
</script>

<div>
	<Checkbox label="Option 1" bind:checked={checked1} />
	<Checkbox label="Option 2" bind:checked={checked2} />
	<Checkbox label="Option 3" bind:checked={checked3} />
</div>
