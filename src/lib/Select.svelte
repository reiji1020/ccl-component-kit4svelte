<script lang="ts">
  import { CCLVividColor } from './const/config';

  /**
   * オプションの型定義
   */
  export type SelectOption = { value: string; label: string };

  /**
   * ラベルのテキスト
   * @default ''
   * @type string
   */
  export let label: string = '';

  /**
   * 選択肢のリスト
   * @type SelectOption[]
   */
  export let options: SelectOption[] = [];

  /**
   * 選択された値
   * @default ''
   * @type string
   */
  export let value: string = '';

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
   * @default 'ccl-select'
   * @type string
   */
  export let id: string = 'ccl-select';
</script>

<div class="select-wrapper">
  {#if label}
    <label for={id} class="select-label">{label}</label>
  {/if}
  <select
    {id}
    bind:value
    {disabled}
    class="select-field"
    style="--border-color: var({borderColor})"
  >
    {#each options as option}
      <option value={option.value}>{option.label}</option>
    {/each}
  </select>
</div>

<style>
  .select-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .select-label {
    font-size: 14px;
    color: var(--wrap-grey);
  }

  .select-field {
    padding: 10px 15px;
    border-radius: 8px;
    border: 2px solid var(--border-color);
    font-size: 16px;
    outline: none;
    transition: border-color 0.2s;
    background-color: white; /* 背景色を白に設定 */
    appearance: none; /* デフォルトの矢印を非表示 */
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23000000%22%20d%3D%22M287%2069.4L146.2%20208.6%205.4%2069.4h281.6z%22%2F%3E%3C%2Fsvg%3E'); /* カスタム矢印 */
    background-repeat: no-repeat;
    background-position: right 10px center;
    background-size: 12px;
    cursor: pointer;
  }

  .select-field:focus {
    border-color: var(--ccl-focus-color, var(--soda-blue)); /* フォーカス時の色を定義 */
  }

  .select-field:disabled {
    background-color: var(--cloud-grey);
    cursor: not-allowed;
    border-color: var(--cloud-grey);
  }
</style>
