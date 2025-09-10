<script lang="ts">
  import Tooltip from '../../lib/Tooltip.svelte';
  import { CCLVividColor } from '../../lib/const/config';

  const allColors = {
    ...CCLVividColor
  };
</script>

<div style="display: flex; flex-wrap: wrap; gap: 20px; padding: 20px;">
  {#each Object.entries(allColors) as [colorName, colorValue]}
    <div
      style="display: flex; flex-direction: column; align-items: center; gap: 10px; padding: 10px; border: 1px solid #eee; border-radius: 8px;"
    >
      <span style="font-size: 0.9em; color: #555;">{colorName}</span>
      <Tooltip text="{colorName} Tooltip" backgroundColor={colorValue} position="top">
        <div
          style="width: 80px; height: 40px; background-color: var({colorValue}); display: flex; justify-content: center; align-items: center; border-radius: 4px; color: white; font-size: 0.8em;"
        >
          Hover me
        </div>
      </Tooltip>
    </div>
  {/each}
</div>
