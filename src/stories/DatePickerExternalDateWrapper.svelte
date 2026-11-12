<script lang="ts">
  import DatePicker from '$lib/DatePicker.svelte';

  let selectedDate = $state(new Date(2026, 0, 15));
  let changedDate = $state<Date | null>(null);
</script>

<button type="button" onclick={() => (selectedDate = new Date(2026, 2, 20))}>
  3月の日付に変更
</button>
<DatePicker
  {selectedDate}
  on:change={(event) => {
    changedDate = event.detail;
  }}
/>
<output aria-label="選択イベントの日付">{changedDate?.toLocaleDateString('ja-JP')}</output>
