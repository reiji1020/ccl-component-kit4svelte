<script lang="ts">
	import './const/variables.css';

	export let serviceName: string;
	export let description: string;
	export let imageUrl: string;
	export let altText: string;
	export let linkUrl: string | undefined = undefined;
	/**
	 * 枠線の色
	 * @default --strawberry-pink
	 * @type string
	 */
	export let borderColor: string = '--strawberry-pink';

	const Tag = linkUrl ? 'a' : 'div';
</script>

<svelte:element
	this={Tag}
	href={linkUrl}
	class="service-card"
	target={linkUrl ? '_blank' : undefined}
	rel={linkUrl ? 'noopener noreferrer' : undefined}
	style="--card-border-color: var({borderColor});"
>
	<div class="image-container">
		<img src={imageUrl} alt={altText} class="service-image" />
	</div>
	<div class="text-container">
		<h3 class="service-name">{serviceName}</h3>
		<p class="service-description">{description}</p>
	</div>
</svelte:element>

<style>
	.service-card {
		display: flex;
		align-items: center;
		background-color: white;
		border: 1px solid var(--card-border-color);
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		padding: 16px;
		margin: 16px;
		max-width: 500px;
		text-decoration: none;
		color: inherit;
		transition: all 0.2s ease-in-out;
	}

	.service-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
	}

	.image-container {
		flex-shrink: 0;
		width: 120px;
		height: 120px;
		margin-right: 16px;
	}

	.service-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: 4px;
	}

	.text-container {
		flex-grow: 1;
	}

	.service-name {
		font-size: 1.25rem;
		font-weight: bold;
		color: var(--wrap-grey);
		margin: 0 0 8px 0;
	}

	.service-description {
		font-size: 1rem;
		color: black;
		margin: 0;
	}
</style>
