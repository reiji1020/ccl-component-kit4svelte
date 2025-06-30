<script lang="ts">
	import './const/variables.css';
	import { CCLVividColor } from './const/config';

	/**
	 * ラジオボタンの選択値
	 * @type {any}
	 */
	export let value: any;

	/**
	 * どのラジオボタンが選択されているかを保持する変数
	 * @type {any}
	 */
	export let group: any;

	/**
	 * ラジオボタンのラベル
	 * @default ''
	 * @type string
	 */
	export let label: string = '';

	/**
	 * ラジオボタンの色
	 * @default CCLVividColor.SODA_BLUE
	 * @type string
	 */
	export let color: string = CCLVividColor.SODA_BLUE;

	/**
	 * 非活性状態
	 * @default false
	 * @type boolean
	 */
	export let disabled: boolean = false;

	let circleColor: 'white' = 'white';
</script>

<label class="radioWrapper" class:disabled={disabled}>
	<input type="radio" bind:group {value} {disabled} aria-label={label} />
	<span class="customRadio" style="--bg-color: var({color});">
		{#if group === value}
			<span class="innerCircle" style="--circle-color: {circleColor};" />
		{/if}
	</span>
	{#if label}
		<span class="label">{label}</span>
	{/if}
</label>

<style>
	.radioWrapper {
		display: flex;
		align-items: center;
		cursor: pointer;
		margin-bottom: 8px;
		position: relative;
	}
	.radioWrapper.disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
	.radioWrapper input[type='radio'] {
		border: 0;
		clip: rect(0 0 0 0);
		clip-path: inset(50%);
		height: 1px;
		margin: -1px;
		overflow: hidden;
		padding: 0;
		position: absolute;
		white-space: nowrap;
		width: 1px;
	}
	.customRadio {
		width: 20px;
		height: 20px;
		border: 2px solid var(--bg-color);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
		transition: background-color 0.2s;
	}
	.radioWrapper input[type='radio']:checked + .customRadio {
		background-color: var(--bg-color);
	}
	.innerCircle {
		width: 10px;
		height: 10px;
		background-color: var(--circle-color);
		border-radius: 50%;
	}
	.label {
		margin-left: 8px;
		font-size: 16px;
	}
</style>
