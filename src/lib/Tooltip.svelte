<script lang="ts">
  import { CCLVividColor } from "./const/config";

  export let text: string;
  export let position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  export let disabled = false;
  export let backgroundColor: string = CCLVividColor.WRAP_GREY;

  // ユニークなIDを生成してaria-describedbyで使用
  const tooltipId = `tooltip-${Math.random().toString(36).substr(2, 9)}`;

</script>

<div class="tooltip-trigger" data-testid="tooltip-trigger" tabindex="0" aria-describedby={!disabled ? tooltipId : undefined}>
  <slot />
  <span
    {...{id: tooltipId}}
    style:--tooltip-background-color={backgroundColor.startsWith('--') ? `var(${backgroundColor})` : backgroundColor}
    class="tooltip-content"
    data-testid="tooltip-content"
    class:disabled
    class:top={position === 'top'}
    class:bottom={position === 'bottom'}
    class:left={position === 'left'}
    class:right={position === 'right'}
    role="tooltip"
  >
    {text}
  </span>
</div>

<style>
  .tooltip-trigger {
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  .tooltip-content {
    position: absolute;
    z-index: 10;
    background-color: var(--tooltip-background-color);
    color: white;
    padding: 0.5em 1em;
    border-radius: 4px;
    font-size: 0.875rem;
    line-height: 1.4;
    white-space: nowrap;
    /* デフォルトは非表示 */
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.2s, visibility 0.2s;
  }

  /* disabledの場合は完全に非表示 */
  .tooltip-content.disabled {
    display: none;
  }

  /* ホバーまたはフォーカスで表示 */
  .tooltip-trigger:hover .tooltip-content,
  .tooltip-trigger:focus .tooltip-content {
    visibility: visible;
    opacity: 1;
  }

  /* 吹き出しの矢印 */
  .tooltip-content::after {
    content: '';
    position: absolute;
    border-style: solid;
  }

  /* --- ポジションごとのスタイル --- */

  /* 上に表示 */
  .tooltip-content.top {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: 8px;
  }
  .tooltip-content.top::after {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-color: var(--tooltip-background-color) transparent transparent transparent;
  }

  /* 下に表示 */
  .tooltip-content.bottom {
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin-top: 8px;
  }
  .tooltip-content.bottom::after {
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 5px;
    border-color: transparent transparent var(--tooltip-background-color) transparent;
  }

  /* 左に表示 */
  .tooltip-content.left {
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-right: 8px;
  }
  .tooltip-content.left::after {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-width: 5px;
    border-color: transparent transparent transparent var(--tooltip-background-color);
  }

  /* 右に表示 */
  .tooltip-content.right {
    left: 100%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 8px;
  }
  .tooltip-content.right::after {
    right: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-width: 5px;
    border-color: transparent var(--tooltip-background-color) transparent transparent;
  }
</style>
