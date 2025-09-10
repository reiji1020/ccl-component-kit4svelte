<script lang="ts">
  import Tabs from '../../lib/Tabs.svelte';
  import TabPanel from '../../lib/TabPanel.svelte';

  export let label: string;
  export let color: string;
  export let disabled: boolean = false;
</script>

<Tabs>
  <TabPanel {label} {color} {disabled}>
    <div style="height: 150px;">
      <h2>{label}</h2>
      <p>これはTabPanelのコンテンツです。Controlsパネルからプロパティを操作できます。</p>
    </div>
  </TabPanel>
</Tabs>
