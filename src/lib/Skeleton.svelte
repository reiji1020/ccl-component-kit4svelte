<script lang="ts">
  /** ローディング用の視覚プレースホルダ（非アクセシブル） */
  export let variant: 'text' | 'rect' | 'circle' = 'text';
  /** 幅（例: '100%', '240px'） */
  export let width: string | undefined;
  /** 高さ（例: '16px', '1rem'）。text時は行高として使用 */
  export let height: string | undefined;
  /** 角丸（rect/text） */
  export let radius: string = '6px';
  /** text時の行数 */
  export let lines: number = 1;
  // 固定カラースキーム
  const computedBase = '#eeeeee';
  const computedHighlight = '#ffffff';
  $: styleInline = `--skel-base: ${computedBase}; --skel-highlight: ${computedHighlight};` +
    (width ? ` width: ${width};` : '') +
    (height ? ` height: ${height};` : '');

  const arr = Array.from({ length: Math.max(1, lines) });
</script>

{#if variant === 'text'}
  <div class="ccl-skeleton-text" style={styleInline} aria-hidden="true" role="presentation">
    {#each arr as _, i}
      <span class="line" data-last={i === arr.length - 1}></span>
    {/each}
  </div>
{:else if variant === 'circle'}
  <div
    class="ccl-skeleton ccl-skeleton-circle"
    style={styleInline}
    aria-hidden="true"
    role="presentation"
  ></div>
{:else}
  <div
    class="ccl-skeleton ccl-skeleton-rect"
    style={`border-radius: ${radius}; ${styleInline}`}
    aria-hidden="true"
    role="presentation"
  ></div>
{/if}

<style>
  .ccl-skeleton,
  .ccl-skeleton-text .line {
    --skel-base: #eeeeee;
    --skel-highlight: #ffffff;
    background: var(--skel-base);
    position: relative;
    overflow: hidden;
  }

  .ccl-skeleton,
  .ccl-skeleton-text .line {
    background-image: linear-gradient(
      90deg,
      var(--skel-base) 0px,
      var(--skel-highlight) 60px,
      var(--skel-base) 120px
    );
    background-size: 200% 100%;
    animation: skel-shimmer 1.2s ease-in-out infinite;
  }

  @keyframes skel-shimmer {
    0% {
      background-position: -120px 0;
    }
    100% {
      background-position: 200px 0;
    }
  }

  .ccl-skeleton-text {
    display: grid;
    gap: 8px;
  }
  .ccl-skeleton-text .line {
    height: var(--line-height, 1em);
    border-radius: 6px;
  }
  .ccl-skeleton-text .line[data-last='true'] {
    width: 70%;
  }

  .ccl-skeleton-rect {
    display: block;
  }
  .ccl-skeleton-circle {
    display: inline-block;
    border-radius: 9999px;
    aspect-ratio: 1 / 1;
  }
</style>
