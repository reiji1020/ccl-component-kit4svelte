<script lang="ts">
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	import { TABS_CONTEXT_KEY } from './scripts/tabsContext';

	const tabData = writable([]);
	const activeTabLabel = writable('');

	setContext(TABS_CONTEXT_KEY, {
		addTab: (tab) => {
			tabData.update((currentTabs) => {
				const newTabs = [...currentTabs, tab];
				// Set the first tab as active by default
				if (newTabs.length === 1) {
					activeTabLabel.set(tab.label);
				}
				return newTabs;
			});
		},
		activeTabLabel
	});

	let activeColor = '--strawberry-pink';
	$: {
		const activeTab = $tabData.find((t) => t.label === $activeTabLabel);
		activeColor = activeTab ? activeTab.color : '--strawberry-pink';
	}
</script>

<div class="tabs-container">
	<div role="tablist" class="tab-list">
		{#each $tabData as tab}
			<button
				role="tab"
				class="tab-button"
				class:active={tab.label === $activeTabLabel}
				aria-selected={tab.label === $activeTabLabel}
				aria-controls={`tab-panel-${tab.label}`}
				id={`tab-button-${tab.label}`}
				on:click={() => activeTabLabel.set(tab.label)}
				style="--active-color: var({tab.color});"
				disabled={tab.disabled}
			>
				{tab.label}
			</button>
		{/each}
	</div>

	<div class="tab-content">
		<slot />
	</div>
</div>

<style>
	.tab-list {
		display: flex;
		border-bottom: 2px solid #eee;
	}

	.tab-button {
		padding: 12px 24px;
		cursor: pointer;
		border: none;
		background: none;
		font-size: 1rem;
		color: var(--wrap-grey);
		border-bottom: 3px solid transparent;
		margin-bottom: -2px; /* Overlap the container's border */
		transition: border-color 0.2s ease-in-out;
	}

	.tab-button.active {
		border-bottom-color: var(--active-color);
		font-weight: bold;
		color: black;
	}

	.tab-button:hover:not(.active) {
		color: black;
	}

	.tab-content {
		padding: 24px 8px;
	}

	.tab-button:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
</style>
