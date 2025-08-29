<script lang="ts">
  import Dialog from '$lib/Dialog.svelte';
  import Button from '$lib/Button.svelte';
  import { CCLVividColor, CCLPastelColor } from '$lib/const/config';

  export let open = false;
  export let title = 'ダイアログのタイトル';
  export let borderColor = CCLVividColor.SODA_BLUE;

  function onClose() {
    open = false;
  }
</script>

<Button label="Open" bgColor={CCLVividColor.SODA_BLUE} onClick={() => (open = true)} />

<Dialog {open} {title} {borderColor} on:close={onClose}>
  <p>ここに任意のコンテンツを配置できます。</p>
  <svelte:fragment slot="footer">
    <Button label="Cancel" bgColor={CCLPastelColor.CLOUD_GREY} onClick={() => (open = false)} />
    <Button label="OK" bgColor={CCLVividColor.STRAWBERRY_PINK} onClick={() => (open = false)} />
  </svelte:fragment>
</Dialog>

