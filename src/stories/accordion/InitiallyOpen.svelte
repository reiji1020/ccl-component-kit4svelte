<script lang="ts">
	import Accordion from '../../lib/Accordion.svelte';
	import AccordionItem from '../../lib/AccordionItem.svelte';
</script>

<Accordion>
	<AccordionItem label="最初からオープン" isOpen={true}>
		<p>この項目は最初から開いています。</p>
	</AccordionItem>
	<AccordionItem label="こちらはクローズ">
		<p>この項目は閉じています。</p>
	</AccordionItem>
</Accordion>
