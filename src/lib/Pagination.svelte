<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import type { ColorVar } from './const/config';

  export let page: number = 1; // 1-based
  export let total: number | undefined = undefined; // total items
  export let perPage: number = 10; // items per page when using total
  export let pageCount: number | undefined = undefined; // total pages (alternative to total)
  export let boundaryCount: number = 1; // pages maintained at each boundary
  export let siblingCount: number = 1; // pages around current page
  export let showFirstLast: boolean = true;
  export let showPrevNext: boolean = true;
  export let disabled: boolean = false;
  export let accentColor: ColorVar = '--soda-blue';
  export let ariaLabel: string = 'Pagination';

  const dispatch = createEventDispatcher<{ change: { page: number } }>();

  // normalize and clamp helpers
  function getPageCount(
    pageCountValue: number | undefined,
    totalValue: number | undefined,
    perPageValue: number
  ): number {
    const count =
      pageCountValue ?? (totalValue && perPageValue ? Math.ceil(totalValue / perPageValue) : 1);
    return Math.max(1, count || 1);
  }

  function clampPage(p: number, totalPages: number): number {
    return Math.min(Math.max(1, Math.trunc(p || 1)), totalPages);
  }

  $: totalPages = getPageCount(pageCount, total, perPage);
  $: page = clampPage(page, totalPages);

  function goTo(p: number) {
    if (disabled) return;
    const next = clampPage(p, totalPages);
    if (next !== page) {
      page = next;
      dispatch('change', { page });
    }
  }

  type Item = number | 'ellipsis';

  function range(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }

  function usePagination(
    currentPage: number,
    totalPages: number,
    currentBoundaryCount: number,
    currentSiblingCount: number
  ): Item[] {
    // total pages small enough to show all
    const totalNumbers = currentBoundaryCount * 2 + currentSiblingCount * 2 + 3; // first + last + current
    const totalBlocks = totalNumbers + 2; // with two ellipses

    if (totalPages <= totalBlocks) {
      return range(1, totalPages);
    }

    const startPages = range(1, Math.min(currentBoundaryCount, totalPages));
    const endPages = range(
      Math.max(totalPages - currentBoundaryCount + 1, currentBoundaryCount + 1),
      totalPages
    );

    const siblingsStart = Math.max(
      Math.min(
        currentPage - currentSiblingCount,
        totalPages - currentBoundaryCount - currentSiblingCount * 2 - 1
      ),
      currentBoundaryCount + 2
    );
    const siblingsEnd = Math.min(
      Math.max(
        currentPage + currentSiblingCount,
        currentBoundaryCount + currentSiblingCount * 2 + 2
      ),
      endPages[0] - 2
    );

    const items: Item[] = [
      ...startPages,
      siblingsStart > currentBoundaryCount + 2
        ? 'ellipsis'
        : ((currentBoundaryCount + 1) as unknown as Item),
      ...range(siblingsStart, siblingsEnd),
      siblingsEnd < totalPages - currentBoundaryCount - 1
        ? 'ellipsis'
        : ((totalPages - currentBoundaryCount) as unknown as Item),
      ...endPages
    ];

    // Clean up potential duplicate numbers from the conditional fallbacks above
    const normalized: Item[] = [];
    let prev: Item | undefined = undefined;
    for (const it of items) {
      if (it === 'ellipsis') {
        if (prev !== 'ellipsis') normalized.push('ellipsis');
      } else {
        if (it !== prev) normalized.push(it);
      }
      prev = it;
    }
    return normalized;
  }

  $: items = usePagination(page, totalPages, boundaryCount, siblingCount);

  onMount(() => {
    // Ensure initial page is clamped and consumers can react if needed
    const normalized = clampPage(page, totalPages);
    if (normalized !== page) {
      page = normalized;
      dispatch('change', { page });
    }
  });
</script>

<nav class="ccl-pagination" aria-label={ariaLabel} style={`--ccl-pagination-accent: var(${accentColor});`}>
  <ul class="ccl-pagination__list" role="list">
    {#if showFirstLast}
      <li>
        <button
          class="ccl-pagination__control"
          on:click={() => goTo(1)}
          disabled={disabled || page === 1}
          aria-label="go to first page"
          type="button"
        >«</button>
      </li>
    {/if}
    {#if showPrevNext}
      <li>
        <button
          class="ccl-pagination__control"
          on:click={() => goTo(page - 1)}
          disabled={disabled || page === 1}
          aria-label="go to previous page"
          type="button"
        >‹</button>
      </li>
    {/if}

    {#each items as it}
      {#if it === 'ellipsis'}
        <li class="ccl-pagination__ellipsis" aria-hidden="true">…</li>
      {:else}
        <li>
          <button
            class="ccl-pagination__page"
            class:active={it === page}
            aria-label={`go to page ${it}`}
            aria-current={it === page ? 'page' : undefined}
            disabled={disabled}
            on:click={() => goTo(it)}
            type="button"
          >{it}</button>
        </li>
      {/if}
    {/each}

    {#if showPrevNext}
      <li>
        <button
          class="ccl-pagination__control"
          on:click={() => goTo(page + 1)}
          disabled={disabled || page === totalPages}
          aria-label="go to next page"
          type="button"
        >›</button>
      </li>
    {/if}
    {#if showFirstLast}
      <li>
        <button
          class="ccl-pagination__control"
          on:click={() => goTo(totalPages)}
          disabled={disabled || page === totalPages}
          aria-label="go to last page"
          type="button"
        >»</button>
      </li>
    {/if}
  </ul>
</nav>

<style>
  .ccl-pagination {
    --ccl-pagination-accent: var(--soda-blue);
    display: inline-block;
  }
  .ccl-pagination__list {
    list-style: none;
    display: inline-flex;
    gap: 6px;
    padding: 0;
    margin: 0;
    align-items: center;
  }
  .ccl-pagination__page,
  .ccl-pagination__control {
    appearance: none;
    border: 1px solid var(--wrap-grey, #ccc);
    background: white;
    color: inherit;
    width: 36px;
    height: 36px;
    padding: 0;
    border-radius: 50%;
    cursor: pointer;
    font: inherit;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .ccl-pagination__page.active {
    background: var(--ccl-pagination-accent);
    border-color: var(--ccl-pagination-accent);
    color: white;
  }
  .ccl-pagination__ellipsis {
    padding: 0 4px;
    color: var(--wrap-grey, #888);
  }
  .ccl-pagination__page:disabled,
  .ccl-pagination__control:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .ccl-pagination__page:not(:disabled):hover,
  .ccl-pagination__control:not(:disabled):hover {
    border-color: var(--ccl-pagination-accent);
  }
</style>
