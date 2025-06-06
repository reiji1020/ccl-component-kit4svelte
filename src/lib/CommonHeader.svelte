<script lang="ts">
	import './const/variables.css';

	/**
	 * ヘッダー背景色
	 * CCLVividColorの中から指定する
	 * @default --strawberry-pink
	 * @type string
	 */
	export let bgColor: string;
	/**
	 * ヘッダー高さ
	 * HeaderHeightの中から指定する
	 * @default --hd-normal
	 * @type string
	 */
	export let height: string;

	/**
	 * ヘッダーに表示するロゴ
	 * 基本的にsvg要素を読み込む
	 * @type string
	 */
	export let logo: string;

	/**
	 * ロゴの高さ
	 * @type string
	 */
	export let logoHeight: string;
</script>

<!--汎用ヘッダー-->
<header>
	<div class="wrapper" style="--bgColor: var({bgColor}); --height: var({height})">
		{#if logo}
			<img style="height: {logoHeight}" src={logo} alt="SVG Image" />
		{:else}
			<p>SVGファイルが指定されていません</p>
		{/if}
	</div>
</header>

<style>
	.wrapper {
		background: var(--bgColor);
		height: var(--height);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.a {
		fill: #fff;
	}
</style>
