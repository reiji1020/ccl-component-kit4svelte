<script lang="ts">
	import { CCLVividColor, ProgressBarHeight } from './const/config';

	export let value: number = 0; // 現在の進捗 (0-100)
	export let maxValue: number = 100; // 最大値
	export let barColor: string = CCLVividColor.SODA_BLUE; // バーの色
	export let backgroundColor: string = '#e0e0e0'; // 背景色
	export let height: ProgressBarHeight = ProgressBarHeight.DEFAULT; // プログレスバーの高さ
	export let containerWidth: string = '100%'; // プログレスバー全体の幅
	export let isSticky: boolean = false; // 上部に固定表示するか
	export let isRounded: boolean = true; // 角を丸くするか

	$: progress = (value / maxValue) * 100;
	$: finalBarColor = barColor.startsWith('--') ? `var(${barColor})` : barColor;
	$: finalBackgroundColor = backgroundColor.startsWith('--')
		? `var(${backgroundColor})`
		: backgroundColor;
</script>

<div
	class="progress-bar-container"
	class:sticky={isSticky}
	class:rounded={isRounded}
	style="background-color: {finalBackgroundColor}; width: {containerWidth}; height: {height};"
	role="progressbar"
	aria-valuenow={value}
	aria-valuemin="0"
	aria-valuemax={maxValue}
>
	<div class="progress-bar" style="width: {progress}%; background-color: {finalBarColor};"></div>
</div>

<style>
	.progress-bar-container {
		overflow: hidden;
		position: relative;
	}

	.progress-bar-container.sticky {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 9999;
	}

	.progress-bar-container.rounded {
		border-radius: 10px;
	}

	.progress-bar {
		height: 100%;
	}

	.progress-bar-container.rounded .progress-bar {
		border-radius: 10px;
	}
</style>
