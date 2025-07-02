<script lang="ts">
	import './const/variables.css';

	/**
	 * ボタンカラー、CCLVividColorの中から選ぶ
	 * @default --strawberry-pink
	 * @type string
	 */
	export let bgColor: string;

	/**
	 * ボタンの中に表示するテキスト
	 * @default Button
	 * @type string
	 */
	export let label: string;

	/**
	 * クリックイベントハンドラ
	 * @default () => {}
	 * @type {() => void}
	 */
	export let onClick: () => void = () => {};

	/**
	 * ボタンの非活性状態
	 * @default false
	 * @type boolean
	 */
	export let disabled: boolean = false;

	/**
	 * ボタンの背景色を取得する関数
	 * @param bgColor - ボタンの背景色
	 * @returns 背景色
	 */
	function getButtonColor(bgColor: string): string {
		return `var(${bgColor})`;
	}

	// 背景色を取得
	let buttonColor = getButtonColor(bgColor);
</script>

<!--汎用ボタン-->
<button class="buttonWrapper" style="--bgColor: {buttonColor}" on:click={onClick} {disabled}>
	<span class="btLabel">{label}</span>
</button>

<style>
	.buttonWrapper {
		display: flex;
		border-radius: 50px;
		border: none;
		padding: 15px 45px;
		background: var(--bgColor);
	}
	.buttonWrapper:hover {
		cursor: pointer;
	}
	.buttonWrapper:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
	.btLabel {
		flex-direction: column;
		justify-content: center;
		flex-shrink: 0;
		color: #fff;
		text-align: center;
		font-size: 18px;
		line-height: normal;
	}
</style>