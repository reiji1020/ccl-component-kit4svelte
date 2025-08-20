<script lang="ts">
	import Accordion from '../lib/Accordion.svelte';
	import AccordionItem from '../lib/AccordionItem.svelte';

	type Item = {
		label: string;
		content: string;
		isOpen?: boolean;
		headerColor?: string;
		contentColor?: string;
	};

	/**
	 * 複数の項目を同時に開けるようにするかどうか
	 */
	export let multiple: boolean = false;

	/**
	 * アコーディオンに表示する項目の配列
	 */
	export let items: Item[] = [];
</script>

<Accordion {multiple}>
	{#each items as item}
		<AccordionItem
			label={item.label}
			isOpen={item.isOpen || false}
			headerColor={item.headerColor}
			contentColor={item.contentColor}
		>
			<p>{item.content}</p>
		</AccordionItem>
	{/each}
</Accordion>
