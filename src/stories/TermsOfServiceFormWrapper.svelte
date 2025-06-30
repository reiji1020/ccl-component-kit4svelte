<script lang="ts">
	import FormGroup from '../lib/FormGroup.svelte';
	import Checkbox from '../lib/Checkbox.svelte';
	import Button from '../lib/Button.svelte';
	import { CCLVividColor } from '../lib/const/config';

	let agreedToTerms = false;

	function handleSubmit() {
		alert('フォームが送信されました！');
	}
</script>

<div style="max-width: 400px; padding: 20px; border: 1px solid #eee; border-radius: 8px;">
	<h2>利用規約</h2>
	<p style="font-size: 14px; margin-bottom: 20px;">
		ここに利用規約の長いテキストが入ります。ユーザーはこの規約を読み、同意する必要があります。
		これはダミーのテキストです。
	</p>

	<FormGroup forId="terms-agree">
		<Checkbox label="利用規約に同意する" id="terms-agree" bind:checked={agreedToTerms} />
	</FormGroup>

	<Button
		label="登録する"
		bgColor={CCLVividColor.SODA_BLUE}
		onClick={handleSubmit}
		disabled={!agreedToTerms}
	/>
</div>
