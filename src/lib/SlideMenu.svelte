<script lang="ts">
  import Drawer from './Drawer.svelte';
  import { CCLVividColor } from './const/config';
  import type { ColorVar } from './const/config';
  import { vividFor } from './const/colorMap';
  import { createEventDispatcher, tick } from 'svelte';

  import type { MenuItem } from './types/slide-menu';

  /** 開閉状態（制御） */
  export let open: boolean = false;
  /** スライド方向 */
  export let side: 'left' | 'right' | 'top' | 'bottom' = 'left';
  /** パネルサイズ */
  export let size: string = '320px';
  /** メニュータイトル */
  export let title: string = 'メニュー';
  /** ナビの aria-label（見出し連携がない場合の代替） */
  export let ariaLabel: string = 'メインメニュー';
  /** リンク一覧 */
  export let items: MenuItem[] = [];
  /** 現在選択中の項目 id（強調表示） */
  export let currentId: string | undefined;
  /** アクセントカラー（選択中の強調） */
  export let accentColor: ColorVar = CCLVividColor.SODA_BLUE;
  /** 項目選択時に自動で閉じる */
  export let closeOnSelect: boolean = true;

  // Drawer の挙動
  export let backdrop: boolean = true;
  export let closeOnEsc: boolean = true;
  export let closeOnBackdropClick: boolean = true;

  // 色（パステル時の前景補正）
  $: accentFg = vividFor(accentColor as string);
  $: styleInline =
    `--sm-accent: var(${accentColor});` + (accentFg ? ` --sm-accent-fg: var(${accentFg});` : '');
  const dispatch = createEventDispatcher<{
    select: { id: string; item: MenuItem; event: Event };
    close: void;
  }>();

  let firstLink: HTMLAnchorElement | HTMLButtonElement | null = null;
  const titleId = 'slide-menu-title';

  // action: indexが0の要素を firstLink にセット
  function firstLinkAction(node: HTMLElement, index: number) {
    if (index === 0) firstLink = node as any;
    return {
      destroy() {
        if (firstLink === node) firstLink = null;
      }
    };
  }

  $: (async () => {
    if (open) {
      await tick();
      // 初期フォーカス: 最初のリンクへ
      try {
        firstLink?.focus();
      } catch {}
    }
  })();

  function handleSelect(item: MenuItem, event: Event) {
    const detail = { id: item.id, item, event };
    dispatch('select', detail);
    if (closeOnSelect) dispatch('close');
  }
</script>

<Drawer
  {open}
  {side}
  {size}
  {backdrop}
  {closeOnEsc}
  {closeOnBackdropClick}
  ariaLabel={title}
  on:close={() => dispatch('close')}
  panelStyle={styleInline}
  aria-labelledby={titleId}
>
  <div class="sm-header">
    <h2 id={titleId} class="sm-title">{title}</h2>
  </div>
  <nav class="sm-nav" role="navigation" aria-label={ariaLabel}>
    <ul class="sm-list" role="list">
      {#each items as it, i}
        <li>
          {#if it.href}
            <a
              use:firstLinkAction={i}
              class="sm-link {it.id === currentId ? 'active' : ''}"
              href={it.href}
              on:click|preventDefault={(e) => handleSelect(it, e)}
              aria-current={it.id === currentId ? 'page' : undefined}>{it.label}</a
            >
          {:else}
            <button
              use:firstLinkAction={i}
              type="button"
              class="sm-link {it.id === currentId ? 'active' : ''}"
              on:click={(e) => handleSelect(it, e)}
              aria-current={it.id === currentId ? 'page' : undefined}>{it.label}</button
            >
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
  <slot name="footer" />
</Drawer>

<style>
  .sm-header {
    padding: 16px;
    border-bottom: 1px solid #eee;
  }
  .sm-title {
    margin: 0;
    font-size: 16px;
  }
  .sm-nav {
    padding: 8px 8px 16px 8px;
  }
  .sm-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .sm-link {
    display: block;
    width: 100%;
    text-align: left;
    padding: 10px 12px;
    border-radius: 8px;
    color: var(--wrap-grey);
    text-decoration: none;
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 14px;
  }
  .sm-link.active {
    background: var(--sm-accent);
    color: var(--sm-accent-fg, #fff);
  }
  .sm-link:focus-visible {
    outline: 2px solid var(--sm-accent);
    outline-offset: 2px;
  }
</style>
