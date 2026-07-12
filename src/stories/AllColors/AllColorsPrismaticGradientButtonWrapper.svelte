<script lang="ts">
  import PrismaticGradientButton from '../../lib/PrismaticGradientButton.svelte';
  import { CCLVividColor } from '../../lib/const/config';

  const vividColors = Object.entries(CCLVividColor);
</script>

<div class="color-palette">
  <section>
    <h2>Primary</h2>
    <div class="color-grid">
      {#each vividColors as [name, color]}
        <div class="color-sample">
          <PrismaticGradientButton {color} label={name} tone="primary" size="large" />
        </div>
      {/each}
    </div>
  </section>

  <section>
    <h2>Secondary</h2>
    <div class="color-grid">
      {#each vividColors as [name, color]}
        <div class="color-sample">
          <PrismaticGradientButton {color} label={name} tone="secondary" size="medium" />
        </div>
      {/each}
    </div>
  </section>
</div>

<style>
  .color-palette {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  h2 {
    margin: 0;
  }

  .color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
  }

  .color-sample {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 72px;
  }
</style>
