<script lang="ts">
  import Container from '$lib/Container.svelte';
  import Stack from '$lib/Stack.svelte';
  import Grid from '$lib/Grid.svelte';
  let { width }: { width: string } = $props();
</script>

<section style:width aria-label="資料一覧の表示領域">
  <Container maxWidth="640px" padding="16px">
    <Stack direction="row" wrap align="center">
      <button type="button">絞り込み</button>
      <button type="button">並べ替え</button>
      <button type="button">表示切替</button>
    </Stack>
    <Grid columns={3} minColumnWidth="160px">
      {#each [1, 2, 3] as item (item)}<p>資料 {item}</p>{/each}
    </Grid>
  </Container>
</section>

<style>
  section { max-width: 100%; background: var(--palette-cloud-50); }
  p { margin: 0; padding: 8px; background: var(--palette-wrap-50); }
</style>
