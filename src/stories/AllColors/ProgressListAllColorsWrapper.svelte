<script lang="ts">
  import ProgressList from '../../lib/ProgressList.svelte';
  import { CCLVividColor, ProgressBarHeight } from '../../lib/const/config';

  const items = [
    { title: 'Strawberry Pink', progress: 30, status: 'in_progress', accentColor: CCLVividColor.STRAWBERRY_PINK },
    { title: 'Pineapple Yellow', progress: 55, status: 'in_progress', accentColor: CCLVividColor.PINEAPPLE_YELLOW },
    { title: 'Soda Blue', progress: 70, status: 'in_progress', accentColor: CCLVividColor.SODA_BLUE },
    { title: 'Melon Green', progress: 80, status: 'in_progress', accentColor: CCLVividColor.MELON_GREEN },
    { title: 'Grape Purple', progress: 45, status: 'in_progress', accentColor: CCLVividColor.GRAPE_PURPLE },
    { title: 'Wrap Grey', progress: 90, status: 'in_progress', accentColor: CCLVividColor.WRAP_GREY }
  ];
</script>

<div style="display: flex; flex-direction: column; gap: 16px;">
  <ProgressList items={items} barHeight={ProgressBarHeight.DEFAULT} clickable={false} />
</div>
