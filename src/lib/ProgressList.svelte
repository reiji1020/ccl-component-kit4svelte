<script lang="ts">
  import ProgressBar from './ProgressBar.svelte';
  import { CCLPastelColor, CCLVividColor, ProgressBarHeight } from './const/config';

  // 進捗ステータスの種別。
  export type ProgressStatus = 'pending' | 'in_progress' | 'done' | 'blocked';

  // リストに表示する1行分のデータ。
  export type ProgressItem = {
    title: string;
    subtitle?: string;
    progress: number;
    status?: ProgressStatus;
    meta?: string;
    iconUrl?: string;
    accentColor?: string;
    linkUrl?: string;
  };

  /** 表示するアイテム配列。 */
  export let items: ProgressItem[] = [];
  /** 右側にパーセント表示を出すか。 */
  export let showPercent: boolean = true;
  /** バーの下にmetaを表示するか。 */
  export let showMeta: boolean = true;
  /** バーの高さ（ProgressBarHeightに準拠）。 */
  export let barHeight: ProgressBarHeight = ProgressBarHeight.DEFAULT;
  /** 余白を抑えるコンパクト表示。 */
  export let compact: boolean = false;
  /** linkUrlがあるときに行全体をリンク化するか。 */
  export let clickable: boolean = true;
  /** item.accentColor未指定時のフォールバック色。 */
  export let accentFallback: string = CCLVividColor.STRAWBERRY_PINK;

  declare const $$slots: { actions?: unknown; itemSuffix?: unknown };
  let hasActions = false;

  const statusLabel: Record<ProgressStatus, string> = {
    pending: 'Pending',
    in_progress: 'In progress',
    done: 'Done',
    blocked: 'Blocked'
  };

  const vividToPastelMap: Record<string, string> = {
    [CCLVividColor.STRAWBERRY_PINK]: CCLPastelColor.PEACH_PINK,
    [CCLVividColor.PINEAPPLE_YELLOW]: CCLPastelColor.LEMON_YELLOW,
    [CCLVividColor.SODA_BLUE]: CCLPastelColor.SUGAR_BLUE,
    [CCLVividColor.MELON_GREEN]: CCLPastelColor.MATCHA_GREEN,
    [CCLVividColor.GRAPE_PURPLE]: CCLPastelColor.AKEBI_PURPLE,
    [CCLVividColor.WRAP_GREY]: CCLPastelColor.CLOUD_GREY
  };

  function clampProgress(value: number): number {
    if (Number.isNaN(value)) return 0;
    if (value < 0) return 0;
    if (value > 100) return 100;
    return value;
  }

  function cssColor(value: string | undefined): string {
    const color = value ?? accentFallback;
    return color.startsWith('--') ? `var(${color})` : color;
  }

  function pastelBackground(value: string | undefined): string {
    const color = value ?? accentFallback;
    const pastel = vividToPastelMap[color] ?? color;
    return pastel.startsWith('--') ? `var(${pastel})` : pastel;
  }

  $: hasActions = Boolean($$slots.actions);
</script>

<div class="progress-list" class:compact>
  <div class="list-header" hidden={!hasActions}>
    <slot name="actions" />
  </div>

  {#if items.length === 0}
    <div class="empty-state">No items</div>
  {:else}
    <ul class="items">
      {#each items as item, index (item.title + index)}
        <li>
          <svelte:element
            this={clickable && item.linkUrl ? 'a' : 'div'}
            class:link={clickable && item.linkUrl}
            class="item"
            href={clickable && item.linkUrl ? item.linkUrl : undefined}
            target={clickable && item.linkUrl ? '_blank' : undefined}
            rel={clickable && item.linkUrl ? 'noopener noreferrer' : undefined}
            style={`--item-accent:${cssColor(item.accentColor)}; --item-bg:${pastelBackground(item.accentColor)};`}
            >
            <div class="item-leading">
              {#if item.iconUrl}
                <img src={item.iconUrl} alt="" class="item-icon" />
              {:else}
                <span class={`status-dot status-${item.status ?? 'in_progress'}`} aria-hidden="true">
                  {#if item.status === 'done'}
                    <svg viewBox="0 0 24 24" role="img" focusable="false">
                      <path d="M20.285 6.709a1 1 0 0 0-1.57-1.245l-8.243 10.4-4.187-3.836a1 1 0 1 0-1.352 1.474l4.95 4.535a1 1 0 0 0 1.465-.103l9.937-11.225Z" />
                    </svg>
                  {:else if item.status === 'blocked'}
                    <svg viewBox="0 0 24 24" role="img" focusable="false">
                      <path d="M11 7a1 1 0 1 1 2 0v6a1 1 0 1 1-2 0V7Zm0 10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
                      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20ZM4 12a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z" />
                    </svg>
                  {:else if item.status === 'pending'}
                    <svg viewBox="0 0 24 24" role="img" focusable="false">
                      <circle cx="12" cy="12" r="6" />
                    </svg>
                  {:else}
                    <svg viewBox="0 0 24 24" role="img" focusable="false">
                      <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 15h-2v-2h2Zm0-4h-2V7h2Z" />
                    </svg>
                  {/if}
                </span>
              {/if}
            </div>
            <div class="item-body">
              <div class="item-header">
                <div class="titles">
                  <div class="title">{item.title}</div>
                  {#if item.subtitle}
                    <div class="subtitle">{item.subtitle}</div>
                  {/if}
                </div>
                <div class="meta-side">
                  {#if showPercent}
                    <span class="percent">{Math.round(clampProgress(item.progress))}%</span>
                  {/if}
                  <slot name="itemSuffix" {item} />
                </div>
              </div>
              <div class="bar-row">
                <ProgressBar
                  value={clampProgress(item.progress)}
                  barColor="--item-accent"
                  backgroundColor="--item-bg"
                  height={barHeight}
                  containerWidth="100%"
                />
                <span class={`status status-${item.status ?? 'in_progress'}`}>
                  {statusLabel[item.status ?? 'in_progress']}
                </span>
              </div>
              {#if showMeta && item.meta}
                <div class="meta">{item.meta}</div>
              {/if}
            </div>
          </svelte:element>
        </li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  .progress-list {
    width: 100%;
    border: 1px solid var(--wrap-grey);
    border-radius: 12px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
    background: #fff;
    padding: 16px;
    box-sizing: border-box;
  }

  .progress-list.compact {
    padding: 12px;
  }

  .list-header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 8px;
  }

  .empty-state {
    color: var(--wrap-grey);
    font-size: 0.95rem;
    text-align: center;
    padding: 12px 0;
  }

  .items {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .progress-list.compact .items {
    gap: 8px;
  }

  .item {
    display: flex;
    gap: 12px;
    padding: 12px;
    border-radius: 10px;
    background: var(--item-bg, var(--cloud-grey));
    border: 2px solid var(--item-accent, var(--wrap-grey));
    text-decoration: none;
    color: inherit;
    transition: transform 0.15s ease, box-shadow 0.15s ease, background 0.15s ease;
  }

  .progress-list.compact .item {
    padding: 10px;
  }

  .item.link:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
  }

  .item-leading {
    width: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .item-icon {
    width: 32px;
    height: 32px;
    object-fit: cover;
    border-radius: 50%;
  }

  .status-dot {
    width: 24px;
    height: 24px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: #fff;
    border: 2px solid var(--item-accent, var(--wrap-grey));
    color: var(--wrap-grey);
  }

  .status-dot svg {
    width: 16px;
    height: 16px;
    fill: var(--item-accent, var(--wrap-grey));
  }

  .item-body {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .progress-list.compact .item-body {
    gap: 4px;
  }

  .item-header {
    display: flex;
    justify-content: space-between;
    gap: 12px;
    align-items: flex-start;
  }

  .titles {
    min-width: 0;
  }

  .title {
    font-weight: 700;
    color: var(--wrap-grey);
    font-size: 1rem;
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .progress-list.compact .title {
    font-size: 0.95rem;
  }

  .subtitle {
    color: #555;
    font-size: 0.9rem;
    margin-top: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .progress-list.compact .subtitle {
    font-size: 0.85rem;
  }

  .meta-side {
    display: flex;
    align-items: center;
    gap: 8px;
    white-space: nowrap;
  }

  .percent {
    font-weight: 700;
    color: var(--wrap-grey);
    font-size: 0.9rem;
  }

  .progress-list.compact .percent {
    font-size: 0.85rem;
  }

  .bar-row {
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    gap: 8px;
  }

  .status {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--wrap-grey);
    background: #fff;
    padding: 2px 8px;
    border-radius: 10px;
    border: 1px solid var(--wrap-grey);
  }

  .status-done {
    color: var(--item-accent, var(--wrap-grey));
    border-color: var(--item-accent, var(--wrap-grey));
  }

  .status-blocked {
    color: var(--grape-purple);
    border-color: var(--grape-purple);
  }

  .status-pending {
    color: #6b6b6b;
    border-color: #c0c0c0;
  }

  .meta {
    color: #444;
    font-size: 0.85rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .progress-list.compact .meta {
    font-size: 0.8rem;
  }
</style>
