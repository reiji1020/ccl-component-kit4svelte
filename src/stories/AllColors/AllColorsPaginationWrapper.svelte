<script lang="ts">
  import Pagination from '../../lib/Pagination.svelte';
  import { CCLVividColor, CCLPastelColor } from '../../lib/const/config';

  const common = {
    page: 3,
    pageCount: 7,
    boundaryCount: 1,
    siblingCount: 1,
    showFirstLast: true,
    showPrevNext: true,
    disabled: false
  } as const;
</script>

<div class="color-palette">
  <h2>Vivid Colors</h2>
  <div class="color-list">
    {#each Object.entries(CCLVividColor) as [name, color]}
      <div class="color-sample">
        <Pagination {...common} accentColor={color} ariaLabel={`Pagination ${name}`} />
        <div class="label">{name}</div>
      </div>
    {/each}
  </div>

  <h2>Pastel Colors</h2>
  <div class="color-list">
    {#each Object.entries(CCLPastelColor) as [name, color]}
      <div class="color-sample">
        <Pagination {...common} accentColor={color} ariaLabel={`Pagination ${name}`} />
        <div class="label">{name}</div>
      </div>
    {/each}
  </div>
</div>

<style>
  .color-palette {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 1rem;
  }
  .color-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .color-sample {
    display: block;
    padding: 8px 0;
  }
  .label {
    font-size: 12px;
    color: var(--wrap-grey);
    margin-top: 6px;
  }
</style>
