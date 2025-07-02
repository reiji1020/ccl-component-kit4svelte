<script lang="ts">
	import './const/variables.css';
	import { CCLVividColor } from './const/config';

	/**
	 * 入力フィールドのタイプ
	 * @default 'text'
	 * @type {'text' | 'password' | 'email' | 'number'}
	 */
	export let type: 'text' | 'password' | 'email' | 'number' = 'text';

	/**
	 * ラベルのテキスト
	 * @default ''
	 * @type string
	 */
	export let label: string = '';

	/**
	 * 入力値
	 * @default ''
	 * @type string
	 */
	export let value: string = '';

	/**
	 * プレースホルダーのテキスト
	 * @default ''
	 * @type string
	 */
	export let placeholder: string = '';

	/**
	 * 枠線の色
	 * @default --strawberry-pink
	 * @type string
	 */
	export let borderColor: string = CCLVividColor.STRAWBERRY_PINK;

	/**
	 * 非活性状態にするか
	 * @default false
	 * @type boolean
	 */
	export let disabled: boolean = false;

	/**
	 * コンポーネントのID
	 * @default 'ccl-input'
	 * @type string
	 */
	export let id: string = 'ccl-input';

	/**
	 * バリデーションメッセージ
	 * @default ''
	 * @type string
	 */
	export let validationMessage: string = '';

	/**
	 * バリデーションの状態
	 * @default true
	 * @type boolean
	 */
	export let isValid: boolean = true;
</script>

<div class="input-wrapper">
	{#if label}
		<label for={id} class="input-label">{label}</label>
	{/if}
	{#if type === 'text'}
		<input
			{id}
			type="text"
			bind:value
			{placeholder}
			{disabled}
			class="input-field"
			class:invalid={!isValid}
			style="--border-color: var({borderColor})"
		/>
	{:else if type === 'password'}
		<input
			{id}
			type="password"
			bind:value
			{placeholder}
			{disabled}
			class="input-field"
			class:invalid={!isValid}
			style="--border-color: var({borderColor})"
		/>
	{:else if type === 'email'}
		<input
			{id}
			type="email"
			bind:value
			{placeholder}
			{disabled}
			class="input-field"
			class:invalid={!isValid}
			style="--border-color: var({borderColor})"
		/>
	{:else if type === 'number'}
		<input
			{id}
			type="number"
			bind:value
			{placeholder}
			{disabled}
			class="input-field"
			class:invalid={!isValid}
			style="--border-color: var({borderColor})"
		/>
	{/if}
	{#if !isValid && validationMessage}
		<span class="validation-message">{validationMessage}</span>
	{/if}
</div>

<style>
	.input-wrapper {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.input-label {
		font-size: 14px;
		color: var(--wrap-grey);
	}

	.input-field {
		padding: 10px 15px;
		border-radius: 8px;
		border: 2px solid var(--border-color);
		font-size: 16px;
		outline: none;
		transition: border-color 0.2s;
	}

	.input-field:focus {
		border-color: var(--ccl-focus-color, var(--soda-blue)); /* フォーカス時の色を定義 */
	}

	.input-field:disabled {
		background-color: var(--cloud-grey);
		cursor: not-allowed;
		border-color: var(--cloud-grey);
	}

	.input-field.invalid {
		border-color: var(--ccl-error-color, var(--strawberry-pink));
	}

	.validation-message {
		font-size: 12px;
		color: var(--ccl-error-color, var(--strawberry-pink));
	}
</style>
