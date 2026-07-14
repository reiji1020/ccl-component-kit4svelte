<script context="module" lang="ts">
  export type PrismaticAmbientGlowTone =
    | '--peach-pink'
    | '--sugar-blue'
    | '--lemon-yellow'
    | '--akebi-purple';

  export type PrismaticAmbientGlowSize = 'small' | 'medium' | 'large';
  export type PrismaticAmbientGlowOpacity = 'subtle' | 'standard' | 'strong';
  export type PrismaticAmbientGlowBlur = 'soft' | 'medium' | 'diffuse';
  export type PrismaticAmbientGlowPosition =
    | 'top-left'
    | 'top-right'
    | 'center'
    | 'bottom-left'
    | 'bottom-right';

  export type PrismaticAmbientGlowProps = {
    tone?: PrismaticAmbientGlowTone;
    size?: PrismaticAmbientGlowSize;
    opacity?: PrismaticAmbientGlowOpacity;
    blur?: PrismaticAmbientGlowBlur;
    position?: PrismaticAmbientGlowPosition;
  };
</script>

<script lang="ts">
  import { CCLPastelColor } from './const/config';

  const sizes: Record<PrismaticAmbientGlowSize, string> = {
    small: '220px',
    medium: '380px',
    large: '620px'
  };

  const opacities: Record<PrismaticAmbientGlowOpacity, string> = {
    subtle: '0.28',
    standard: '0.48',
    strong: '0.68'
  };

  const blurs: Record<PrismaticAmbientGlowBlur, string> = {
    soft: '44px',
    medium: '76px',
    diffuse: '112px'
  };

  export let tone: PrismaticAmbientGlowTone = CCLPastelColor.PEACH_PINK;
  export let size: PrismaticAmbientGlowSize = 'medium';
  export let opacity: PrismaticAmbientGlowOpacity = 'standard';
  export let blur: PrismaticAmbientGlowBlur = 'medium';
  export let position: PrismaticAmbientGlowPosition = 'center';

  $: glowSize = sizes[size];
  $: glowOpacity = opacities[opacity];
  $: glowBlur = blurs[blur];
</script>

<span
  class="ambient-glow {position}"
  aria-hidden="true"
  data-testid="prismatic-ambient-glow"
  data-tone={tone}
  data-size={size}
  data-opacity={opacity}
  data-blur={blur}
  data-position={position}
  style="--glow-color: var({tone}); --glow-size: {glowSize}; --glow-opacity: {glowOpacity}; --glow-blur: {glowBlur};"
></span>

<style>
  .ambient-glow {
    position: absolute;
    z-index: 0;
    display: block;
    width: var(--glow-size);
    height: var(--glow-size);
    border-radius: 50%;
    background: var(--glow-color);
    filter: blur(var(--glow-blur));
    opacity: var(--glow-opacity);
    pointer-events: none;
  }

  .top-left {
    top: 0;
    left: 0;
    transform: translate(-35%, -35%);
  }

  .top-right {
    top: 0;
    right: 0;
    transform: translate(35%, -35%);
  }

  .center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .bottom-left {
    bottom: 0;
    left: 0;
    transform: translate(-35%, 35%);
  }

  .bottom-right {
    right: 0;
    bottom: 0;
    transform: translate(35%, 35%);
  }
</style>
