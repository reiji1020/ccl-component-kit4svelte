<script lang="ts">
  import { CCLVividColor } from './const/config';
  import type { ColorVar } from './const/config';
  import { vividFor, isPastel } from './const/colorMap';
  import type { BreadcrumbItem } from './types/breadcrumb';

  /** パンくずリストの項目 */
  export let items: BreadcrumbItem[] = [];
  /** セパレータ文字（slotが優先） */
  export let separator: string = '/';
  /** navのaria-label */
  export let ariaLabel: string = 'Breadcrumb';
  /** 最後の要素もリンクにするか（デフォルトは現在地として非リンク） */
  export let lastItemClickable: boolean = false;
  /** アクティブ要素（最後の要素）のテキスト色。既定はストロベリーピンク */
  export let activeColor: ColorVar = CCLVividColor.STRAWBERRY_PINK;
  $: activeTextVar = isPastel(activeColor) ? vividFor(activeColor)! : activeColor;
</script>

<nav class="ccl-breadcrumb" aria-label={ariaLabel}>
  <ol>
    {#each items as item, i (i)}
      <li>
        {#if i < items.length - 1 || lastItemClickable}
          {#if item.href}
            <a
              href={item.href}
              style={i === items.length - 1 ? `color: var(${activeTextVar});` : undefined}
              >{item.label}</a
            >
          {:else}
            <span style={i === items.length - 1 ? `color: var(${activeTextVar});` : undefined}
              >{item.label}</span
            >
          {/if}
        {:else}
          <span aria-current="page" style={`color: var(${activeTextVar});`}>{item.label}</span>
        {/if}
        {#if i < items.length - 1}
          <span class="sep" aria-hidden="true">
            <slot name="separator">{separator}</slot>
          </span>
        {/if}
      </li>
    {/each}
  </ol>
  <slot />
</nav>

<style>
  .ccl-breadcrumb {
    --bc-color: var(--wrap-grey);
    --bc-sep-color: var(--cloud-grey);
    --bc-gap: 8px;
    --bc-font-size: 13px;
  }

  .ccl-breadcrumb ol {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: var(--bc-gap);
    color: var(--bc-color);
    font-size: var(--bc-font-size);
  }

  .ccl-breadcrumb li {
    display: inline-flex;
    align-items: center;
  }

  .ccl-breadcrumb a {
    color: var(--bc-color);
    text-decoration: none;
  }
  .ccl-breadcrumb a:hover {
    text-decoration: underline;
  }

  .ccl-breadcrumb .sep {
    margin: 0 var(--bc-gap);
    color: var(--bc-sep-color);
  }

  .ccl-breadcrumb [aria-current='page'] {
    font-weight: 600;
  }
</style>
