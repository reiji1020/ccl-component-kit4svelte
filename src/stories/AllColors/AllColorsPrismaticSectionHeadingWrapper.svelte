<script lang="ts">
  import PrismaticSectionHeading from '../../lib/PrismaticSectionHeading.svelte';
  import { CCLVividColor } from '../../lib/const/config';

  const vividColors = Object.entries(CCLVividColor);
</script>

<div class="color-palette">
  <section>
    <h2>Vivid Colors</h2>
    <div class="color-grid">
      {#each vividColors as [name, tone] (name)}
        <div class="color-sample">
          <PrismaticSectionHeading eyebrow={name} title="Latest Stories" {tone} />
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
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
  }

  .color-sample {
    display: flex;
    align-items: flex-start;
    min-height: 112px;
  }
</style>
