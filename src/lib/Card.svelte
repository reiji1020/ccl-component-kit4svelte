<script lang="ts">
	import { CCLPastelColor, CCLVividColor } from '$lib/const/config';

	/**
	 * 枠線の色
	 * @default --strawberry-pink
	 * @type string
	 */
	export let borderColor: string;
	/**
	 * 説明文の背景色
	 * @default --peach-pink
	 * @type string
	 */
	let bodyColor: string;
	switch (borderColor) {
		case CCLVividColor.STRAWBERRY_PINK:
			bodyColor = CCLPastelColor.PEACH_PINK;
			break;
		case CCLVividColor.PINEAPPLE_YELLOW:
			bodyColor = CCLPastelColor.LEMON_YELLOW;
			break;
		case CCLVividColor.SODA_BLUE:
			bodyColor = CCLPastelColor.SUGAR_BLUE;
			break;
		case CCLVividColor.MELON_GREEN:
			bodyColor = CCLPastelColor.MATCHA_GREEN;
			break;
		case CCLVividColor.GRAPE_PURPLE:
			bodyColor = CCLPastelColor.AKEBI_PURPLE;
			break;
		case CCLVividColor.WRAP_GREY:
			bodyColor = CCLPastelColor.CLOUD_GREY;
			break;
		default:
			bodyColor = CCLPastelColor.PEACH_PINK;
			break;
	}
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
