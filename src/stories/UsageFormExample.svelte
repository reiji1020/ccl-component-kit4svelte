<script lang="ts">
  import { Button, CCLVividColor, Input, Select } from '$lib/index';

  let email = $state('');
  let plan = $state('');
  let result = $state('');

  const plans = [
    { value: '', label: 'Choose a plan' },
    { value: 'basic', label: 'Basic' }
  ];

  function submit(event: SubmitEvent & { currentTarget: HTMLFormElement }) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    result = JSON.stringify(Object.fromEntries(data));
  }
</script>

<form onsubmit={submit}>
  <Input label="Email" type="email" name="email" autocomplete="email" required bind:value={email} />
  <Select label="Plan" name="plan" options={plans} required bind:value={plan} />
  <Button label="Send" type="submit" bgColor={CCLVividColor.SODA_BLUE} />
  <output aria-label="Submitted data">{result}</output>
</form>
