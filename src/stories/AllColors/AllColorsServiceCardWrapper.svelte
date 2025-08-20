<script lang="ts">
	import ServiceCard from '../../lib/ServiceCard.svelte';
	import { CCLVividColor } from '../../lib/const/config';

	const colors = Object.values(CCLVividColor);
</script>

<div class="all-colors-wrapper">
	{#each colors as color}
		<div class="card-container">
			<ServiceCard
				borderColor={color}
				serviceName={'サービス名'}
				description={'ここにサービスの説明文が入ります。このカードは色のバリエーションを確認するためのものです。'}
				imageUrl={'thumbnail.png'}
				altText={'サービスカードのサムネイル'}
				linkUrl={'#'}
			/>
		</div>
	{/each}
</div>

<style>
	.all-colors-wrapper {
		display: flex;
		flex-direction: column; /* ServiceCards are wide, so a column layout is better */
		align-items: center;
		gap: 20px;
		padding: 20px;
	}
	.card-container {
		width: 100%;
		max-width: 500px; /* Match the max-width in ServiceCard.svelte */
	}
</style>
