<script lang="ts">
	import Pagination from '../lib/Pagination.svelte';
	import type { ColorVar } from '../lib/const/config';

	export let page: number = 1;
	export let total: number | undefined = undefined;
	export let perPage: number = 10;
	export let pageCount: number | undefined = undefined;
	export let boundaryCount: number = 1;
	export let siblingCount: number = 1;
	export let showFirstLast: boolean = true;
	export let showPrevNext: boolean = true;
	export let disabled: boolean = false;
	export let accentColor: ColorVar;
	export let ariaLabel: string = 'Pagination';

	function handleChange(e: CustomEvent<{ page: number }>) {
		page = e.detail.page;
	}
</script>

<Pagination
	{page}
	{total}
	{perPage}
	{pageCount}
	{boundaryCount}
	{siblingCount}
	{showFirstLast}
	{showPrevNext}
	{disabled}
	{accentColor}
	{ariaLabel}
	on:change={handleChange}
/>
