<script lang="ts">
  /**
   * フォーム要素のラベルテキスト
   * @default ''
   * @type string
   */
  export let label: string = '';

  /**
   * ユーザーへの補足説明やヒント
   * @default ''
   * @type string
   */
  export let helpText: string = '';

  /**
   * バリデーションエラーが発生した場合に表示するメッセージ
   * @default ''
   * @type string
   */
  export let errorMessage: string = '';

  /**
   * ラベルと入力要素を関連付けるためのID
   * @default ''
   * @type string
   */
  export let forId: string = '';
</script>

<div class="formGroupWrapper">
  {#if label}
    <label for={forId} class="formLabel">{label}</label>
  {/if}

  <div class="formControl">
    <slot />
  </div>

  {#if helpText && !errorMessage}
    <p class="helpText">{helpText}</p>
  {/if}

  {#if errorMessage}
    <p class="errorMessage">{errorMessage}</p>
  {/if}
</div>

<style>
  .formGroupWrapper {
    margin-bottom: 16px;
  }

  .formLabel {
    display: block;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 4px;
    color: #333;
  }

  .formControl {
    /* スロットコンテンツのスタイルを調整するために必要に応じて追加 */
  }

  .helpText {
    font-size: 12px;
    color: #666;
    margin-top: 4px;
  }

  .errorMessage {
    font-size: 12px;
    color: #d9534f; /* Bootstrap danger color */
    margin-top: 4px;
  }
</style>
