<script lang="ts">
	import { CCLPastelColor, CCLVividColor } from '$lib/const/config';

	/**
	 * 枠線の色
	 * @default --strawberry-pink
	 * @type string
	 */
	export let borderColor: string;

	/**
	 * 画像ソース
	 * @type string
	 */
	export let src: string;

	/**
	 * alt属性に指定する値
	 * @type string
	 */
	export let altText: string;

	/**
	 * 記事の見出し
	 * @type string
	 */
	export let title: string;

	/**
	 * カードの詳細テキスト(140字程度推奨)
	 * @type string
	 */
	export let cardText: string;

	/**
	 * 枠線の色に応じた背景色を取得する関数
	 * @param borderColor - 枠線の色
	 * @returns 背景色
	 */
	function getBodyColor(borderColor: string): string {
		switch (borderColor) {
			case CCLVividColor.STRAWBERRY_PINK:
				return CCLPastelColor.PEACH_PINK;
			case CCLVividColor.PINEAPPLE_YELLOW:
				return CCLPastelColor.LEMON_YELLOW;
			case CCLVividColor.SODA_BLUE:
				return CCLPastelColor.SUGAR_BLUE;
			case CCLVividColor.MELON_GREEN:
				return CCLPastelColor.MATCHA_GREEN;
			case CCLVividColor.GRAPE_PURPLE:
				return CCLPastelColor.AKEBI_PURPLE;
			case CCLVividColor.WRAP_GREY:
				return CCLPastelColor.CLOUD_GREY;
			default:
				return CCLPastelColor.PEACH_PINK;
		}
	}

	// 背景色を取得
	$: bodyColor = getBodyColor(borderColor);
</script>

<div class="CardWrapper" style="--border-color: var({borderColor})">
	<img class="CardImage" {src} alt={altText} />
	<div class="CardInfo" style="--background-color: var({bodyColor});">
		<div class="CardTextWrapper">
			<h2 class="CardTitle">{title}</h2>
			<span class="CardText">{cardText}</span>
		</div>
	</div>
</div>

<style>
	.CardWrapper {
		height: 500px;
		width: 300px;
		position: relative;
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
		border-radius: 25px;
		border: 5px solid var(--border-color);
		z-index: -1;
	}

	.CardImage {
		height: auto;
		max-width: 100%;
		top: 0;
		position: absolute;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}

	.CardInfo {
		height: 195px;
		width: 300px;
		position: absolute;
		background: var(--background-color);
		top: 300px;
		border-bottom-left-radius: 20px;
		border-bottom-right-radius: 20px;
		border-top: 5px solid var(--border-color);
		z-index: 1;
	}

	.CardTextWrapper {
		height: auto;
		max-width: 95%;
		position: absolute;
		top: -5%;
		left: 5%;
		overflow-wrap: break-word;
	}

	.CardTitle {
		color: var(--border-color);
	}

	.CardText {
		color: var(--wrap-grey);
		text-overflow: ellipsis;
		overflow: hidden;
	}
</style>
