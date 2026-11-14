<script lang="ts">
  import { CCLPastelColor, CCLVividColor } from '$lib/const/config';
  import { vividFor } from './const/colorMap';
  import type { Snippet } from 'svelte';
  import type { TableSort } from './types/table';

  /**
   * テーブルメインカラー
   * CCLVividColorの中から指定する
   * @default --strawberry-pink
   * @type string
   */
  export let tableColor: string;

  /**
   * テーブルサブカラー
   * CCLPasterColorの中から指定する
   * @default --peach-pink
   * @type string
   */
  let bodyColor: string;

  /**
   * テーブルのヘッダー
   * 一次元配列で自由長、
   * @type Array<string>
   */
  export let dataHeader: string[];

  /**
   * テーブルにいれるデータ
   * 2次元の配列で自由長
   * @type Array<Array<string | number>>
   */
  export let tableData: (string | number)[][];

  /** Receives the cell value, its source row index, and its column index. */
  export let cell: Snippet<[string | number, number, number]> | undefined = undefined;
  export let empty: Snippet | undefined = undefined;
  export let width = '90%';
  export let height = '200px';
  export let sortableColumns: number[] = [];
  export let sort: TableSort | null = null;
  export let onSortChange: ((sort: TableSort) => void) | undefined = undefined;

  function changeSort(column: number) {
    sort = {
      column,
      direction: sort?.column === column && sort.direction === 'ascending'
        ? 'descending'
        : 'ascending'
    };
    onSortChange?.(sort);
  }

  function orderRows(data: typeof tableData, current: TableSort | null) {
    const rows = data.map((row, index) => ({ row, index }));
    if (!current) return rows;
    const { column, direction } = current;
    return rows.sort((a, b) => {
      const left = a.row[column];
      const right = b.row[column];
      if (left === undefined) return right === undefined ? 0 : 1;
      if (right === undefined) return -1;
      let comparison: number;
      if (typeof left === 'number' && typeof right === 'number') {
        comparison = left - right;
      } else if (typeof left !== typeof right) {
        comparison = typeof left === 'number' ? -1 : 1;
      } else {
        comparison = String(left).localeCompare(String(right));
      }
      return direction === 'ascending' ? comparison : -comparison;
    });
  }

  $: rows = orderRows(tableData, sort);

  /**
   * テーブルカラーに応じた背景色を取得する関数
   * @param tableColor - テーブルのメインカラー
   * @returns 背景色
   */
  function getBodyColor(tableColor: string): string {
    switch (tableColor) {
      case CCLVividColor.STRAWBERRY_PINK:
        return CCLPastelColor.PEACH_PINK;
      case CCLVividColor.PINEAPPLE_YELLOW:
        return CCLPastelColor.LEMON_YELLOW;
      case CCLVividColor.SODA_BLUE:
        return CCLPastelColor.SUGAR_BLUE;
      case CCLVividColor.MELON_GREEN:
        return CCLPastelColor.MATCHA_GREEN;
      case CCLVividColor.GRAPE_PURPLE:
        return CCLPastelColor.AKEBI_PURPLE;
      case CCLVividColor.WRAP_GREY:
        return CCLPastelColor.CLOUD_GREY;
      default:
        return CCLPastelColor.PEACH_PINK;
    }
  }

  // 背景色を取得
  $: bodyColor = getBodyColor(tableColor);
  // ヘッダの前景色（万一パステルが指定された場合に備える）
  $: headerFg = vividFor(tableColor);
</script>

<!--汎用テーブル-->
<div class="table-wrapper" style:max-width={width} style:height={height}>
  <table>
    <!--テーブルヘッダー-->
    <thead
      class="table-header"
      style="--bgColor: var({tableColor}); {headerFg ? `--th-fg: var(${headerFg});` : ''}"
    >
      <tr>
        {#each dataHeader as title, column}
          <th scope="col" aria-sort={sort?.column === column ? sort.direction : undefined}>
            {#if sortableColumns.includes(column)}
              <button type="button" onclick={() => changeSort(column)}>
                {title}
                {#if sort?.column === column}
                  <span aria-hidden="true">{sort.direction === 'ascending' ? '↑' : '↓'}</span>
                {/if}
              </button>
            {:else}
              {title}
            {/if}
          </th>
        {/each}
      </tr>
    </thead>
    <tbody>
      {#each rows as { row, index } (index)}
        <tr class="table-body-style" style="--table-body-color: var({bodyColor})">
          {#each row as data, column}
            <td>
              {#if cell}
                {@render cell(data, index, column)}
              {:else}
                {data}
              {/if}
            </td>
          {/each}
        </tr>
      {:else}
        {#if empty}
          <tr class="table-body-style" style="--table-body-color: var({bodyColor})">
            <td colspan={Math.max(1, dataHeader.length)}>{@render empty()}</td>
          </tr>
        {/if}
      {/each}
    </tbody>
  </table>
</div>

<style>
  th {
    padding: 5px 60px;
  }

  thead {
    position: sticky;
    top: 0;
    left: 0;
    white-space: nowrap;
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  .table-wrapper {
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }

  .table-header {
    background-color: var(--bgColor);
    color: var(--th-fg, #ffffff);
  }
  .table-body-style {
    text-align: center;
    color: var(--wrap-grey);
    white-space: nowrap;
  }
  .table-body-style:nth-child(odd) {
    background-color: var(--table-body-color);
  }
</style>
