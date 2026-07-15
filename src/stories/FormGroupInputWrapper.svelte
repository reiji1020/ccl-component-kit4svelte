<script lang="ts">
  import FormGroup from '../lib/FormGroup.svelte';
  import Input from '../lib/Input.svelte';

  export let label: string = '';
  export let helpText: string = '';
  export let errorMessage: string = '';
  export let forId: string = 'form-group-input';
  export let value: string = '';
</script>

<FormGroup {label} {helpText} {errorMessage} {forId}>
  <Input type="text" id={forId} bind:value />
</FormGroup>
