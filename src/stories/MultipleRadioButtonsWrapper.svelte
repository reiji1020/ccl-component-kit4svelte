<script lang="ts">
  import RadioButton from '../lib/RadioButton.svelte';

  export let selectedValue: string = 'option1';
</script>

<div>
  <RadioButton label="Option 1" value="option1" bind:group={selectedValue} />
  <RadioButton label="Option 2" value="option2" bind:group={selectedValue} />
  <RadioButton label="Option 3" value="option3" bind:group={selectedValue} />
</div>
