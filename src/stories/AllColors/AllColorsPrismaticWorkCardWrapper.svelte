<script lang="ts">
  import PrismaticWorkCard from '../../lib/PrismaticWorkCard.svelte';
  import { CCLVividColor } from '../../lib/const/config';

  const vividColors = Object.entries(CCLVividColor);
</script>

<div class="color-palette">
  <section>
    <h2>WorkCard</h2>
    <div class="work-card-grid">
      {#each vividColors as [name, tone] (name)}
        <div class="color-sample">
          <PrismaticWorkCard
            title={`${name}の制作実績`}
            description="各toneで概要文の折り返しと余白を確認するためのサンプルです。"
            linkLabel="VIEW PROJECT"
            {tone}
          />
        </div>
      {/each}
    </div>
  </section>
</div>

<style>
  .color-palette {
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

  .work-card-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 620px));
    gap: 1.5rem;
  }

  .color-sample {
    display: flex;
    align-items: flex-start;
  }
</style>
