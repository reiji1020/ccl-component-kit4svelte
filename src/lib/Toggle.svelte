<script lang="ts">
	import './const/variables.css';
	import { CCLVividColor } from './const/config';

	/**
	 * トグルスイッチの状態
	 * @default false
	 * @type boolean
	 */
	export let checked: boolean = false;

	/**
	 * トグルスイッチの色
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

	/**
	 * 状態が変更されたときのイベントハンドラ
	 * @type {() => void}
	 */
	export let onChange: () => void = () => {};

	function handleChange(event: Event) {
		if (disabled) {
			return;
		}
		const target = event.target as HTMLInputElement;
		checked = target.checked;
		onChange();
	}
</script>

<label class="switchWrapper" class:disabled>
	<input type="checkbox" {checked} on:change={handleChange} {disabled} />
	<span class="slider" style="--bg-color: var({color});" />
</label>

<style>
	.switchWrapper {
		position: relative;
		display: inline-block;
		width: 50px;
		height: 28px;
		cursor: pointer;
	}
	.switchWrapper.disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}

	.switchWrapper input {
		opacity: 0;
		width: 0;
		height: 0;
	}

	.slider {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ccc;
		transition: 0.4s;
		border-radius: 28px;
	}

	.slider:before {
		position: absolute;
		content: '';
		height: 20px;
		width: 20px;
		left: 4px;
		bottom: 4px;
		background-color: white;
		transition: 0.4s;
		border-radius: 50%;
	}

	input:checked + .slider {
		background-color: var(--bg-color);
	}

	input:focus + .slider {
		box-shadow: 0 0 1px var(--bg-color);
	}

	input:checked + .slider:before {
		transform: translateX(22px);
	}
</style>
