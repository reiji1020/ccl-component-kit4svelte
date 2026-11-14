<script lang="ts">
  import { Button, Input, Select } from '$lib/index';
</script>

<div role="group" aria-label="既定">
  <Input label="入力" />
  <Select label="選択" />
  <Button label="ボタン" />
</div>
<div
  role="group"
  aria-label="上書き"
  style="--ccl-field-padding-block: 6px; --ccl-field-radius: 4px; --ccl-field-font-size: 14px;"
>
  <Input label="入力" />
  <Select label="選択" />
  <Button label="ボタン" />
</div>
