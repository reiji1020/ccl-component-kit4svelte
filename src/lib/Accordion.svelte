<script lang="ts">
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';

  /**
   * 複数の項目を同時に開けるようにするかどうか
   * @default false
   * @type boolean
   */
  export let multiple: boolean = false;

  import { ACCORDION_CONTEXT_KEY } from './scripts/accordionContext';

  const openItems = writable<Set<string>>(new Set());

  function toggleItem(label: string) {
    openItems.update((currentOpenItems) => {
      const newOpenItems = new Set(currentOpenItems);
      if (newOpenItems.has(label)) {
        newOpenItems.delete(label);
      } else {
        if (!multiple) {
          newOpenItems.clear();
        }
        newOpenItems.add(label);
      }
      return newOpenItems;
    });
  }

  setContext(ACCORDION_CONTEXT_KEY, {
    openItems,
    toggleItem,
    initiallyOpen: (label: string) => {
      openItems.update((items) => items.add(label));
    }
  });
</script>

<div class="accordion-wrapper" role="presentation">
  <slot />
</div>

<style>
  .accordion-wrapper {
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    overflow: hidden;
  }
</style>
