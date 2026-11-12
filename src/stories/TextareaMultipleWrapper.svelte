<script lang="ts">
  import Textarea from '$lib/Textarea.svelte';

  let secondValue = $state('second');
</script>

<Textarea label="First note" value="first" />
<Textarea label="Second note" bind:value={secondValue} />
<Textarea id="explicit-note" label="Explicit note" value="explicit" />
<output aria-label="Second note value">{secondValue}</output>
