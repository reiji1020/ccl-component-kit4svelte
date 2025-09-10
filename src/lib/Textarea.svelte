<script lang="ts">
  import { CCLVividColor } from './const/config';

  /**
   * ラベルのテキスト
   * @default ''
   * @type string
   */
  export let label: string = '';

  /**
   * 入力値
   * @default ''
   * @type string
   */
  export let value: string = '';

  /**
   * プレースホルダーのテキスト
   * @default ''
   * @type string
   */
  export let placeholder: string = '';

  /**
   * 枠線の色
   * @default --strawberry-pink
   * @type string
   */
  export let borderColor: string = CCLVividColor.STRAWBERRY_PINK;

  /**
   * 非活性状態にするか
   * @default false
   * @type boolean
   */
  export let disabled: boolean = false;

  /**
   * コンポーネントのID
   * @default 'ccl-textarea'
   * @type string
   */
  export let id: string = 'ccl-textarea';

  /**
   * 行数
   * @default 5
   * @type number
   */
  export let rows: number = 5;

  /**
   * 列数
   * @default 20
   * @type number
   */
  export let cols: number = 20;
</script>

<div class="textarea-wrapper">
  {#if label}
    <label for={id} class="textarea-label">{label}</label>
  {/if}
  <textarea
    {id}
    bind:value
    {placeholder}
    {disabled}
    {rows}
    {cols}
    class="textarea-field"
    style="--border-color: var({borderColor})"
  />
</div>

<style>
  .textarea-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .textarea-label {
    font-size: 14px;
    color: var(--wrap-grey);
  }

  .textarea-field {
    padding: 10px 15px;
    border-radius: 8px;
    border: 2px solid var(--border-color);
    font-size: 16px;
    outline: none;
    transition: border-color 0.2s;
    resize: vertical; /* 垂直方向のみリサイズ可能 */
  }

  .textarea-field:focus {
    border-color: var(--ccl-focus-color, var(--soda-blue)); /* フォーカス時の色を定義 */
  }

  .textarea-field:disabled {
    background-color: var(--cloud-grey);
    cursor: not-allowed;
    border-color: var(--cloud-grey);
  }
</style>
