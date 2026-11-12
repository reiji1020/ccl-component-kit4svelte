<script lang="ts">
  import Input from '$lib/Input.svelte';
  import Select from '$lib/Select.svelte';

  let valid = $state(true);
  const options = [{ value: 'a', label: '選択肢A' }];
</script>

<Input label="名前" />
<Input label="メール" type="email" isValid={valid} validationMessage="メールを確認してください" />
<Input label="明示IDの入力" id="explicit-input" />
<Select label="都道府県" {options} />
<Select label="市区町村" {options} />
<Select label="明示IDの選択" id="explicit-select" {options} />
<button type="button" onclick={() => (valid = !valid)}>入力状態を切り替える</button>
