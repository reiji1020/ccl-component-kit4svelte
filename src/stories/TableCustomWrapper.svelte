<script lang="ts">
  import { Badge, Button, CCLVividColor, Table, type TableSort } from '$lib/index';

  let sort = $state<TableSort | null>(null);
  let selected = $state('');
  let clear = $state(false);
  const data = [['Beta', 10, '公開'], ['Alpha', 2, '下書き']];
</script>

<button type="button" onclick={() => (clear = true)}>一覧を空にする</button>
<output aria-label="選択した行">{selected}</output>
<output aria-label="並べ替え">{sort?.direction}</output>
<Table
  tableColor={CCLVividColor.SODA_BLUE}
  dataHeader={['名前', '件数', '状態']}
  tableData={clear ? [] : data}
  width="min(100%, 640px)"
  height="140px"
  sortableColumns={[1]}
  {sort}
  onSortChange={(next) => (sort = next)}
>
  {#snippet cell(value, row, column)}
    {#if column === 0}
      <a href={`#item-${row}`}>{value}</a>
      <Button label={`${value} を選択`} type="button" onClick={() => (selected = String(data[row][0]))} />
    {:else if column === 2}
      <Badge label={String(value)} ariaLabel={undefined} />
    {:else}
      {value}
    {/if}
  {/snippet}
  {#snippet empty()}表示する項目がありません{/snippet}
</Table>
