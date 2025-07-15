<script lang="ts">
  import Spinner from '../../lib/Spinner.svelte';
  import { CCLVividColor, CCLPastelColor } from '../../lib/const/config';

  const vividColors = [
    { name: 'STRAWBERRY_PINK', value: CCLVividColor.STRAWBERRY_PINK },
    { name: 'PINEAPPLE_YELLOW', value: CCLVividColor.PINEAPPLE_YELLOW },
    { name: 'SODA_BLUE', value: CCLVividColor.SODA_BLUE },
    { name: 'MELON_GREEN', value: CCLVividColor.MELON_GREEN },
    { name: 'GRAPE_PURPLE', value: CCLVividColor.GRAPE_PURPLE },
    { name: 'WRAP_GREY', value: CCLVividColor.WRAP_GREY }
  ];

  const pastelColors = [
    { name: 'PEACH_PINK', value: CCLPastelColor.PEACH_PINK },
    { name: 'LEMON_YELLOW', value: CCLPastelColor.LEMON_YELLOW },
    { name: 'SUGAR_BLUE', value: CCLPastelColor.SUGAR_BLUE },
    { name: 'MATCHA_GREEN', value: CCLPastelColor.MATCHA_GREEN },
    { name: 'AKEBI_PURPLE', value: CCLPastelColor.AKEBI_PURPLE },
    { name: 'CLOUD_GREY', value: CCLPastelColor.CLOUD_GREY }
  ];
</script>

<div style="display: flex; flex-direction: column; gap: 40px; padding: 20px;">
  <div>
    <h3>Vivid Colors</h3>
    <div style="display: flex; flex-wrap: wrap; gap: 20px;">
      {#each vividColors as colorOption}
        <div style="display: flex; flex-direction: column; align-items: center; gap: 10px; border: 1px solid #eee; padding: 15px; border-radius: 8px;">
          <Spinner color={colorOption.value} size="60px" borderWidth="6px" />
          <span style="font-size: 14px; color: #555;">{colorOption.name}</span>
        </div>
      {/each}
    </div>
  </div>

  <div>
    <h3>Pastel Colors</h3>
    <div style="display: flex; flex-wrap: wrap; gap: 20px;">
      {#each pastelColors as colorOption}
        <div style="display: flex; flex-direction: column; align-items: center; gap: 10px; border: 1px solid #eee; padding: 15px; border-radius: 8px;">
          <Spinner color={colorOption.value} size="60px" borderWidth="6px" />
          <span style="font-size: 14px; color: #555;">{colorOption.name}</span>
        </div>
      {/each}
    </div>
  </div>
</div>
