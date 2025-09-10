<script lang="ts">
  import DatePicker from '../../lib/DatePicker.svelte';
  import { CCLVividColor, CCLPastelColor } from '../../lib/const/config';
</script>

<div class="color-palette">
  <h2>Vivid Colors</h2>
  <div class="color-grid">
    {#each Object.entries(CCLVividColor) as [name, color]}
      <div class="color-sample">
        <DatePicker id={`vivid-${name.toLowerCase()}`} placeholder={name} borderColor={color} />
      </div>
    {/each}
  </div>

  <h2>Pastel Colors</h2>
  <div class="color-grid">
    {#each Object.entries(CCLPastelColor) as [name, color]}
      <div class="color-sample">
        <DatePicker id={`pastel-${name.toLowerCase()}`} placeholder={name} borderColor={color} />
      </div>
    {/each}
  </div>
</div>

<style>
  .color-palette {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
  .color-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  .color-sample {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
</style>
