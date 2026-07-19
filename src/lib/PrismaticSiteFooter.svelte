<script context="module" lang="ts">
  export type PrismaticSiteFooterTone =
    | '--strawberry-pink'
    | '--pineapple-yellow'
    | '--soda-blue'
    | '--melon-green'
    | '--grape-purple'
    | '--wrap-grey';

  export type PrismaticSiteFooterLink = {
    label: string;
    href: string;
  };

  export type PrismaticSiteFooterDensity = 'default' | 'compact' | 'studio';

  export type PrismaticSiteFooterProps = {
    brand?: string;
    brandHref?: string;
    logoUrl?: string;
    logoAlt?: string;
    logoHeight?: string;
    links?: PrismaticSiteFooterLink[];
    copyright?: string;
    ariaLabel?: string;
    density?: PrismaticSiteFooterDensity;
    studioGradientStart?: PrismaticSiteFooterTone;
    studioGradientLast?: PrismaticSiteFooterTone;
    tone?: PrismaticSiteFooterTone;
  };
</script>

<script lang="ts">
  import { CCLVividColor } from './const/config';

  const defaultLinks: PrismaticSiteFooterLink[] = [
    { label: 'PRIVACY', href: '#privacy' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const year = new Date().getFullYear();
  const lightTones: PrismaticSiteFooterTone[] = [
    CCLVividColor.PINEAPPLE_YELLOW,
    CCLVividColor.MELON_GREEN
  ];

  export let brand: string = 'CANDY CHUPS Lab.';
  export let brandHref: string | undefined = undefined;
  export let logoUrl: string | undefined = undefined;
  export let logoAlt: string | undefined = undefined;
  export let logoHeight: string = '40px';
  export let links: PrismaticSiteFooterLink[] = defaultLinks;
  export let copyright: string = `Copyright © ${year} CANDY CHUPS Lab. All Rights Reserved.`;
  export let ariaLabel: string = 'フッターナビゲーション';
  export let density: PrismaticSiteFooterDensity = 'default';
  export let studioGradientStart: PrismaticSiteFooterTone | undefined = undefined;
  export let studioGradientLast: PrismaticSiteFooterTone | undefined = undefined;
  export let tone: PrismaticSiteFooterTone = CCLVividColor.STRAWBERRY_PINK;

  function toCssUrl(value: string): string {
    const escaped = value
      .replace(/\0/g, '\uFFFD')
      .replace(/\\/g, '\\\\')
      .replace(/"/g, '\\"')
      .replace(/\n/g, '\\a ')
      .replace(/\r/g, '\\d ')
      .replace(/\f/g, '\\c ');

    return `url("${escaped}")`;
  }

  $: accentColor = `var(${tone})`;
  $: studioGradientStartColor = studioGradientStart
    ? `var(${studioGradientStart})`
    : 'var(--palette-grape-900)';
  $: startTextColor = studioGradientStart && lightTones.includes(studioGradientStart)
    ? 'var(--palette-grape-900)'
    : 'var(--color-surface-glass)';
  $: lastTone = studioGradientLast ?? tone;
  $: studioGradientLastColor = `var(${lastTone})`;
  $: lastTextColor = lightTones.includes(lastTone)
    ? 'var(--palette-grape-900)'
    : 'var(--color-surface-glass)';
  $: logoImage = logoUrl ? toCssUrl(logoUrl) : 'none';
  $: logoLabel = logoAlt?.trim() || brand;
</script>

<footer
  class="prismatic-site-footer density-{density}"
  style="--accent-color: {accentColor}; --studio-gradient-start: {studioGradientStartColor}; --studio-gradient-last: {studioGradientLastColor}; --footer-start-text-color: {startTextColor}; --footer-last-text-color: {lastTextColor};"
>
  <div class="footer-main">
    {#if brandHref}
      <a class="brand" href={brandHref}>
        {#if logoUrl}
          <span
            class="brand-logo"
            role="img"
            aria-label={logoLabel}
            data-logo-url={logoUrl}
            style="--logo-height: {logoHeight}; --logo-image: {logoImage};"
          ></span>
        {:else}
          {brand}
        {/if}
      </a>
    {:else}
      <span class="brand">
        {#if logoUrl}
          <span
            class="brand-logo"
            role="img"
            aria-label={logoLabel}
            data-logo-url={logoUrl}
            style="--logo-height: {logoHeight}; --logo-image: {logoImage};"
          ></span>
        {:else}
          {brand}
        {/if}
      </span>
    {/if}

    {#if links.length > 0}
      <nav aria-label={ariaLabel}>
        <ul>
          {#each links as item (item.href + item.label)}
            <li><a href={item.href}>{item.label}</a></li>
          {/each}
        </ul>
      </nav>
    {/if}
  </div>

  <small>{copyright}</small>
</footer>

<style>
  .prismatic-site-footer {
    --footer-gap: 32px;
    --footer-min-height: 180px;
    --footer-padding: 40px 48px 32px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: var(--footer-gap);
    width: min(100%, 1300px);
    min-height: var(--footer-min-height);
    box-sizing: border-box;
    padding: var(--footer-padding);
    border: 1.5px solid color-mix(in srgb, var(--accent-color) 64%, var(--palette-grape-900));
    border-radius: 34px;
    background: linear-gradient(
      112deg,
      var(--studio-gradient-start) 0%,
      color-mix(in srgb, var(--studio-gradient-start) 68%, var(--studio-gradient-last)) 54%,
      var(--studio-gradient-last) 100%
    );
    box-shadow: 0 16px 20px color-mix(in srgb, var(--palette-grape-900) 18%, transparent);
    color: var(--footer-start-text-color);
    font-family: Inter, sans-serif;
    line-height: normal;
    letter-spacing: 0;
  }

  .density-compact {
    --footer-gap: 20px;
    --footer-min-height: 132px;
    --footer-padding: 28px 36px 24px;
  }

  .density-studio {
    --footer-gap: 40px;
    --footer-min-height: 240px;
    --footer-padding: 52px 56px 40px;
  }

  .footer-main {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 32px;
  }

  .brand {
    display: flex;
    align-items: center;
    color: inherit;
    font-size: 22px;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
  }

  .brand-logo {
    display: block;
    width: min(300px, 48vw);
    height: var(--logo-height);
    background: currentColor;
    -webkit-mask: var(--logo-image) left center / contain no-repeat;
    mask: var(--logo-image) left center / contain no-repeat;
  }

  nav {
    color: var(--footer-last-text-color);
    min-width: 0;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    gap: 12px 24px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  li a {
    color: inherit;
    font-size: 13px;
    font-weight: 700;
    text-decoration-thickness: 1px;
    text-underline-offset: 5px;
  }

  li a:hover,
  li a:focus-visible {
    text-decoration-line: underline;
  }

  a:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent-color) 42%, Canvas);
    outline-offset: 4px;
  }

  small {
    font-size: 10px;
    font-weight: 500;
  }

  @media (max-width: 640px) {
    .prismatic-site-footer {
      --footer-gap: 28px;
      --footer-min-height: 220px;
      --footer-padding: 32px 28px 28px;

      border-radius: 28px;
    }

    .density-compact {
      --footer-gap: 20px;
      --footer-min-height: 132px;
      --footer-padding: 28px 28px 24px;
    }

    .density-studio {
      --footer-gap: 40px;
      --footer-min-height: 240px;
      --footer-padding: 52px 28px 40px;
    }

    .footer-main {
      flex-direction: column;
      gap: 24px;
    }

    ul {
      justify-content: flex-start;
    }
  }
</style>
