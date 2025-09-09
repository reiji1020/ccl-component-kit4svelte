<script lang="ts">
	import type { ColorVar } from './const/config';
	import { getYear } from '$lib/scripts/date';
	import { vividFor } from './const/colorMap';

	/**
	 * フッター背景色（CCLVividColor/CCLPastelColor の CSS 変数名）
	 * @default --strawberry-pink
	 */
	export let bgColor: ColorVar = '--strawberry-pink';
	$: footerFg = vividFor(bgColor as string);

	/**
	 * アクセス当日の年を４桁で算出、フッターの中に配置する
	 */
	const year = getYear();
</script>

<!--汎用フッター-->
<footer
	class="footerWrapper"
	style="--bgColor: var({bgColor}); {footerFg ? `--footer-fg: var(${footerFg});` : ''}"
>
	<span class="copy">Copyright © 2015-{year} CANDY CHUPS Lab. All Rights Reserved.</span>
</footer>

<style>
	.footerWrapper {
		display: flex;
		height: 30px;
		justify-content: center;
		align-items: center;
		background: var(--bgColor);
	}

	.copy {
		color: var(--footer-fg, #fff);
		font-size: 9px;
	}
</style>
