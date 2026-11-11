<script lang="ts">
  import Tabs from '$lib/Tabs.svelte';
  import TabPanel from '$lib/TabPanel.svelte';

  let showDetails = $state(false);
  let label = $state('詳細');
  let disabled = $state(false);
</script>

<button type="button" onclick={() => (showDetails = !showDetails)}>
  {showDetails ? 'タブを削除' : 'タブを追加'}
</button>
<button type="button" onclick={() => (label = '詳細設定')}>タブ名を変更</button>
<button type="button" onclick={() => (disabled = !disabled)}>
  {disabled ? 'タブを有効化' : 'タブを無効化'}
</button>

<Tabs>
  <TabPanel label="概要">概要パネル</TabPanel>
  {#if showDetails}
    <TabPanel {label} {disabled}>詳細パネル</TabPanel>
  {/if}
</Tabs>
