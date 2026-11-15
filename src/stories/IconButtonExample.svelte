<script lang="ts">
  import IconButton from '$lib/IconButton.svelte';
  let { disabled = false }: { disabled?: boolean } = $props();
  let count = $state(0);
</script>

<IconButton label="編集" {disabled} onclick={() => count++}>
  {#snippet icon()}
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="m4 16 11-11 4 4L8 20H4z" stroke-width="2" />
    </svg>
  {/snippet}
</IconButton>
<output>{count}回実行</output>
