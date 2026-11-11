<script lang="ts">
  import { setContext } from 'svelte';
  import { get, writable } from 'svelte/store';

  import { TABS_CONTEXT_KEY } from './scripts/tabsContext';
  import type { TabData, TabsContext } from './scripts/tabsContext';

  type RegisteredTab = TabData & { key: symbol };
  const tabData = writable<RegisteredTab[]>([]);
  const activeTab = writable<symbol | undefined>(undefined);

  function updateTabs(tabs: RegisteredTab[]) {
    tabData.set(tabs);
    const selected = get(activeTab);
    if (!tabs.some((tab) => tab.key === selected && !tab.disabled)) {
      activeTab.set(tabs.find((tab) => !tab.disabled)?.key);
    }
  }

  setContext<TabsContext>(TABS_CONTEXT_KEY, {
    setTab(key, data) {
      const tabs = get(tabData);
      const tab = { key, ...data };
      updateTabs(
        tabs.some((entry) => entry.key === key)
          ? tabs.map((entry) => (entry.key === key ? tab : entry))
          : [...tabs, tab]
      );
    },
    removeTab(key) {
      updateTabs(get(tabData).filter((tab) => tab.key !== key));
    },
    activeTab
  });
</script>

<div class="tabs-container">
  <div role="tablist" class="tab-list">
    {#each $tabData as tab (tab.key)}
      <button
        type="button"
        role="tab"
        class="tab-button"
        class:active={tab.key === $activeTab}
        aria-selected={tab.key === $activeTab}
        aria-controls={`tab-panel-${tab.label}`}
        id={`tab-button-${tab.label}`}
        on:click={() => activeTab.set(tab.key)}
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
