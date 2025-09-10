<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { CCLVividColor } from './const/config';
  import type { ColorVar } from './const/config';
  import { vividFor } from './const/colorMap';

  const dispatch = createEventDispatcher<{ change: { page: number } }>();

  /** 現在のページ(1始まり) */
  export let page: number = 1;
  /** 総アイテム数（`pageCount`とどちらか一方を指定） */
  export let total: number | undefined = undefined;
  /** 1ページあたり件数（`total`指定時に使用） */
  export let perPage: number = 10;
  /** 総ページ数（`total`の代わりに明示指定可） */
  export let pageCount: number | undefined = undefined;

  /** 省略せず両端に常に表示するページ数 */
  export let boundaryCount: number = 1;
  /** 現在ページの前後に表示するページ数 */
  export let siblingCount: number = 1;

  /** 最初/最後ページボタンの表示 */
  export let showFirstLast: boolean = true;
  /** 前へ/次へボタンの表示 */
  export let showPrevNext: boolean = true;

  /** 操作不可にする */
  export let disabled: boolean = false;

  /** アクセントカラー（選択中・ホバー等） */
  export let accentColor: ColorVar = CCLVividColor.SODA_BLUE;

  /** `nav`のARIAラベル */
  export let ariaLabel: string = 'Pagination';

  $: accentFg = vividFor(accentColor as string);
  $: styleInline =
    `--accent-color: var(${accentColor});` + (accentFg ? ` --accent-fg: var(${accentFg});` : '');

  $: totalPages = Math.max(
    1,
    pageCount ?? (total != null ? Math.ceil(total / Math.max(1, perPage)) : 1)
  );
  $: currentPage = clamp(page, 1, totalPages);
  $: pages = getVisiblePages(totalPages, currentPage, siblingCount, boundaryCount);

  function clamp(n: number, min: number, max: number) {
    return Math.min(max, Math.max(min, n));
  }

  function range(start: number, end: number) {
    const arr: number[] = [];
    for (let i = start; i <= end; i++) arr.push(i);
    return arr;
  }

  function getVisiblePages(
    total: number,
    current: number,
    sib: number,
    boundary: number
  ): (number | 'ellipsis-start' | 'ellipsis-end')[] {
    if (total <= 0) return [1];

    const startPages = range(1, Math.min(boundary, total));
    const endPages = range(Math.max(total - boundary + 1, boundary + 1), total);

    // 兄弟範囲の開始/終了を計算
    const siblingsStart = Math.max(
      Math.min(current - sib, total - boundary - sib * 2 - 1),
      boundary + 2
    );
    const siblingsEnd = Math.min(
      Math.max(current + sib, boundary + sib * 2 + 2),
      endPages.length > 0 ? endPages[0] - 2 : total - 1
    );

    const pages: (number | 'ellipsis-start' | 'ellipsis-end')[] = [];
    pages.push(...startPages);

    if (siblingsStart > boundary + 2) {
      pages.push('ellipsis-start');
    } else if (boundary + 1 < total - boundary) {
      pages.push(boundary + 1);
    }

    pages.push(...range(siblingsStart, siblingsEnd));

    if (siblingsEnd < total - boundary - 1) {
      pages.push('ellipsis-end');
    } else if (total - boundary > boundary) {
      pages.push(total - boundary);
    }

    pages.push(...endPages);
    // ユニーク化と並び順維持
    const seen = new Set<string>();
    return pages.filter((p) => {
      const key = String(p);
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function goTo(target: number) {
    if (disabled) return;
    const next = clamp(target, 1, totalPages);
    if (next !== currentPage) {
      dispatch('change', { page: next });
    }
  }
  //
</script>

<nav class="ccl-pagination" aria-label={ariaLabel} style={styleInline}>
  <ul class="list" role="list">
    {#if showFirstLast}
      <li>
        <button
          type="button"
          class="item control"
          on:click={() => goTo(1)}
          aria-label="Go to first page"
          disabled={disabled || currentPage === 1}>«</button
        >
      </li>
    {/if}
    {#if showPrevNext}
      <li>
        <button
          type="button"
          class="item control"
          on:click={() => goTo(currentPage - 1)}
          aria-label="Go to previous page"
          disabled={disabled || currentPage === 1}>‹</button
        >
      </li>
    {/if}

    {#each pages as p}
      {#if p === 'ellipsis-start' || p === 'ellipsis-end'}
        <li><span class="item ellipsis" aria-hidden="true">…</span></li>
      {:else}
        <li>
          <button
            type="button"
            class="item {p === currentPage ? 'active' : ''}"
            aria-current={p === currentPage ? 'page' : undefined}
            aria-label={`Go to page ${p}`}
            {disabled}
            on:click={() => goTo(p as number)}>{p}</button
          >
        </li>
      {/if}
    {/each}

    {#if showPrevNext}
      <li>
        <button
          type="button"
          class="item control"
          on:click={() => goTo(currentPage + 1)}
          aria-label="Go to next page"
          disabled={disabled || currentPage === totalPages}>›</button
        >
      </li>
    {/if}
    {#if showFirstLast}
      <li>
        <button
          type="button"
          class="item control"
          on:click={() => goTo(totalPages)}
          aria-label="Go to last page"
          disabled={disabled || currentPage === totalPages}>»</button
        >
      </li>
    {/if}
  </ul>
  <div class="sr-only" aria-live="polite">Page {currentPage} of {totalPages}</div>
</nav>

<style>
  .ccl-pagination {
    display: inline-block;
    --accent-color: var(--soda-blue);
    --size: 36px;
  }
  .list {
    display: flex;
    gap: 6px;
    padding: 0;
    margin: 0;
    list-style: none;
    align-items: center;
  }
  .item {
    width: var(--size);
    min-width: var(--size);
    height: var(--size);
    padding: 0;
    border-radius: 50%;
    border: 2px solid var(--cloud-grey);
    background: white;
    color: var(--wrap-grey);
    font-size: 14px;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition:
      border-color 0.15s,
      color 0.15s,
      background 0.15s;
  }
  .item.control {
    font-size: 18px; /* larger chevrons */
  }
  .item.ellipsis {
    width: auto;
    min-width: auto;
    padding: 0 4px;
    border-radius: 0;
    background: transparent;
    border: none;
    cursor: default;
    color: var(--wrap-grey);
  }
  .item:hover:not(:disabled) {
    border-color: var(--accent-color);
    color: var(--accent-color);
  }
  .item.active {
    background: var(--accent-color);
    border-color: var(--accent-color);
    color: var(--accent-fg, #fff);
    cursor: default;
  }
  .item:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
</style>
