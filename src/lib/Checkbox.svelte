<script lang="ts">
  import { CCLVividColor } from './const/config';

  /**
   * チェックボックスのラベル
   * @default ''
   * @type string
   */
  export let label: string = '';

  /**
   * チェックボックスの状態
   * @default false
   * @type boolean
   */
  export let checked: boolean = false;

  /**
   * チェックボックスの色
   * @default '--soda-blue'
   * @type string
   */
  export let color: string = CCLVividColor.SODA_BLUE;

  /**
   * 非活性状態
   * @default false
   * @type boolean
   */
  export let disabled: boolean = false;

  /**
   * 状態が変更されたときのイベントハンドラ
   * @type {() => void}
   */
  export let onChange: () => void = () => {};

  const checkMarkColor = 'white' as const;

  function handleChange(event: Event) {
    if (disabled) {
      return;
    }
    const target = event.target as HTMLInputElement;
    checked = target.checked;
    onChange();
  }
</script>

<label class="checkboxWrapper" class:disabled>
  <input
    type="checkbox"
    bind:checked
    on:change={handleChange}
    {disabled}
    aria-label={label}
    name={label}
  />
  <span
    class="customCheckbox"
    style="--bg-color: var({color}); --check-mark-color: {checkMarkColor};"
  >
    {#if checked}
      <svg
        class="checkMark"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="3"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    {/if}
  </span>
  {#if label}
    <span class="label">{label}</span>
  {/if}
</label>

<style>
  .checkboxWrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    position: relative;
  }
  .checkboxWrapper.disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  .checkboxWrapper input[type='checkbox'] {
    border: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  .customCheckbox {
    width: 20px;
    height: 20px;
    border: 2px solid var(--bg-color);
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;
  }
  .checkboxWrapper input[type='checkbox']:checked + .customCheckbox {
    background-color: var(--bg-color);
  }
  .checkMark {
    stroke: var(--check-mark-color);
  }
  .label {
    margin-left: 8px;
    font-size: 16px;
  }
</style>
