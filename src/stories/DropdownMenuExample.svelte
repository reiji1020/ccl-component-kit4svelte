<script lang="ts">
  import DropdownMenu, { type DropdownMenuItem } from '$lib/DropdownMenu.svelte';
  let selected = $state('');
  const items: DropdownMenuItem[] = [
    { id: 'rename', label: '名前を変更' },
    { id: 'details', label: '詳細を表示', href: '#dropdown-details' },
    { id: 'divider', type: 'separator' },
    { id: 'delete', label: '削除（権限なし）', disabled: true }
  ];
</script>

<div style="min-height: 240px">
  <DropdownMenu label="アクション" {items} onSelect={(item) => { selected = item.id; }} />
  <button type="button">外側の操作</button>
  <output id="dropdown-details">選択: {selected}</output>
</div>
