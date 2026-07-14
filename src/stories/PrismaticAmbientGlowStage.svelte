<script lang="ts">
  import PrismaticAmbientGlow from '$lib/PrismaticAmbientGlow.svelte';
  import type {
    PrismaticAmbientGlowBlur,
    PrismaticAmbientGlowOpacity,
    PrismaticAmbientGlowPosition,
    PrismaticAmbientGlowSize,
    PrismaticAmbientGlowTone
  } from '$lib/PrismaticAmbientGlow.svelte';

  export let tone: PrismaticAmbientGlowTone;
  export let size: PrismaticAmbientGlowSize;
  export let opacity: PrismaticAmbientGlowOpacity;
  export let blur: PrismaticAmbientGlowBlur;
  export let position: PrismaticAmbientGlowPosition;
</script>

<div class="stage">
  <PrismaticAmbientGlow {tone} {size} {opacity} {blur} {position} />
  <p>AMBIENT GLOW</p>
</div>

<style>
  .stage {
    position: relative;
    display: grid;
    min-height: 440px;
    overflow: hidden;
    place-items: center;
    background: var(--palette-wrap-50);
  }

  p {
    position: relative;
    z-index: 1;
    margin: 0;
    color: var(--palette-grape-900);
    font:
      700 18px/1.4 Inter,
      sans-serif;
  }
</style>
