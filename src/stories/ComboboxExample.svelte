<script lang="ts">
  import Combobox from '$lib/Combobox.svelte';
  let { disabled = false }: { disabled?: boolean } = $props();
  let value = $state('design');
  let submitted = $state('');
  const options = [
    { value: 'design', label: 'デザイン' }, { value: 'data', label: 'データ分析' },
    { value: 'support', label: 'サポート' }
  ];
</script>

<form style="max-width: 300px; min-height: 180px" onsubmit={(event) => {
  event.preventDefault();
  submitted = String(new FormData(event.currentTarget).get('team') ?? '');
}}>
  <Combobox name="team" label="担当チーム" {options} {disabled} bind:value />
  <button type="submit">送信</button>
  <button type="reset">リセット</button>
  <output>選択値: {value}</output>
  <output>送信値: {submitted}</output>
</form>
