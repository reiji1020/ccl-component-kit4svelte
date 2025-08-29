<script lang="ts">
  import { createEventDispatcher, onDestroy, onMount } from 'svelte';
  import { CCLVividColor } from '$lib/const/config';
  type VividVar = (typeof CCLVividColor)[keyof typeof CCLVividColor];

  const isBrowser = typeof window !== 'undefined';

  const dispatch = createEventDispatcher<{ close: void }>();

  /**
   * ダイアログの表示状態
   */
  export let open: boolean = false;

  /**
   * タイトル（スロット優先）。
   */
  export let title: string = '';

  /**
   * ESCキーで閉じるか
   */
  export let closeOnEsc: boolean = true;

  /**
   * オーバーレイ（外側クリック）で閉じるか
   */
  export let closeOnOutside: boolean = true;

  /**
   * アクセント色（境界線やタイトルに使用）
   */
  export let borderColor: VividVar = CCLVividColor.STRAWBERRY_PINK;

  // ヘッダー背景は borderColor と共通化
  let panelEl: HTMLElement | null = null;
  let previouslyFocused: Element | null = null;
  const titleId = `ccl-dialog-title-${Math.random().toString(36).substring(2, 9)}`;

  function close() {
    dispatch('close');
  }

  function onKeydown(e: KeyboardEvent) {
    if (!open) return;
    if (e.key === 'Escape' && closeOnEsc) {
      e.stopPropagation();
      close();
    }
    if (e.key === 'Tab') {
      // 簡易フォーカストラップ
      const focusable = panelEl?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      const active = document.activeElement as HTMLElement | null;
      if (e.shiftKey) {
        if (active === first || !panelEl?.contains(active)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }
  }

  function moveFocusIn() {
    // 表示時にパネル内へフォーカス移動
    previouslyFocused = document.activeElement;
    const focusable = panelEl?.querySelector<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    (focusable ?? panelEl)?.focus();
  }

  function restoreFocus() {
    if (previouslyFocused instanceof HTMLElement) {
      previouslyFocused.focus({ preventScroll: true });
    }
  }

  function lockScroll() {
    const original = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => {
      document.documentElement.style.overflow = original;
    };
  }

  let unlockScroll: (() => void) | null = null;

  onMount(() => {
    const handle = (e: KeyboardEvent) => onKeydown(e);
    window.addEventListener('keydown', handle, true);
    return () => window.removeEventListener('keydown', handle, true);
  });

  $: if (isBrowser) {
    if (open) {
      // 表示されたときに実施
      setTimeout(moveFocusIn, 0);
      if (!unlockScroll) unlockScroll = lockScroll();
    } else {
      // 非表示に切り替わったとき
      if (unlockScroll) {
        unlockScroll();
        unlockScroll = null;
      }
      restoreFocus();
    }
  }

  onDestroy(() => {
    if (unlockScroll) unlockScroll();
  });
</script>

{#if open}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div class="ccl-dialog-backdrop" role="presentation" on:click={() => { if (closeOnOutside) close(); }}>
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <div
      bind:this={panelEl}
      class="ccl-dialog-panel"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      style="--border-color: var({borderColor});"
      on:click|stopPropagation
      tabindex="-1"
    >
      <header class="ccl-dialog-header">
        <h2 id={titleId} class="ccl-dialog-title">
          <slot name="title">{title}</slot>
        </h2>
        <button class="ccl-dialog-close" aria-label="Close dialog" on:click={close}>
          ×
        </button>
      </header>
      <section class="ccl-dialog-body">
        <slot />
      </section>
      <footer class="ccl-dialog-footer">
        <slot name="footer" />
      </footer>
    </div>
  </div>
{/if}

<style>
  .ccl-dialog-backdrop {
    position: fixed;
    inset: 0;
    background: var(--wrap-grey);
    display: grid;
    place-items: center;
    z-index: 1000;
  }

  .ccl-dialog-panel {
    background: #fff;
    border: 4px solid var(--border-color);
    border-radius: 12px;
    max-width: 640px;
    width: calc(100% - 2rem);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
    color: var(--wrap-grey);
    display: grid;
    grid-template-rows: auto 1fr auto;
    max-height: 85vh;
    outline: none;
  }

  .ccl-dialog-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
    border-bottom: 3px solid var(--border-color);
    background: var(--border-color);
    color: #fff;
  }

  .ccl-dialog-title {
    margin: 0;
    color: #fff;
    font-size: 1.1rem;
  }

  .ccl-dialog-close {
    background: var(--border-color);
    border: 2px solid var(--border-color);
    color: #fff;
    border-radius: 8px;
    width: 2.25rem;
    height: 2.25rem;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 900;
    line-height: 1;
  }

  .ccl-dialog-body {
    padding: 1rem;
    overflow: auto;
  }

  .ccl-dialog-footer {
    padding: 0.75rem 1rem;
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
  }
</style>
