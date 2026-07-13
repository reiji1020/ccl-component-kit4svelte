<script lang="ts">
  import PrismaticStoryCard from '../../lib/PrismaticStoryCard.svelte';
  import { CCLVividColor } from '../../lib/const/config';

  const vividColors = Object.entries(CCLVividColor);
</script>

<div class="color-palette">
  <section>
    <h2>Featured</h2>
    <div class="featured-grid">
      {#each vividColors as [name, tone] (name)}
        <div class="color-sample">
          <PrismaticStoryCard title={`${name} のストーリー`} label={name} {tone} size="featured" />
        </div>
      {/each}
    </div>
  </section>

  <section>
    <h2>Default</h2>
    <div class="default-grid">
      {#each vividColors as [name, tone] (name)}
        <div class="color-sample">
          <PrismaticStoryCard title={`${name} のストーリー`} label={name} {tone} size="default" />
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

  .featured-grid,
  .default-grid {
    display: grid;
    gap: 1.5rem;
  }

  .featured-grid {
    grid-template-columns: repeat(auto-fill, minmax(320px, 600px));
  }

  .default-grid {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }

  .color-sample {
    display: flex;
    align-items: flex-start;
  }
</style>
