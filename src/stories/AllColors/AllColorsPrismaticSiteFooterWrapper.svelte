<script lang="ts">
  import PrismaticSiteFooter from '$lib/PrismaticSiteFooter.svelte';
  import { CCLVividColor } from '$lib/const/config';

  const tones = Object.entries(CCLVividColor);
</script>

<div class="tone-list">
  {#each tones as [name, tone]}
    <section>
      <h2>{name}</h2>
      <PrismaticSiteFooter
        {tone}
        density="studio"
        brandHref="/"
        logoUrl="candy-chups-lab.svg"
        logoAlt="CANDY CHUPS Lab."
      />
    </section>
  {/each}
</div>

<style>
  .tone-list {
    display: grid;
    gap: 32px;
    padding: 32px;
  }

  section {
    display: grid;
    gap: 12px;
  }

  h2 {
    margin: 0;
    font:
      700 14px/1.4 Inter,
      sans-serif;
  }
</style>
