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
	export let label: string | 'Button';
</script>

<!--汎用ボタン-->
<button class="buttonWrapper" style="--bgColor: var({bgColor})"
	><span class="btLabel">{label}</span></button
>

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
