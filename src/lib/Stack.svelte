<script lang="ts">
  import type { Snippet } from 'svelte';
  let {
    children, direction = 'column', gap = 'var(--ccl-field-gap, 8px)',
    align = 'stretch', justify = 'start', wrap = false
  }: {
    children: Snippet;
    direction?: 'row' | 'column';
    gap?: string;
    align?: 'start' | 'center' | 'end' | 'stretch' | 'baseline';
    justify?: 'start' | 'center' | 'end' | 'space-between' | 'space-around' | 'space-evenly';
    wrap?: boolean;
  } = $props();
</script>

<div class="stack" style:flex-direction={direction} style:gap={gap}
  style:align-items={align} style:justify-content={justify} style:flex-wrap={wrap ? 'wrap' : 'nowrap'}>
  {@render children()}
</div>

<style>
  .stack { display: flex; min-width: 0; }
</style>
