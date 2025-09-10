<script lang="ts">
  import ProgressBar from '../../lib/ProgressBar.svelte';
  import { CCLVividColor, CCLPastelColor } from '../../lib/const/config';

  const vividColors = [
    { name: 'STRAWBERRY_PINK', bar: CCLVividColor.STRAWBERRY_PINK, bg: CCLPastelColor.PEACH_PINK },
    {
      name: 'PINEAPPLE_YELLOW',
      bar: CCLVividColor.PINEAPPLE_YELLOW,
      bg: CCLPastelColor.LEMON_YELLOW
    },
    { name: 'SODA_BLUE', bar: CCLVividColor.SODA_BLUE, bg: CCLPastelColor.SUGAR_BLUE },
    { name: 'MELON_GREEN', bar: CCLVividColor.MELON_GREEN, bg: CCLPastelColor.MATCHA_GREEN },
    { name: 'GRAPE_PURPLE', bar: CCLVividColor.GRAPE_PURPLE, bg: CCLPastelColor.AKEBI_PURPLE },
    { name: 'WRAP_GREY', bar: CCLVividColor.WRAP_GREY, bg: CCLPastelColor.CLOUD_GREY }
  ];

  const pastelColors = [
    { name: 'PEACH_PINK', bar: CCLPastelColor.PEACH_PINK, bg: CCLVividColor.STRAWBERRY_PINK },
    { name: 'LEMON_YELLOW', bar: CCLPastelColor.LEMON_YELLOW, bg: CCLVividColor.PINEAPPLE_YELLOW },
    { name: 'SUGAR_BLUE', bar: CCLPastelColor.SUGAR_BLUE, bg: CCLVividColor.SODA_BLUE },
    { name: 'MATCHA_GREEN', bar: CCLPastelColor.MATCHA_GREEN, bg: CCLVividColor.MELON_GREEN },
    { name: 'AKEBI_PURPLE', bar: CCLPastelColor.AKEBI_PURPLE, bg: CCLVividColor.GRAPE_PURPLE },
    { name: 'CLOUD_GREY', bar: CCLPastelColor.CLOUD_GREY, bg: CCLVividColor.WRAP_GREY }
  ];
</script>

<div style="display: flex; flex-direction: column; gap: 40px; padding: 20px;">
  <div>
    <h3>Vivid Colors</h3>
    <div style="display: flex; flex-direction: column; gap: 20px;">
      {#each vividColors as colorOption}
        <div
          style="display: flex; flex-direction: column; align-items: center; gap: 10px; border: 1px solid #eee; padding: 15px; border-radius: 8px; width: 300px;"
        >
          <ProgressBar
            value={50}
            maxValue={100}
            barColor={colorOption.bar}
            backgroundColor={colorOption.bg}
            containerWidth="100%"
            height="20px"
          />
          <span style="font-size: 14px; color: #555;">{colorOption.name}</span>
        </div>
      {/each}
    </div>
  </div>

  <div>
    <h3>Pastel Colors</h3>
    <div style="display: flex; flex-direction: column; gap: 20px;">
      {#each pastelColors as colorOption}
        <div
          style="display: flex; flex-direction: column; align-items: center; gap: 10px; border: 1px solid #eee; padding: 15px; border-radius: 8px; width: 300px;"
        >
          <ProgressBar
            value={50}
            maxValue={100}
            barColor={colorOption.bar}
            backgroundColor={colorOption.bg}
            containerWidth="100%"
            height="20px"
          />
          <span style="font-size: 14px; color: #555;">{colorOption.name}</span>
        </div>
      {/each}
    </div>
  </div>
</div>
