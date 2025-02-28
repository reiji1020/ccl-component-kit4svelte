<script lang="ts">
	import './const/variables.css';
	/**
	 * サムネイル画像の大きさ
	 * @type string
	 */
	export let imageSize: string;
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
</script>

<div class="ThumbnailWrapper" style="--imageSize: {imageSize}; --borderColor: var({borderColor})">
	<img {src} alt={altText} class="Thumbnail" />
</div>

<style>
	.ThumbnailWrapper {
		height: var(--imageSize);
		width: var(--imageSize);
	}

	.Thumbnail {
		height: var(--imageSize);
		width: var(--imageSize);
		border-radius: 320px;
		border: 5px solid var(--borderColor);
	}
</style>