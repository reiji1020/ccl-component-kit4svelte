<script context="module" lang="ts">
  export type PrismaticStoryCardSize = 'featured' | 'default';
  export type PrismaticStoryCardTone =
    | '--strawberry-pink'
    | '--pineapple-yellow'
    | '--soda-blue'
    | '--melon-green'
    | '--grape-purple'
    | '--wrap-grey';

  export type PrismaticStoryCardProps = {
    title?: string;
    label?: string;
    href?: string;
    linkLabel?: string;
    imageUrl?: string;
    imageAlt?: string;
    squareImage?: boolean;
    size?: PrismaticStoryCardSize;
    tone?: PrismaticStoryCardTone;
  };
</script>

<script lang="ts">
  import { CCLPastelColor, CCLVividColor } from './const/config';
  import type { ColorVar } from './const/config';

  type GradientStops = {
    start: ColorVar;
    end: ColorVar;
  };

  export let title: string = '技術書典20・新刊のお知らせ';
  export let label: string | undefined = undefined;
  export let href: string | undefined = undefined;
  export let linkLabel: string = 'Read more';
  export let imageUrl: string | undefined = undefined;
  export let imageAlt: string = '';
  export let squareImage: boolean = false;
  export let size: PrismaticStoryCardSize = 'featured';
  export let tone: PrismaticStoryCardTone = CCLVividColor.STRAWBERRY_PINK;

  const fallbackStops: GradientStops = {
    start: CCLPastelColor.PEACH_PINK,
    end: CCLPastelColor.SUGAR_BLUE
  };

  const gradientStops: Record<string, GradientStops> = {
    [CCLVividColor.STRAWBERRY_PINK]: fallbackStops,
    [CCLVividColor.PINEAPPLE_YELLOW]: {
      start: CCLPastelColor.LEMON_YELLOW,
      end: CCLPastelColor.PEACH_PINK
    },
    [CCLVividColor.SODA_BLUE]: {
      start: CCLPastelColor.SUGAR_BLUE,
      end: CCLPastelColor.AKEBI_PURPLE
    },
    [CCLVividColor.MELON_GREEN]: {
      start: CCLPastelColor.MATCHA_GREEN,
      end: CCLPastelColor.SUGAR_BLUE
    },
    [CCLVividColor.GRAPE_PURPLE]: {
      start: CCLPastelColor.AKEBI_PURPLE,
      end: CCLPastelColor.LEMON_YELLOW
    },
    [CCLVividColor.WRAP_GREY]: {
      start: CCLPastelColor.CLOUD_GREY,
      end: CCLPastelColor.SUGAR_BLUE
    }
  };

  $: stops = gradientStops[tone] ?? fallbackStops;
  $: gradientStart = `var(${stops.start})`;
  $: gradientEnd = `var(${stops.end})`;
  $: accentColor = `var(${tone})`;

  function handleLinkClick() {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  }
</script>

<article
  class="prismatic-story-card size-{size}"
  style="--gradient-start: {gradientStart}; --gradient-end: {gradientEnd}; --accent-color: {accentColor};"
>
  <div
    class="image-slot"
    class:square-image={squareImage}
    aria-label={imageUrl ? undefined : imageAlt || undefined}
  >
    {#if imageUrl}
      <img class="image" src={imageUrl} alt={imageAlt} />
    {:else}
      <slot name="image">
        <span class="image-fallback" aria-hidden="true"></span>
      </slot>
    {/if}
  </div>

  <div class="body">
    {#if label}
      <p class="label">{label}</p>
    {/if}

    <h3 class="title">{title}</h3>

    {#if href}
      <button class="link" type="button" on:click={handleLinkClick}>{linkLabel}</button>
    {/if}
  </div>
</article>

<style>
  .prismatic-story-card {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1.5px solid color-mix(in srgb, var(--gradient-start) 52%, transparent);
    border-radius: 34px;
    background: color-mix(in srgb, var(--color-surface-glass) 82%, transparent);
    box-shadow: 0 18px 38px color-mix(in srgb, var(--palette-grape-900) 16%, transparent);
    color: color-mix(in srgb, var(--palette-grape-900) 42%, var(--palette-wrap-900));
    font-family: Inter, sans-serif;
    letter-spacing: 0;
  }

  .size-featured {
    width: min(100%, 600px);
    min-height: 430px;
  }

  .size-default {
    width: 300px;
    min-height: 360px;
  }

  .image-slot {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
    width: 100%;
    overflow: hidden;
    background: linear-gradient(90deg, var(--gradient-start), var(--gradient-end));
  }

  .size-featured .image-slot {
    height: 300px;
  }

  .size-default .image-slot {
    height: 230px;
  }

  .image,
  .image-fallback {
    display: block;
    width: 100%;
    height: 100%;
  }

  .image,
  .image-slot :global(img),
  .image-slot :global(video) {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .square-image .image,
  .square-image :global(img),
  .square-image :global(video) {
    display: block;
    width: auto;
    max-width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: contain;
  }

  .size-featured .square-image .image,
  .size-featured .square-image :global(img),
  .size-featured .square-image :global(video) {
    height: 300px;
  }

  .size-default .square-image .image,
  .size-default .square-image :global(img),
  .size-default .square-image :global(video) {
    height: 230px;
  }

  .body {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
    min-width: 0;
  }

  .size-featured .body {
    padding: 21px 20px 20px;
  }

  .size-default .body {
    padding: 20px;
  }

  .label,
  .title {
    margin: 0;
    max-width: 100%;
    overflow-wrap: anywhere;
    word-break: normal;
  }

  .label {
    color: var(--accent-color);
    font-size: 12px;
    font-weight: 700;
    line-height: 1.25;
    text-transform: uppercase;
  }

  .title {
    color: inherit;
    font-weight: 400;
    line-height: normal;
  }

  .size-featured .title {
    font-size: 24px;
  }

  .size-default .title {
    font-size: 18px;
  }

  .link {
    margin-top: auto;
    padding: 0;
    border: 0;
    background: transparent;
    color: var(--accent-color);
    cursor: pointer;
    font-family: inherit;
    font-size: 13px;
    font-weight: 700;
    line-height: 1.4;
    text-decoration: none;
  }

  .link:hover {
    text-decoration: underline;
  }

  .link:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent-color) 42%, Canvas);
    outline-offset: 4px;
  }
</style>
