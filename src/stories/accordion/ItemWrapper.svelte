<script lang="ts">
	import Accordion from '../../lib/Accordion.svelte';
	import AccordionItem from '../../lib/AccordionItem.svelte';

	export let label: string;
	export let isOpen: boolean = false;
	export let headerColor: string | undefined = undefined;
	export let contentColor: string | undefined = undefined;
</script>

<Accordion>
	<AccordionItem {label} {isOpen} {headerColor} {contentColor}>
		<p>これはAccordionItemのコンテンツです。Controlsパネルからプロパティを操作できます。</p>
	</AccordionItem>
</Accordion>
