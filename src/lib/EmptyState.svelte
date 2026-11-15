<script lang="ts">
  import type { Snippet } from 'svelte';
  import { CCLPastelColor, type ColorVar } from './const/config';

  interface Props {
    title: string;
    description?: string;
    illustration?: Snippet;
    actions?: Snippet;
    headingLevel?: 2 | 3 | 4 | 5 | 6;
    accentColor?: ColorVar;
  }

  let {
    title, description, illustration, actions, headingLevel = 2,
    accentColor = CCLPastelColor.PEACH_PINK
  }: Props = $props();
</script>

<div class="empty-state" style:--empty-accent={`var(${accentColor})`}>
  {#if illustration}<div class="illustration" aria-hidden="true">{@render illustration()}</div>{/if}
  <svelte:element this={`h${headingLevel}`}>{title}</svelte:element>
  {#if description}<p>{description}</p>{/if}
  {#if actions}<div class="actions">{@render actions()}</div>{/if}
</div>

<style>
  .empty-state {
    display: grid;
    justify-items: start;
    gap: 8px;
    padding: clamp(12px, 3vw, 20px);
    border-radius: var(--ccl-field-radius, 8px);
    background: var(--palette-cloud-50);
    color: var(--wrap-grey);
    overflow-wrap: anywhere;
  }
  h2, h3, h4, h5, h6, p { margin: 0; }
  h2, h3, h4, h5, h6 { font-size: 1rem; }
  p { font-size: 0.875rem; }
  .illustration {
    display: grid;
    place-items: center;
    min-width: 36px;
    min-height: 36px;
    border-radius: 50%;
    background: var(--empty-accent);
  }
  .actions { display: flex; flex-wrap: wrap; gap: 8px; max-width: 100%; }
</style>
