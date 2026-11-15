<script module lang="ts">
  let nextFileUploadId = 0;
</script>

<script lang="ts">
  import { onMount, tick } from 'svelte';
  import { CCLVividColor, type ColorVar } from './const/config';

  interface Props {
    label?: string;
    id?: string;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    maxBytes?: number;
    help?: string;
    borderColor?: ColorVar;
    pickerBorderColor?: ColorVar;
    focusColor?: ColorVar;
    errorColor?: ColorVar;
    onChange?: (files: File[]) => void;
  }

  let {
    label = '添付ファイル', id: suppliedId, accept, multiple = false, disabled = false, maxBytes, help,
    borderColor, pickerBorderColor, focusColor, errorColor, onChange
  }: Props = $props();
  let generatedId = $state<string>();
  const id = $derived(suppliedId ?? generatedId);
  onMount(() => { generatedId = `ccl-file-upload-${++nextFileUploadId}`; });
  let input: HTMLInputElement;
  let list = $state<HTMLUListElement>();
  let files = $state<{ id: number; file: File }[]>([]);
  let errors = $state<string[]>([]);
  let nextId = 0;
  const rules = $derived((accept ?? '').toLowerCase().split(',').map(rule => rule.trim()).filter(Boolean));

  function accepts(file: File) {
    const type = file.type.toLowerCase();
    const name = file.name.toLowerCase();
    return rules.length === 0 || rules.some(rule =>
      rule.startsWith('.') ? name.endsWith(rule)
        : rule.endsWith('/*') ? type.startsWith(rule.slice(0, -1)) : type === rule
    );
  }

  function select(event: Event & { currentTarget: HTMLInputElement }) {
    const incoming = Array.from(event.currentTarget.files ?? []);
    event.currentTarget.value = '';
    if (disabled || incoming.length === 0) return;

    const valid: typeof files = [];
    const nextErrors: string[] = [];
    for (const file of incoming) {
      if (!accepts(file)) nextErrors.push(`${file.name} は選択できない形式です。`);
      else if (maxBytes !== undefined && file.size > maxBytes) {
        nextErrors.push(`${file.name} はサイズ上限（${maxBytes.toLocaleString('ja-JP')} バイト）を超えています。`);
      } else valid.push({ id: nextId++, file });
    }
    errors = nextErrors;
    if (valid.length > 0) {
      files = multiple ? [...files, ...valid] : valid.slice(0, 1);
      onChange?.(files.map(entry => entry.file));
    }
  }

  async function remove(index: number) {
    if (disabled) return;
    const button = list?.querySelectorAll('button')[index];
    const restoreFocus = button?.ownerDocument.activeElement === button;
    files = files.filter((_, itemIndex) => itemIndex !== index);
    onChange?.(files.map(entry => entry.file));
    if (restoreFocus) {
      await tick();
      (list?.querySelectorAll('button')[Math.min(index, files.length - 1)] ?? input).focus();
    }
  }
</script>

<div class="file-upload" class:invalid={errors.length > 0}
  style:--file-border={borderColor ? `var(${borderColor})` : undefined}
  style:--file-picker-border={pickerBorderColor ? `var(${pickerBorderColor})` : undefined}
  style:--file-focus={focusColor ? `var(${focusColor})` : undefined}
  style:--file-error={errorColor ? `var(${errorColor})` : undefined}>
  {#if id}<label class="title" for={id}>{label}</label>{:else}<span class="title">{label}</span>{/if}
  <div class="picker" class:disabled>
    <span aria-hidden="true">{multiple && files.length ? 'ファイルを追加' : 'ファイルを選択'}</span>
    <input bind:this={input} {id} type="file" {accept} {multiple} {disabled} onchange={select}
      aria-label={id ? undefined : label} aria-invalid={errors.length > 0 || undefined}
      aria-describedby={id ? [help && `${id}-help`, errors.length && `${id}-errors`].filter(Boolean).join(' ') || undefined : undefined} />
  </div>
  {#if help}<p id={id ? `${id}-help` : undefined} class="help">{help}</p>{/if}
  {#if files.length}
    <ul bind:this={list} aria-label="選択済みファイル">
      {#each files as entry, index (entry.id)}
        <li>
          <span>{entry.file.name}</span>
          <button type="button" {disabled} aria-label={`${entry.file.name} を解除`} onclick={() => remove(index)}>×</button>
        </li>
      {/each}
    </ul>
  {/if}
  <div role="alert" id={id ? `${id}-errors` : undefined}>
    {#each errors as error}<p class="error">{error}</p>{/each}
  </div>
</div>

<style>
  .file-upload {
    display: grid; justify-items: start; gap: 8px; min-width: 0; padding: 12px;
    border: 1px solid var(--file-border, var(--palette-cloud-200));
    border-radius: var(--ccl-field-radius, 8px); color: var(--wrap-grey);
  }
  .file-upload.invalid { border-color: var(--file-error, var(--ccl-error-color, var(--strawberry-pink))); }
  .title { font-weight: 700; }
  .picker {
    position: relative; display: inline-grid; place-items: center;
    min-height: 44px; padding-inline: 20px;
    border: 1px solid var(--file-picker-border, var(--strawberry-pink));
    border-radius: var(--ccl-button-radius, 50px);
  }
  input { position: absolute; inset: 0; width: 100%; height: 100%; opacity: 0; cursor: pointer; }
  .picker.disabled { border-color: transparent; background: var(--palette-cloud-100); }
  input:disabled, button:disabled { cursor: not-allowed; }
  .picker:has(input:focus-visible), button:focus-visible {
    outline: 2px solid var(--file-focus, var(--ccl-focus-color, var(--soda-blue))); outline-offset: 2px;
  }
  p { margin: 0; overflow-wrap: anywhere; }
  .help, .error { font-size: 12px; }
  .error { font-weight: 700; }
  ul { width: 100%; min-width: 0; display: grid; gap: 8px; padding: 0; margin: 0; list-style: none; }
  li {
    display: flex; justify-content: space-between; align-items: center; gap: 8px;
    padding: 4px 8px; border-radius: 6px; background: var(--palette-cloud-50);
    overflow-wrap: anywhere;
  }
  button { border: 0; background: transparent; color: inherit; min-width: 28px; min-height: 28px; cursor: pointer; }
  [role='alert']:empty { display: none; }
</style>
