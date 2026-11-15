<script lang="ts">
  import type { Snippet } from 'svelte';
  let { children, maxWidth = '72rem', padding = 'clamp(16px, 4vw, 32px)' }: {
    children: Snippet;
    maxWidth?: string;
    padding?: string;
  } = $props();
</script>

<div class="container" style:max-width={maxWidth} style:padding-inline={padding}>
  {@render children()}
</div>

<style>
  .container { box-sizing: border-box; width: 100%; margin-inline: auto; }
</style>
