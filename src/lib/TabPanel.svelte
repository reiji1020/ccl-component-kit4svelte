<script lang="ts">
  import { getContext, onMount } from 'svelte';

  /**
   * タブのボタンに表示されるテキスト
   * @type string
   */
  export let label: string;

  /**
   * このタブがアクティブな時のインジケーターの色
   * @default --strawberry-pink
   * @type string
   */
  export let color: string = '--strawberry-pink';

  /**
   * このタブを無効化するかどうか
   * @default false
   * @type boolean
   */
  export let disabled: boolean = false;

  import { TABS_CONTEXT_KEY } from './scripts/tabsContext';
  import type { TabsContext } from './scripts/tabsContext';
  const { setTab, removeTab, activeTab } = getContext<TabsContext>(TABS_CONTEXT_KEY);
  const key = Symbol('tab-panel');
  let mounted = false;

  onMount(() => {
    mounted = true;
    return () => removeTab(key);
  });

  $: if (mounted) setTab(key, { label, color, disabled });
  $: isActive = $activeTab === key;
</script>

{#if isActive}
  <div
    role="tabpanel"
    id={`tab-panel-${label}`}
    aria-labelledby={`tab-button-${label}`}
    class="tab-panel-content"
  >
    <slot />
  </div>
{/if}

<style>
  .tab-panel-content {
    /* Add any panel-specific styling here if needed */
  }
</style>
