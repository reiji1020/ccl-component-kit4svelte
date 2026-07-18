<script context="module" lang="ts">
  export type PrismaticWorkCardTone =
    | '--strawberry-pink'
    | '--pineapple-yellow'
    | '--soda-blue'
    | '--melon-green'
    | '--grape-purple'
    | '--wrap-grey';

  export type PrismaticWorkCardProps = {
    title?: string;
    description?: string;
    href?: string;
    linkLabel?: string;
    imageUrl?: string;
    imageAlt?: string;
    tone?: PrismaticWorkCardTone;
  };
</script>

<script lang="ts">
  import { CCLPastelColor, CCLVividColor } from './const/config';
  import type { ColorVar } from './const/config';

  export let title: string = 'CCL Component Kit';
  export let description: string | undefined = undefined;
  export let href: string | undefined = undefined;
  export let linkLabel: string = 'VIEW PROJECT';
  export let imageUrl: string | undefined = undefined;
  export let imageAlt: string = '';
  export let tone: PrismaticWorkCardTone = CCLVividColor.STRAWBERRY_PINK;

  const imageColors: Record<string, ColorVar> = {
    [CCLVividColor.STRAWBERRY_PINK]: CCLPastelColor.PEACH_PINK,
    [CCLVividColor.PINEAPPLE_YELLOW]: CCLPastelColor.LEMON_YELLOW,
    [CCLVividColor.SODA_BLUE]: CCLPastelColor.SUGAR_BLUE,
    [CCLVividColor.MELON_GREEN]: CCLPastelColor.MATCHA_GREEN,
    [CCLVividColor.GRAPE_PURPLE]: CCLPastelColor.AKEBI_PURPLE,
    [CCLVividColor.WRAP_GREY]: CCLPastelColor.CLOUD_GREY
  };
  const linkElement = 'a';

  $: accentColor = `var(${tone})`;
  $: imageColor = `var(${imageColors[tone] ?? CCLPastelColor.PEACH_PINK})`;
</script>

<article
  class="prismatic-work-card"
  style="--accent-color: {accentColor}; --image-color: {imageColor};"
>
  <div class="image-slot" aria-label={imageUrl ? undefined : imageAlt || undefined}>
    {#if imageUrl}
      <img class="image" src={imageUrl} alt={imageAlt} />
    {:else}
      <slot name="image">
        <span class="image-fallback" aria-hidden="true"></span>
      </slot>
    {/if}
  </div>

  <div class="body">
    <div class="copy">
      <h3 class="title">{title}</h3>

      {#if description}
        <p class="description">{description}</p>
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
  </div>
</article>

<style>
  .prismatic-work-card {
    display: flex;
    align-items: center;
    gap: 44px;
    width: min(100%, 620px);
    min-height: 250px;
    box-sizing: border-box;
    padding: 38px 32px;
    border: 1.5px solid color-mix(in srgb, var(--accent-color) 52%, transparent);
    border-radius: 34px;
    background: color-mix(in srgb, var(--color-surface-glass) 72%, transparent);
    color: color-mix(in srgb, var(--palette-grape-900) 42%, var(--palette-wrap-900));
    font-family: Inter, sans-serif;
    letter-spacing: 0;
  }

  .image-slot {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 170px;
    width: 170px;
    height: 170px;
    overflow: hidden;
    border-radius: 24px;
    background: var(--image-color);
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

  .body {
    display: flex;
    flex: 1 1 auto;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 58px;
    min-width: 0;
  }

  .copy {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 100%;
    min-width: 0;
  }

  .title {
    margin: 0;
    max-width: 100%;
    color: inherit;
    font-size: 26px;
    font-weight: 700;
    line-height: normal;
    overflow-wrap: anywhere;
    word-break: normal;
  }

  .description {
    margin: 0;
    max-width: 100%;
    color: color-mix(in srgb, var(--palette-grape-900) 34%, var(--palette-wrap-800));
    font-size: 14px;
    font-weight: 500;
    line-height: 1.75;
    overflow-wrap: anywhere;
    word-break: normal;
  }

  .link,
  .link-label {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    width: fit-content;
    color: var(--accent-color);
    font-size: 15px;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
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

  @media (max-width: 640px) {
    .prismatic-work-card {
      align-items: flex-start;
      gap: 24px;
      min-height: auto;
      padding: 24px;
    }

    .image-slot {
      flex-basis: 132px;
      width: 132px;
      height: 132px;
      border-radius: 20px;
    }

    .body {
      gap: 32px;
      min-height: 132px;
    }

    .title {
      font-size: 22px;
    }
  }

  @media (max-width: 480px) {
    .prismatic-work-card {
      flex-direction: column;
    }

    .image-slot {
      width: min(100%, 170px);
      height: auto;
      aspect-ratio: 1 / 1;
    }

    .body {
      min-height: auto;
    }
  }
</style>
