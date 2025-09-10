<script lang="ts">
  import Accordion from '../../lib/Accordion.svelte';
  import AccordionItem from '../../lib/AccordionItem.svelte';
  import { CCLPastelColor } from '../../lib/const/config';
</script>

<Accordion>
  <AccordionItem
    label="カスタムカラー"
    headerColor={CCLPastelColor.SUGAR_BLUE}
    contentColor={CCLPastelColor.CLOUD_GREY}
  >
    <p>この項目はヘッダーとコンテンツの背景色が指定されています。</p>
  </AccordionItem>
</Accordion>
