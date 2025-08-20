<script lang="ts">
	import { getContext, onMount } from 'svelte';
	import { writable, type Readable } from 'svelte/store';

	/**
	 * 項目のヘッダーとして常に表示されるテキスト
	 * @type string
	 */
	export let label: string;

	/**
	 * 項目の初期状態を開いた状態にするかどうか
	 * @default false
	 * @type boolean
	 */
	export let isOpen: boolean = false;

	/**
	 * ヘッダーの背景色
	 * @type {string | undefined}
	 */
	export let headerColor: string | undefined = undefined;

	/**
	 * コンテンツエリアの背景色
	 * @type {string | undefined}
	 */
	export let contentColor: string | undefined = undefined;

	import { ACCORDION_CONTEXT_KEY } from './scripts/accordionContext';

	interface AccordionContext {
		openItems: Readable<Set<string>>;
		toggleItem: (label: string) => void;
		initiallyOpen: (label: string) => void;
	}

	const { openItems, toggleItem, initiallyOpen } = getContext<AccordionContext>(ACCORDION_CONTEXT_KEY);

	onMount(() => {
		if (isOpen) {
			initiallyOpen(label);
		}
	});

	let isContentOpen = false;
	$: isContentOpen = $openItems.has(label);
</script>

<div class="accordion-item" style={`${headerColor ? `--header-bg-color: var(${headerColor});` : ''}${contentColor ? `--content-bg-color: var(${contentColor});` : ''}`}>
	<h2 class="accordion-header">
		<button
			class="accordion-button"
			aria-expanded={isContentOpen}
			aria-controls={`accordion-panel-${label}`}
			on:click={() => toggleItem(label)}
		>
			<span class="button-label">{label}</span>
			<span class="accordion-icon" class:open={isContentOpen}>▼</span>
		</button>
	</h2>
	{#if isContentOpen}
		<div
			class="accordion-content"
			id={`accordion-panel-${label}`}
			role="region"
			aria-labelledby={`accordion-button-${label}`}
		>
			<div class="content-padding">
				<slot />
			</div>
		</div>
	{/if}
</div>

<style>
	.accordion-item {
		border-bottom: 1px solid #e0e0e0;
	}

	.accordion-item:last-child {
		border-bottom: none;
	}

	.accordion-header {
		margin: 0;
	}

	.accordion-button {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 16px 20px;
		font-size: 1rem;
		font-weight: 600;
		color: #333;
		background-color: var(--header-bg-color, #f9f9f9);
		border: none;
		cursor: pointer;
		text-align: left;
		transition: filter 0.2s ease-in-out;
	}

	.accordion-button:hover {
		filter: brightness(95%);
	}

	.accordion-icon {
		transition: transform 0.2s ease-in-out;
		transform: rotate(0deg);
	}

	.accordion-icon.open {
		transform: rotate(180deg);
	}

	.accordion-content {
		background-color: var(--content-bg-color, white);
	}

	.content-padding {
		padding: 16px 20px;
	}
</style>
