<script lang="ts">
  import PrismaticSiteHeader from '../../lib/PrismaticSiteHeader.svelte';
  import { CCLVividColor } from '../../lib/const/config';

  const vividColors = Object.entries(CCLVividColor);
</script>

<div class="color-palette">
  {#each vividColors as [name, tone] (name)}
    <section>
      <h2>{name}</h2>
      <PrismaticSiteHeader brand={`${name} Lab.`} {tone} />
    </section>
  {/each}
</div>

<style>
  .color-palette {
    display: flex;
    flex-direction: column;
    gap: 28px;
    width: 100%;
    padding: 24px;
    box-sizing: border-box;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  h2 {
    margin: 0;
    font-family: Inter, sans-serif;
    font-size: 14px;
    letter-spacing: 0;
  }
</style>
