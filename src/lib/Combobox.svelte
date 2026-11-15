<script module lang="ts">
  let nextComboboxId = 0;

  export type ComboboxOption = { value: string; label: string };
</script>

<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { CCLVividColor, type ColorVar } from './const/config';

  interface Props {
    label: string;
    id?: string;
    options: ComboboxOption[];
    value?: string;
    name?: string;
    disabled?: boolean;
    placeholder?: string;
    noResultsLabel?: string;
    borderColor?: ColorVar;
    listBorderColor?: ColorVar;
    focusColor?: ColorVar;
    onChange?: (value: string) => void;
  }

  let {
    label, id: suppliedId, options, value = $bindable(''), name, disabled = false, placeholder = '検索',
    noResultsLabel = '該当する項目がありません', borderColor = CCLVividColor.STRAWBERRY_PINK,
    listBorderColor, focusColor, onChange
  }: Props = $props();
  let generatedId = $state<string>();
  const id = $derived(suppliedId ?? generatedId);
  onMount(() => { generatedId = `ccl-combobox-${++nextComboboxId}`; });
  const selectedLabel = $derived(options.find(option => option.value === value)?.label ?? '');
  let query = $state('');
  let editing = $state(false);
  let open = $state(false);
  let active = $state(-1);
  let list: HTMLUListElement;
  let input: HTMLInputElement;
  const expanded = $derived(open && !disabled);
  const matches = $derived(options.filter(option => option.label.toLocaleLowerCase()
    .includes(query.trim().toLocaleLowerCase())));

  $effect(() => { if (disabled) close(); });

  function close() {
    open = false;
    editing = false;
    active = -1;
    query = '';
  }

  function choose(option: ComboboxOption) {
    if (disabled) return;
    value = option.value;
    close();
    onChange?.(option.value);
  }

  async function move(direction: 1 | -1) {
    open = true;
    if (!matches.length) return;
    const index = active >= 0 && active < matches.length ? active : direction === 1 ? -1 : 0;
    active = (index + direction + matches.length) % matches.length;
    await tick();
    list?.children[active]?.scrollIntoView({ block: 'nearest' });
  }

  function handleKey(event: KeyboardEvent) {
    if (event.isComposing || disabled) return;
    switch (event.key) {
      case 'ArrowDown':
      case 'ArrowUp':
        event.preventDefault();
        void move(event.key === 'ArrowDown' ? 1 : -1);
        break;
      case 'Enter':
        if (!expanded) break;
        event.preventDefault();
        if (matches[active]) choose(matches[active]);
        break;
      case 'Escape':
        if (!expanded) break;
        event.preventDefault();
        event.stopPropagation();
        close();
        break;
    }
  }
</script>

<div class="combobox" style:--combo-border={`var(${borderColor})`}
  style:--combo-list-border={listBorderColor ? `var(${listBorderColor})` : undefined}
  style:--combo-focus={focusColor ? `var(${focusColor})` : undefined}>
  {#if id}<label for={id}>{label}</label>{:else}<span class="label">{label}</span>{/if}
  <div class="control">
    <input bind:this={input} {id} type="text" role="combobox" aria-autocomplete="list"
      aria-label={id ? undefined : label}
      aria-expanded={expanded} aria-controls={id ? `${id}-options` : undefined}
      aria-activedescendant={id && expanded && matches[active] ? `${id}-option-${active}` : undefined}
      {disabled} {placeholder} autocomplete="off" value={expanded && editing ? query : selectedLabel}
      oninput={(event) => {
        query = event.currentTarget.value;
        editing = true;
        open = true;
        active = -1;
      }}
      onkeydown={handleKey} onblur={close} />
    <button type="button" tabindex="-1" aria-label={expanded ? '候補を閉じる' : '候補を開く'} {disabled}
      onmousedown={(event) => event.preventDefault()}
      onclick={() => { if (expanded) close(); else open = true; input.focus(); }}>
      <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m6 9 6 6 6-6" stroke-width="2" /></svg>
    </button>
  </div>
  {#if name}<input type="hidden" {name} {value} {disabled} />{/if}
  <div class="popup" hidden={!expanded}>
    <ul bind:this={list} id={id ? `${id}-options` : undefined} role="listbox" aria-label={label}>
      {#each matches as option, index (option.value)}
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <li id={id ? `${id}-option-${index}` : undefined} role="option" aria-selected={value === option.value}
          class:active={index === active}
          onmousedown={(event) => event.preventDefault()} onclick={() => choose(option)}>{option.label}</li>
      {/each}
    </ul>
    {#if !matches.length}<p role="status">{noResultsLabel}</p>{/if}
  </div>
</div>

<style>
  .combobox { position: relative; display: grid; gap: var(--ccl-field-gap, 8px); }
  label, .label { font-size: var(--ccl-field-label-font-size, 14px); color: var(--wrap-grey); }
  .control { position: relative; }
  input[type='text'] {
    box-sizing: border-box; width: 100%; min-height: 44px; padding: 10px 36px 10px 15px;
    color-scheme: light; background: Canvas; color: CanvasText;
    border: 2px solid var(--combo-border);
    border-radius: var(--ccl-field-radius, 8px);
    font-size: var(--ccl-field-font-size, 16px);
  }
  input[type='text']:focus { outline: 0; border-color: var(--combo-focus, var(--ccl-focus-color, var(--soda-blue))); }
  input[type='text']:disabled { background: var(--cloud-grey); border-color: var(--cloud-grey); }
  button { position: absolute; right: 3px; inset-block: 3px; border: 0; background: transparent; cursor: pointer; }
  button:disabled { cursor: not-allowed; }
  .popup {
    position: absolute; top: calc(100% + 4px); z-index: 1; width: 100%;
    box-sizing: border-box; padding: 8px; color-scheme: light; background: Canvas;
    border: 1px solid var(--combo-list-border, var(--palette-cloud-200)); border-radius: var(--ccl-field-radius, 8px);
  }
  ul { padding: 0; margin: 0; list-style: none; max-height: 240px; overflow: auto; }
  li { padding: 6px 8px; border-radius: 6px; cursor: pointer; }
  li.active, li:hover { background: var(--palette-wrap-50); }
  li[aria-selected='true'] { font-weight: 700; }
  p { margin: 0; color: var(--wrap-grey); font-size: 0.875rem; }
</style>
