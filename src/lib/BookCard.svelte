<script lang="ts">
	import Button from './Button.svelte';

	/**
	 * 書籍のタイトル
	 * @type string
	 */
	export let title: string;

	/**
	 * 表紙画像のURL
	 * @type string
	 */
	export let coverImageUrl: string;

	/**
	 * 表紙画像のaltテキスト
	 * @type string
	 */
	export let altText: string;

	/**
	 * 書籍の短い説明文
	 * @type string
	 */
	export let description: string;

	/**
	 * 外部リンクのURL
	 * @type string | undefined
	 */
	export let linkUrl: string | undefined = undefined;

	/**
	 * リンクボタンのテキスト
	 * @default 詳しく見る
	 * @type string
	 */
	export let linkText: string = '詳しく見る';

	/**
	 * 枠線の色
	 * @default --strawberry-pink
	 * @type string
	 */
	export let borderColor: string = '--strawberry-pink';

	function handleLinkClick() {
		if (linkUrl) {
			window.open(linkUrl, '_blank', 'noopener noreferrer');
		}
	}
</script>

<div class="BookCardWrapper" style="--border-color: var({borderColor})">
	<div class="BookCardImageWrapper">
		<img class="BookCardImage" src={coverImageUrl} alt={altText} />
	</div>
	<div class="BookCardInfo">
		<div class="BookCardTextWrapper">
			<h2 class="BookCardTitle">{title}</h2>
			<p class="BookCardDescription">{description}</p>
		</div>
		{#if linkUrl}
			<div class="BookCardLinkWrapper">
				<Button label={linkText} bgColor={borderColor} onClick={handleLinkClick} />
			</div>
		{/if}
	</div>
</div>

<style>
	.BookCardWrapper {
		width: 300px;
		display: flex;
		flex-direction: column;
		border-radius: 25px;
		border: 5px solid var(--border-color);
		box-shadow: 0 10px 10px rgba(0, 0, 0, 0.25);
		background-color: #fff;
		transition:
			transform 0.2s ease-in-out,
			box-shadow 0.2s ease-in-out;
	}

	.BookCardWrapper:hover {
		transform: translateY(-4px);
		box-shadow: 0 14px 14px rgba(0, 0, 0, 0.2);
	}

	.BookCardImageWrapper {
		width: 100%;
		height: 400px;
		overflow: hidden;
		border-top-left-radius: 20px;
		border-top-right-radius: 20px;
	}

	.BookCardImage {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.BookCardInfo {
		padding: 20px;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}

	.BookCardTextWrapper {
		flex-grow: 1;
	}

	.BookCardTitle {
		color: var(--wrap-grey);
		font-size: 1.2rem;
		font-weight: bold;
		margin: 0 0 10px 0;
	}

	.BookCardDescription {
		color: var(--wrap-grey);
		font-size: 0.9rem;
		margin: 0;
		overflow-wrap: break-word;
	}

	.BookCardLinkWrapper {
		margin-top: 20px;
		display: flex;
		justify-content: center;
	}
</style>
