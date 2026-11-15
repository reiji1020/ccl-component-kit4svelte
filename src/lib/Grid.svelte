<script lang="ts">
  import type { Snippet } from 'svelte';

  let { children, columns = 3, minColumnWidth, gap = 'var(--ccl-field-gap, 8px)' }: {
    children: Snippet;
    columns?: number;
    minColumnWidth?: string;
    gap?: string;
  } = $props();
  const count = $derived(Number.isFinite(columns) ? Math.max(1, Math.floor(columns)) : 1);
</script>

<div class="grid" class:responsive={Boolean(minColumnWidth)} style:--columns={count}
  style:--column-width={minColumnWidth} style:--gap={gap}>
  {@render children()}
</div>

<style>
  .grid { display: grid; gap: var(--gap); grid-template-columns: repeat(var(--columns), minmax(0, 1fr)); }
  .responsive {
    --column-share: calc((100% - (var(--columns) - 1) * var(--gap)) / var(--columns));
    grid-template-columns: repeat(auto-fit, minmax(min(100%, max(var(--column-width), var(--column-share))), 1fr));
  }
</style>
