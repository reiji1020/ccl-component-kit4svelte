<script lang="ts">
  import Popover from '$lib/Popover.svelte';
  import Select from '$lib/Select.svelte';
  import Button from '$lib/Button.svelte';
  let { atEdge = false }: { atEdge?: boolean } = $props();
  let value = $state('25');
  let applied = $state('');
  const options = [{ label: '25件', value: '25' }, { label: '50件', value: '50' }];
</script>

<div class:edge={atEdge}>
  <Popover label="表示設定">
    {#snippet children(close)}
      <form onsubmit={(event) => { event.preventDefault(); applied = value; close(); }}>
        <Select label="表示件数" {options} bind:value />
        <Button label="適用" type="submit" />
      </form>
    {/snippet}
  </Popover>
  <button type="button">外側の操作</button>
  <output>表示件数: {applied}</output>
</div>

<style>
  form { display: grid; gap: 12px; }
  .edge { position: fixed; right: 12px; bottom: 12px; }
</style>
