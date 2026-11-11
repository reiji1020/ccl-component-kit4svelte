<script lang="ts">
  import Accordion from '$lib/Accordion.svelte';
  import AccordionItem from '$lib/AccordionItem.svelte';
</script>

<Accordion>
  <AccordionItem label="詳細" isOpen>最初のパネル</AccordionItem>
</Accordion>
<Accordion>
  <AccordionItem label="詳細">2番目のパネル</AccordionItem>
</Accordion>
