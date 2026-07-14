<script lang="ts">
  import PrismaticAmbientGlow from '$lib/PrismaticAmbientGlow.svelte';
  import PrismaticWorkCard from '$lib/PrismaticWorkCard.svelte';
  import { CCLPastelColor, CCLVividColor } from '$lib/const/config';
</script>

<div class="composition">
  <PrismaticAmbientGlow
    tone={CCLPastelColor.SUGAR_BLUE}
    size="large"
    opacity="standard"
    blur="diffuse"
    position="top-left"
  />
  <PrismaticAmbientGlow
    tone={CCLPastelColor.AKEBI_PURPLE}
    size="medium"
    opacity="subtle"
    blur="medium"
    position="bottom-right"
  />
  <div class="content">
    <h2>AmbientGlow + WorkCard</h2>
    <PrismaticWorkCard
      title="発光表現と組み合わせた制作実績"
      linkLabel="VIEW PROJECT"
      tone={CCLVividColor.SODA_BLUE}
    />
  </div>
</div>

<style>
  .composition {
    position: relative;
    isolation: isolate;
    min-height: 620px;
    overflow: hidden;
    padding: 64px 32px;
    background: var(--palette-wrap-50);
  }

  .content {
    display: grid;
    justify-items: center;
    gap: 24px;
  }

  h2 {
    margin: 0;
    color: var(--palette-grape-900);
    font:
      700 18px/1.4 Inter,
      sans-serif;
  }
</style>
