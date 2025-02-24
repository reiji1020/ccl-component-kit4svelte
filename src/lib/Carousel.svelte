<script lang="ts">
	import './const/variables.css';
	import * as string_decoder from "node:string_decoder";

	/**
	 * カルーセルに設定する画像のデータのインタフェース
	 * @type sre 画像URL
	 * @type alt altに設定するテキスト
	 */
	export interface Imgsrc {
		src: string,
		alt: string
	}
	/**
	 * 画像データ
	 * 画像URLとaltに設定するテキストをセットで入力すること
	 * @type Array<ImgSrc>
	 */
	export let src: Array<Imgsrc>;

	/**
	 * カルーセルコンポーネントの横幅
	 * @type string
	 */
	export let csWidth: string;

	let currentIndex = 0;

	/**
	 * nextSlide
	 * 次のスライドに進む
	 */
	const nextSlide = () => {
		currentIndex = (currentIndex + 1) % src.length;
	}

	/**
	 * nextSlide
	 * 次のスライドに進む
	 */
	const prevSlide = () => {
		currentIndex = (currentIndex - 1 + src.length) % src.length;
	}
</script>

<div class="carouselWrapper" style="width: {csWidth}">
	<div class="slides" style="transform: translateX({-currentIndex * 100}%)">
		{#each src as item, index}
			<img class="slide" src={item.src} alt={item.alt} />
		{/each}
	</div>
	<div class="buttons">
		<button on:click={prevSlide}>❮</button>
		<button on:click={nextSlide}>❯</button>
	</div>
</div>

<style>
	.carouselWrapper {
		position: relative;
		overflow: hidden;
	}
	.slides {
		display: flex;
		transition: transform 0.5s ease-in-out;
	}
	.slide {
		min-width: 100%;
	}
	.buttons {
		position: absolute;
		top: 50%;
		width: 95%;
		display: flex;
		justify-content: space-between;
		transform: translateY(-50%);
		padding: 0 20px;
	}
	button {
		background: white;
		color: black;
		border: none;
		padding: 10px;
		cursor: pointer;
		border-radius: 50%;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
	}
</style>
