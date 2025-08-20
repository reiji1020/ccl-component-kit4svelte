<script lang="ts">
	import Accordion from '../../lib/Accordion.svelte';
	import AccordionItem from '../../lib/AccordionItem.svelte';
</script>

<Accordion multiple={true}>
	<AccordionItem label="質問1：これは何ですか？">
		<p>これはアコーディオンコンポーネントです。</p>
	</AccordionItem>
	<AccordionItem label="質問2：どうやって使いますか？">
		<p>AccordionItemコンポーネントをAccordionコンポーネントの中に入れて使います。</p>
	</AccordionItem>
</Accordion>
