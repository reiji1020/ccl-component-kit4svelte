<script lang="ts">
  import Button from '$lib/Button.svelte';
  import EmptyState from '$lib/EmptyState.svelte';
  let { title, description, action }: { title: string; description: string; action: string } = $props();
  let activated = $state(false);
</script>

<div style="max-width: 300px">
  <EmptyState {title} {description}>
    {#snippet illustration()}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M3 7h7l2 2h9v10H3z" stroke-width="2" />
      </svg>
    {/snippet}
    {#snippet actions()}
      <Button type="button" label={action} onClick={() => { activated = true; }} />
    {/snippet}
  </EmptyState>
  {#if activated}<output>操作しました</output>{/if}
</div>
