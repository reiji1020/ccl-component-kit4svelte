<script lang="ts">
	import './const/variables.css';
	import { getYear } from '$lib/scripts/date';
	/**
	 * フッター背景色
	 * CCLVividColorの中から指定する
	 * @default --strawberry-pink
	 * @type string
	 */
	export let bgColor: string;

	/**
	 * アクセス当日の年を４桁で算出、フッターの中に配置する
	 */
	const year = getYear();
</script>

<!--汎用フッター-->
<footer>
	<div class="wrapper" style="--bgColor: var({bgColor});">
		<span class="copy">Copyright © 2015-{year} CANDY CHUPS Lab. All Rights Reserved.</span>
	</div>
</footer>

<style>
	.wrapper {
		display: flex;
		height: 30px;
		justify-content: center;
		align-items: center;
		background: var(--bgColor);
	}

	.copy {
		color: #fff;
		font-size: 9px;
	}
</style>
