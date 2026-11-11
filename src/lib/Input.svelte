<script context="module" lang="ts">
  let nextInputId = 0;
</script>

<script lang="ts">
  import { onMount } from 'svelte';
  import { CCLVividColor } from './const/config';

  /**
   * 入力フィールドのタイプ
   * @default 'text'
   * @type {'text' | 'password' | 'email' | 'number'}
   */
  export let type: 'text' | 'password' | 'email' | 'number' = 'text';

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
   * @type string
   */
  export let id: string | undefined = undefined;

  /**
   * バリデーションメッセージ
   * @default ''
   * @type string
   */
  export let validationMessage: string = '';

  /**
   * バリデーションの状態
   * @default true
   * @type boolean
   */
  export let isValid: boolean = true;

  let generatedId: string | undefined;
  onMount(() => {
    generatedId = `ccl-input-${++nextInputId}`;
  });
  $: inputId = id ?? generatedId;
  $: errorId = !isValid && validationMessage && inputId ? `${inputId}-error` : undefined;
</script>

{#snippet field()}
  {#if type === 'text'}
    <input
      id={inputId}
      aria-invalid={!isValid}
      aria-describedby={errorId}
      type="text"
      bind:value
      {placeholder}
      {disabled}
      class="input-field"
      class:invalid={!isValid}
      style="--border-color: var({borderColor})"
    />
  {:else if type === 'password'}
    <input
      id={inputId}
      aria-invalid={!isValid}
      aria-describedby={errorId}
      type="password"
      bind:value
      {placeholder}
      {disabled}
      class="input-field"
      class:invalid={!isValid}
      style="--border-color: var({borderColor})"
    />
  {:else if type === 'email'}
    <input
      id={inputId}
      aria-invalid={!isValid}
      aria-describedby={errorId}
      type="email"
      bind:value
      {placeholder}
      {disabled}
      class="input-field"
      class:invalid={!isValid}
      style="--border-color: var({borderColor})"
    />
  {:else if type === 'number'}
    <input
      id={inputId}
      aria-invalid={!isValid}
      aria-describedby={errorId}
      type="number"
      bind:value
      {placeholder}
      {disabled}
      class="input-field"
      class:invalid={!isValid}
      style="--border-color: var({borderColor})"
    />
  {/if}
{/snippet}

<div class="input-wrapper">
  {#if label && id === undefined}
    <label class="input-wrapper">
      <span class="input-label">{label}</span>
      {@render field()}
    </label>
  {:else}
    {#if label}
      <label for={id} class="input-label">{label}</label>
    {/if}
    {@render field()}
  {/if}
  {#if !isValid && validationMessage}
    <span id={errorId} class="validation-message">{validationMessage}</span>
  {/if}
</div>

<style>
  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .input-label {
    font-size: 14px;
    color: var(--wrap-grey);
  }

  .input-field {
    padding: 10px 15px;
    border-radius: 8px;
    border: 2px solid var(--border-color);
    font-size: 16px;
    outline: none;
    transition: border-color 0.2s;
  }

  .input-field:focus {
    border-color: var(--ccl-focus-color, var(--soda-blue)); /* フォーカス時の色を定義 */
  }

  .input-field:disabled {
    background-color: var(--cloud-grey);
    cursor: not-allowed;
    border-color: var(--cloud-grey);
  }

  .input-field.invalid {
    border-color: var(--ccl-error-color, var(--strawberry-pink));
  }

  .validation-message {
    font-size: 12px;
    color: var(--ccl-error-color, var(--strawberry-pink));
  }
</style>
