<script lang="ts">
  import PrismaticAmbientGlow from '$lib/PrismaticAmbientGlow.svelte';
  import { CCLPastelColor } from '$lib/const/config';

  const tones = [
    ['PEACH_PINK', CCLPastelColor.PEACH_PINK],
    ['SUGAR_BLUE', CCLPastelColor.SUGAR_BLUE],
    ['LEMON_YELLOW', CCLPastelColor.LEMON_YELLOW],
    ['AKEBI_PURPLE', CCLPastelColor.AKEBI_PURPLE]
  ] as const;
</script>

<div class="tone-grid">
  {#each tones as [name, tone]}
    <section>
      <h2>{name}</h2>
      <div class="sample">
        <PrismaticAmbientGlow {tone} size="small" blur="soft" />
      </div>
    </section>
  {/each}
</div>

<style>
  .tone-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 24px;
    padding: 32px;
    background: var(--palette-wrap-50);
  }

  section {
    display: grid;
    gap: 12px;
  }

  h2 {
    position: relative;
    z-index: 1;
    margin: 0;
    color: var(--palette-grape-900);
    font:
      700 14px/1.4 Inter,
      sans-serif;
  }

  .sample {
    position: relative;
    isolation: isolate;
    min-height: 220px;
    overflow: hidden;
    border: 1px solid var(--palette-wrap-200);
    background: var(--color-surface-glass);
  }
</style>
