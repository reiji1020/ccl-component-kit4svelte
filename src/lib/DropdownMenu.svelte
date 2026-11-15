<script module lang="ts">
  let nextDropdownId = 0;

  export type DropdownMenuItem =
    | { id: string; label: string; href?: string; disabled?: boolean; type?: 'item' }
    | { id: string; type: 'separator' };
</script>

<script lang="ts">
  import { onMount, tick, type Snippet } from 'svelte';
  import { CCLVividColor, type ColorVar } from './const/config';

  interface Props {
    label: string;
    items: DropdownMenuItem[];
    trigger?: Snippet;
    borderColor?: ColorVar;
    menuBorderColor?: ColorVar;
    focusColor?: ColorVar;
    onSelect?: (item: Extract<DropdownMenuItem, { label: string }>) => void;
  }

  let {
    label, items, trigger, borderColor = CCLVividColor.STRAWBERRY_PINK,
    menuBorderColor, focusColor, onSelect
  }: Props = $props();
  let id = $state<string>();
  onMount(() => { id = `ccl-dropdown-${++nextDropdownId}`; });
  let open = $state(false);
  let active = $state(0);
  let root: HTMLDivElement;
  let toggle: HTMLButtonElement;
  let menu = $state<HTMLDivElement>();
  const entries = $derived(items.filter(item => item.type !== 'separator'));

  function focusActive() {
    menu?.querySelectorAll<HTMLElement>('[role="menuitem"]')[active]?.focus();
  }

  async function show(last = false) {
    if (!entries.length) return;
    active = last ? entries.length - 1 : 0;
    open = true;
    await tick();
    focusActive();
  }

  function close(restore = false) {
    if (!open) return;
    open = false;
    if (restore) toggle.focus();
  }

  $effect(() => {
    if (!open) return;
    const doc = root.ownerDocument;
    const outside = (event: PointerEvent) => {
      if (!event.composedPath().includes(root)) close(true);
    };
    doc.addEventListener('pointerdown', outside);
    return () => doc.removeEventListener('pointerdown', outside);
  });

  function triggerKey(event: KeyboardEvent) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      void show(event.key === 'ArrowUp');
    }
  }

  function menuKey(event: KeyboardEvent) {
    const count = entries.length;
    if (event.key === 'Escape') {
      event.preventDefault();
      event.stopPropagation();
      close(true);
    } else if (event.key === 'Tab') {
      close(true);
    } else if (count && ['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      if (event.key === 'Home') active = 0;
      else if (event.key === 'End') active = count - 1;
      else active = (active + count + (event.key === 'ArrowDown' ? 1 : -1)) % count;
      focusActive();
    } else if (event.key === ' ' && event.target instanceof HTMLAnchorElement) {
      event.preventDefault();
      event.target.click();
    }
  }

  function select(event: MouseEvent, item: Extract<DropdownMenuItem, { label: string }>) {
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    close(true);
    onSelect?.(item);
  }
</script>

<div class="dropdown" bind:this={root}
  style:--menu-trigger-border={`var(${borderColor})`}
  style:--menu-border={menuBorderColor ? `var(${menuBorderColor})` : undefined}
  style:--menu-focus={focusColor ? `var(${focusColor})` : undefined}
  onfocusout={(event) => {
    if (event.relatedTarget instanceof Node && !root.contains(event.relatedTarget)) close();
  }}>
  <button class="trigger" type="button" bind:this={toggle} disabled={!entries.length}
    aria-label={label} aria-haspopup="menu" aria-expanded={open} aria-controls={open ? id : undefined}
    onclick={() => { if (open) close(true); else void show(); }} onkeydown={triggerKey}>
    {#if trigger}{@render trigger()}{:else}{label}{/if}
  </button>
  {#if open}
    <div class="menu" {id} role="menu" tabindex="-1" aria-label={label} bind:this={menu} onkeydown={menuKey}>
      {#each items as item (item.id)}
        {#if item.type === 'separator'}
          <div class="separator" role="separator"></div>
        {:else}
          {@const index = entries.indexOf(item)}
          {#if item.href !== undefined}
            <a role="menuitem" href={item.disabled ? undefined : item.href} tabindex={-1}
              aria-disabled={item.disabled || undefined} onfocus={() => { active = index; }}
              onclick={(event) => select(event, item)}>{item.label}</a>
          {:else}
            <button type="button" role="menuitem" tabindex={-1} aria-disabled={item.disabled || undefined}
              onfocus={() => { active = index; }} onclick={(event) => select(event, item)}>{item.label}</button>
          {/if}
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style>
  .dropdown { display: inline-block; position: relative; }
  .trigger {
    color-scheme: light; background: Canvas; color: var(--wrap-grey); cursor: pointer;
    min-height: 44px; padding-inline: 20px; font: inherit;
    border: 1px solid var(--menu-trigger-border); border-radius: var(--ccl-button-radius, 50px);
  }
  .trigger:disabled { opacity: 0.6; cursor: not-allowed; }
  .trigger:focus-visible {
    outline: 2px solid var(--menu-focus, var(--ccl-focus-color, var(--soda-blue))); outline-offset: 2px;
  }
  .menu {
    position: absolute; inset-block-start: calc(100% + 8px); inset-inline-start: 0; z-index: 2;
    display: grid; gap: 2px; padding: 8px; width: max-content; min-width: 180px;
    max-width: calc(100vw - 16px); color-scheme: light; background: Canvas;
    border: 1px solid var(--menu-border, var(--palette-cloud-200)); border-radius: var(--ccl-field-radius, 8px);
  }
  .separator { margin-block: 2px; border-top: 1px solid var(--menu-border, var(--palette-cloud-200)); }
  [role='menuitem'] {
    display: block; box-sizing: border-box; width: 100%; padding: 8px;
    border: 0; border-radius: 6px; background: transparent; color: var(--wrap-grey);
    font: inherit; text-align: start; text-decoration: none; cursor: pointer; overflow-wrap: anywhere;
  }
  [role='menuitem']:hover, [role='menuitem']:focus { background: var(--palette-wrap-50); }
  [role='menuitem']:focus-visible {
    outline: 2px solid var(--menu-focus, var(--ccl-focus-color, var(--soda-blue))); outline-offset: -2px;
  }
  [aria-disabled='true'] { cursor: not-allowed; opacity: 0.65; }
</style>
