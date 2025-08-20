<script lang="ts">
	import BookCard from '../../lib/BookCard.svelte';
	import { CCLVividColor } from '../../lib/const/config';

	const colors = Object.values(CCLVividColor);
</script>

<div class="all-colors-wrapper">
	{#each colors as color}
		<div class="card-container">
			<BookCard
				borderColor={color}
				title={'書籍のタイトル'}
				description={'ここに書籍の説明文が入ります。このカードは色のバリエーションを確認するためのものです。'}
				coverImageUrl={'thumbnail.png'}
				altText={'ブックカードの表紙'}
				linkUrl={'#'}
				linkText={'詳しく見る'}
			/>
		</div>
	{/each}
</div>

<style>
	.all-colors-wrapper {
		display: flex;
		flex-wrap: wrap;
		gap: 20px;
		padding: 20px;
	}
	.card-container {
		flex: 1 1 300px; /* Flexbox for responsive wrapping */
		max-width: 300px;
	}
</style>
