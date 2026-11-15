<script lang="ts">
  import FileUpload from '$lib/FileUpload.svelte';
  let { multiple = false, disabled = false }: { multiple?: boolean; disabled?: boolean } = $props();
  let count = $state(0);
</script>

<div style="max-width: 350px">
  <FileUpload {multiple} {disabled} accept=".png,image/jpeg" maxBytes={5 * 1024 * 1024}
    help="PNG / JPG、各5 MB以下。サーバー側でも形式と容量の検証が必要です。"
    onChange={(files) => { count = files.length; }} />
  <output>選択数: {count}</output>
</div>
