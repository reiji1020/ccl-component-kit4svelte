<script lang="ts">
  import PrismaticBookCard from '../../lib/PrismaticBookCard.svelte';
  import { CCLVividColor } from '../../lib/const/config';

  const vividColors = Object.entries(CCLVividColor);
</script>

<div class="color-palette">
  {#each vividColors as [name, tone] (name)}
    <div class="color-sample">
      <span>{name}</span>
      <PrismaticBookCard linkLabel={`${name} を見る`} {tone} />
    </div>
  {/each}
</div>

<style>
  .color-palette {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 24px;
    width: min(100%, 980px);
    padding: 24px;
    box-sizing: border-box;
  }

  .color-sample {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }

  .color-sample > span {
    font-family: Inter, sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0;
  }
</style>
