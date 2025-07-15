<script lang="ts">
  import Tooltip from "../lib/Tooltip.svelte";
  import { CCLVividColor } from "../lib/const/config";

  export let text: string;
  export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  export let disabled: boolean = false;
  export let backgroundColor: string = CCLVividColor.WRAP_GREY;
</script>

<div style="border: 1px dashed #ccc; padding: 8px;">
  <Tooltip
    {text}
    {position}
    {disabled}
    {backgroundColor}
  >
    <div style="width: 120px; height: 40px; border: 1px dashed #ccc; display: flex; justify-content: center; align-items: center;">
      Hover me
    </div>
  </Tooltip>
</div>
