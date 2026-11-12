<script lang="ts">
  import { Button, Input, Select } from '$lib/index';

  let email = $state('');
  let plan = $state('');
  let submitted = $state('');
  let resets = $state(0);

  function submit(event: SubmitEvent & { currentTarget: HTMLFormElement }) {
    event.preventDefault();
    submitted = JSON.stringify(Object.fromEntries(new FormData(event.currentTarget)));
  }
</script>

<form onsubmit={submit} onreset={() => (resets += 1)}>
  <Input label="メール" name="email" type="email" autocomplete="email" required bind:value={email} />
  <Select
    label="プラン"
    name="plan"
    required
    bind:value={plan}
    options={[{ value: '', label: '選択してください' }, { value: 'basic', label: '基本' }]}
  />
  <Input label="数量" type="number" name="quantity" value="2" min={1} max={9} step={1} />
  <Input label="参照番号" name="reference" value="CCL" readonly />
  <Input label="無効な欄" name="excludedInput" disabled value="excluded" />
  <Select label="無効な選択欄" name="excludedSelect" disabled />
  <Button label="操作" type="button" />
  <Button label="リセット" type="reset" />
  <Button label="送信" type="submit" />
  <Button label="既定の送信" />
  <output aria-label="バインド値">{email}/{plan}</output>
  <output aria-label="送信内容">{submitted}</output>
  <output aria-label="リセット回数">{resets}</output>
</form>
