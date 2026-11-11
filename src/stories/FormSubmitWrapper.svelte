<script lang="ts">
  import { Accordion, AccordionItem, DatePicker, Dialog, TabPanel, Tabs } from '$lib/index';

  let submissions = $state(0);
  let dialogOpen = $state(false);
  let selectedDate = $state(new Date(2026, 0, 1));
</script>

<form
  onsubmit={(event) => {
    event.preventDefault();
    submissions += 1;
  }}
>
  <DatePicker
    {selectedDate}
    placeholder="日付を選択"
    on:change={(event) => (selectedDate = event.detail)}
  />
  <Tabs>
    <TabPanel label="概要">概要パネル</TabPanel>
    <TabPanel label="詳細">詳細パネル</TabPanel>
  </Tabs>
  <Accordion>
    <AccordionItem label="補足">補足パネル</AccordionItem>
  </Accordion>
  <button type="button" onclick={() => (dialogOpen = true)}>確認を開く</button>
  <Dialog open={dialogOpen} title="確認" on:close={() => (dialogOpen = false)} />
  <button type="submit">送信</button>
  <output aria-label="送信回数">{submissions}</output>
</form>
