<script context="module" lang="ts">
  export type PrismaticSiteHeaderTone =
    | '--strawberry-pink'
    | '--pineapple-yellow'
    | '--soda-blue'
    | '--melon-green'
    | '--grape-purple'
    | '--wrap-grey';

  export type PrismaticSiteHeaderItem = {
    label: string;
    href: string;
    active?: boolean;
  };

  export type PrismaticSiteHeaderProps = {
    brand?: string;
    brandHref?: string;
    logoUrl?: string;
    logoAlt?: string;
    logoHeight?: string;
    navigation?: PrismaticSiteHeaderItem[];
    ariaLabel?: string;
    tone?: PrismaticSiteHeaderTone;
  };
</script>

<script lang="ts">
  import { CCLVividColor } from './const/config';

  const defaultNavigation: PrismaticSiteHeaderItem[] = [
    { label: 'DISCOVER', href: '#discover', active: true },
    { label: 'WORKS', href: '#works' },
    { label: 'BOOKS', href: '#books' },
    { label: 'ABOUT', href: '#about' },
    { label: 'SHOP', href: '#shop' }
  ];

  export let brand: string = 'CANDY CHUPS Lab.';
  export let brandHref: string | undefined = undefined;
  export let logoUrl: string | undefined = undefined;
  export let logoAlt: string | undefined = undefined;
  export let logoHeight: string = '40px';
  export let navigation: PrismaticSiteHeaderItem[] = defaultNavigation;
  export let ariaLabel: string = 'メインナビゲーション';
  export let tone: PrismaticSiteHeaderTone = CCLVividColor.STRAWBERRY_PINK;

  const brandLinkElement = 'a';
  $: accentColor = `var(${tone})`;
</script>

<header class="prismatic-site-header" style="--accent-color: {accentColor};">
  {#if brandHref}
    <svelte:element this={brandLinkElement} class="brand" href={brandHref}>
      {#if logoUrl}
        <img
          class="brand-logo"
          src={logoUrl}
          alt={logoAlt ?? brand}
          style="--logo-height: {logoHeight};"
        />
      {:else}
        {brand}
      {/if}
    </svelte:element>
  {:else}
    <span class="brand">
      {#if logoUrl}
        <img
          class="brand-logo"
          src={logoUrl}
          alt={logoAlt ?? brand}
          style="--logo-height: {logoHeight};"
        />
      {:else}
        {brand}
      {/if}
    </span>
  {/if}

  <nav aria-label={ariaLabel}>
    <ul>
      {#each navigation as item (item.href + item.label)}
        <li>
          <a
            class:active={item.active}
            href={item.href}
            aria-current={item.active ? 'page' : undefined}
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<style>
  .prismatic-site-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    width: min(100%, 1300px);
    min-height: 104px;
    box-sizing: border-box;
    padding: 24px 35px;
    border: 1.5px solid color-mix(in srgb, var(--accent-color) 42%, transparent);
    border-radius: 34px;
    background: color-mix(in srgb, var(--color-surface-glass) 78%, transparent);
    box-shadow: 0 16px 20px color-mix(in srgb, var(--palette-grape-900) 18%, transparent);
    font-family: Inter, sans-serif;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0;
  }

  .brand {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    color: var(--accent-color);
    font-size: 18px;
    text-decoration: none;
    white-space: nowrap;
  }

  .brand-logo {
    display: block;
    width: auto;
    max-width: min(260px, 40vw);
    height: var(--logo-height);
    object-fit: contain;
  }

  nav {
    min-width: 0;
  }

  ul {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a:not(.brand) {
    position: relative;
    display: block;
    padding: 8px 0;
    color: color-mix(in srgb, var(--palette-grape-900) 42%, var(--palette-wrap-900));
    font-size: 14px;
    text-decoration: none;
    white-space: nowrap;
  }

  a:not(.brand)::after {
    position: absolute;
    right: 0;
    bottom: 2px;
    left: 0;
    height: 2px;
    border-radius: 2px;
    background: var(--accent-color);
    content: '';
    opacity: 0;
    transform: scaleX(0.4);
    transition:
      opacity 160ms ease,
      transform 160ms ease;
  }

  a:not(.brand):hover::after,
  a:not(.brand):focus-visible::after,
  a:not(.brand).active::after {
    opacity: 1;
    transform: scaleX(1);
  }

  a:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--accent-color) 42%, Canvas);
    outline-offset: 4px;
  }

  @media (max-width: 760px) {
    .prismatic-site-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 12px;
      min-height: 104px;
      padding: 22px 28px;
    }

    nav {
      width: 100%;
      overflow-x: auto;
      scrollbar-width: thin;
    }

    ul {
      justify-content: flex-start;
      width: max-content;
      min-width: 100%;
    }
  }

  @media (max-width: 480px) {
    .prismatic-site-header {
      padding: 20px 22px;
      border-radius: 28px;
    }

    ul {
      gap: 16px;
    }
  }
</style>
