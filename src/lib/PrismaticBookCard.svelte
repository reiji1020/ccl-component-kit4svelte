<script context="module" lang="ts">
  export type PrismaticBookCardTone =
    | '--strawberry-pink'
    | '--pineapple-yellow'
    | '--soda-blue'
    | '--melon-green'
    | '--grape-purple'
    | '--wrap-grey';

  export type PrismaticBookCardSize = 'default' | 'large';

  export type PrismaticBookCardProps = {
    href?: string;
    linkLabel?: string;
    imageUrl?: string;
    imageAlt?: string;
    size?: PrismaticBookCardSize;
    tone?: PrismaticBookCardTone;
  };
</script>

<script lang="ts">
  import { CCLPastelColor, CCLVividColor } from './const/config';
  import type { ColorVar } from './const/config';

  export let href: string | undefined = undefined;
  export let linkLabel: string = 'READ MORE';
  export let imageUrl: string | undefined = undefined;
  export let imageAlt: string = '';
  export let size: PrismaticBookCardSize = 'default';
  export let tone: PrismaticBookCardTone = CCLVividColor.STRAWBERRY_PINK;

  const gradientEndColors: Record<string, ColorVar> = {
    [CCLVividColor.STRAWBERRY_PINK]: CCLPastelColor.LEMON_YELLOW,
    [CCLVividColor.PINEAPPLE_YELLOW]: CCLPastelColor.PEACH_PINK,
    [CCLVividColor.SODA_BLUE]: CCLPastelColor.AKEBI_PURPLE,
    [CCLVividColor.MELON_GREEN]: CCLPastelColor.SUGAR_BLUE,
    [CCLVividColor.GRAPE_PURPLE]: CCLPastelColor.LEMON_YELLOW,
    [CCLVividColor.WRAP_GREY]: CCLPastelColor.SUGAR_BLUE
  };
  const linkElement = 'a';

  $: gradientStart = `var(${tone})`;
  $: gradientEnd = `var(${gradientEndColors[tone] ?? CCLPastelColor.LEMON_YELLOW})`;
  $: accentColor = `var(${tone})`;
</script>

<article
  class="prismatic-book-card size-{size}"
  style="--gradient-start: {gradientStart}; --gradient-end: {gradientEnd}; --accent-color: {accentColor};"
>
  <div class="cover-slot" aria-label={imageUrl ? undefined : imageAlt || undefined}>
    {#if imageUrl}
      <img class="cover-image" src={imageUrl} alt={imageAlt} />
    {:else}
      <slot name="image">
        <span class="cover-fallback" aria-hidden="true"></span>
      </slot>
    {/if}
  </div>

  {#if href}
    <svelte:element
      this={linkElement}
      class="link"
      {href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span>{linkLabel}</span>
      <svg class="link-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path d="M5 3.5L9.5 8L5 12.5" />
        <path d="M9 8H2.5" />
      </svg>
    </svelte:element>
  {:else}
    <span class="link-label">
      <span>{linkLabel}</span>
      <svg class="link-icon" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
        <path d="M5 3.5L9.5 8L5 12.5" />
        <path d="M9 8H2.5" />
      </svg>
    </span>
  {/if}
</article>

<style>
  .prismatic-book-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    width: min(100%, 300px);
    height: 500px;
    box-sizing: border-box;
    padding: 24px;
    border: 1.5px solid color-mix(in srgb, var(--gradient-end) 60%, transparent);
    border-radius: 34px;
    background: color-mix(in srgb, var(--color-surface-glass) 82%, transparent);
    font-family: Inter, sans-serif;
    letter-spacing: 0;
  }

  .size-large {
    gap: 24px;
    width: min(100%, 370px);
    height: 590px;
    padding: 28px;
  }

  .cover-slot {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 360px;
    overflow: hidden;
    border-radius: 18px;
    background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
  }

  .size-large .cover-slot {
    height: 442px;
    border-radius: 22px;
  }

  .cover-image,
  .cover-fallback {
    display: block;
    width: 100%;
    height: 100%;
  }

  .cover-image,
  .cover-slot :global(img),
  .cover-slot :global(video) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .link,
  .link-label {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    width: fit-content;
    max-width: 100%;
    color: var(--accent-color);
    font-size: 13px;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    overflow-wrap: anywhere;
  }

  .size-large .link,
  .size-large .link-label {
    font-size: 14px;
  }

  .link-icon {
    display: block;
    flex: 0 0 16px;
    width: 16px;
    height: 16px;
    fill: none;
    stroke: currentColor;
    stroke-width: 1.8;
    stroke-linecap: round;
    stroke-linejoin: round;
  }

  .link:hover {
    text-decoration: underline;
  }

  .link:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent-color) 42%, Canvas);
    outline-offset: 4px;
  }

  @media (max-width: 320px) {
    .prismatic-book-card {
      height: auto;
      min-height: 500px;
    }

    .size-large {
      min-height: 590px;
    }

    .cover-slot {
      height: auto;
      aspect-ratio: 7 / 10;
    }
  }
</style>
