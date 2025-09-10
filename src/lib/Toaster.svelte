<script lang="ts">
  import {
    toasts,
    dismiss,
    variantColor,
    show as showToast,
    type ToastItem,
    type ToastVariant
  } from './toast';
  import { vividFor } from './const/colorMap';
  import { fly, fade } from 'svelte/transition';

  export let position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'top-right';
  export let maxVisible = 5;
  // 閉じるボタンの表示可否
  export let dismissible: boolean = true;
  // message は必須（即時表示の本文）: デフォルトを与えない
  export let message: string;
  // variant は任意（既定: 'info'）
  export let variant: ToastVariant = 'info';
  // duration は任意（既定: undefined）
  export let duration: number;

  $: list = $toasts.slice(0, maxVisible);

  function colorVars(item: ToastItem) {
    const bgVar = variantColor[item.variant];
    const fgVar = vividFor(bgVar) ?? undefined;
    return `--toast-bg: var(${bgVar}); ${fgVar ? `--toast-fg: var(${fgVar});` : ''}`;
  }

  const defaultTitles: Record<ToastVariant, string> = {
    success: 'Success',
    error: 'Error',
    warning: 'Warning',
    info: 'Info'
  };

  function titleFor(item: ToastItem): string | undefined {
    // If an explicit title is provided (including empty string), respect it.
    // Otherwise, use the variant-based default.
    return item.title ?? defaultTitles[item.variant];
  }

  // 内部デフォルトを利用するため、特別な設定は不要

  let lastSig = '';
  // Direct props pathway (message/variant/duration)
  $: if (message) {
    const sig = `${message}|${variant ?? 'info'}|${duration ?? ''}`;
    if (sig !== lastSig) {
      showToast({ message, variant, duration });
      lastSig = sig;
    }
  }
</script>

<div class="toaster" data-pos={position} aria-live="polite" aria-atomic="false">
  {#each list as t (t.id)}
    <div
      class="toast"
      data-variant={t.variant}
      role="status"
      style={colorVars(t)}
      in:fly={{ x: position.endsWith('right') ? 24 : -24, duration: 150 }}
      out:fade={{ duration: 150 }}
    >
      <div class="toast-body">
        {#if titleFor(t)}<div class="toast-title">{titleFor(t)}</div>{/if}
        <div class="toast-message">{t.message}</div>
      </div>
      {#if dismissible}
        <button
          type="button"
          class="toast-close"
          aria-label="Close notification"
          on:click={() => dismiss(t.id)}>×</button
        >
      {/if}
    </div>
  {/each}
</div>

<style>
  .toaster {
    position: fixed;
    z-index: 10050;
    pointer-events: none;
  }
  .toaster[data-pos='top-right'] {
    top: 12px;
    right: 12px;
  }
  .toaster[data-pos='top-left'] {
    top: 12px;
    left: 12px;
  }
  .toaster[data-pos='bottom-right'] {
    bottom: 12px;
    right: 12px;
  }
  .toaster[data-pos='bottom-left'] {
    bottom: 12px;
    left: 12px;
  }

  .toast {
    min-width: 260px;
    max-width: min(360px, calc(100vw - 24px));
    background: var(--toast-bg);
    color: var(--toast-fg, #fff);
    border-radius: 10px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.18);
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 10px 10px 10px 12px;
    margin: 8px 0;
    pointer-events: auto;
  }
  .toast-title {
    font-weight: 700;
    margin-bottom: 2px;
  }
  .toast-message {
    font-size: 14px;
  }
  .toast-close {
    border: none;
    background: transparent;
    color: inherit;
    font-size: 18px;
    line-height: 1;
    cursor: pointer;
    padding: 0 4px;
    align-self: start;
    margin-left: auto;
  }
  .toast-close:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
    border-radius: 4px;
  }
</style>
