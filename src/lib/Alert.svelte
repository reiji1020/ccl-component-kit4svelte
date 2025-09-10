<script lang="ts">
  import { CCLVividColor } from './const/config';
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  /**
   * The message to display in the alert.
   * @type {string}
   */
  export let message: string;

  /**
   * The type of the alert, which determines its styling.
   * @type {'success' | 'error' | 'warning' | 'info'}
   * @default 'info'
   */
  export let type: 'success' | 'error' | 'warning' | 'info' = 'info';

  /**
   * Whether the alert can be dismissed by the user.
   * @type {boolean}
   * @default false
   */
  export let dismissible: boolean = false;

  /**
   * Whether the alert should have an outline style.
   * @type {boolean}
   * @default false
   */
  export let outline: boolean = false;

  let baseColor: string;
  let computedBgColor: string;
  let computedBorderColor: string;
  let textColor: string;

  $: {
    switch (type) {
      case 'success':
        baseColor = CCLVividColor.MELON_GREEN;
        break;
      case 'error':
        baseColor = CCLVividColor.STRAWBERRY_PINK;
        break;
      case 'warning':
        baseColor = CCLVividColor.PINEAPPLE_YELLOW;
        break;
      case 'info':
        baseColor = CCLVividColor.SODA_BLUE;
        break;
      default:
        baseColor = CCLVividColor.SODA_BLUE; // Fallback
    }

    if (outline) {
      computedBgColor = 'transparent';
      computedBorderColor = baseColor;
      textColor = 'var(--wrap-grey)'; // Outline alerts usually have dark text for contrast
    } else {
      computedBgColor = baseColor;
      computedBorderColor = 'transparent'; // No border for filled alerts
      textColor = 'white'; // Default text color for filled alerts
      if (type === 'warning') {
        textColor = 'white'; // Ensure warning text is white for filled style
      }
    }
  }

  function dismissAlert() {
    dispatch('dismiss');
  }
</script>

<div
  class="alert-wrapper"
  class:dismissible
  class:outline
  style="background-color: var({computedBgColor}); color: {textColor}; border-color: var({computedBorderColor});"
>
  <span class="alert-message">{message}</span>
  {#if dismissible}
    <button class="dismiss-button" on:click={dismissAlert} aria-label="Dismiss alert">
      &times;
    </button>
  {/if}
</div>

<style>
  .alert-wrapper {
    padding: 12px 20px;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 10px; /* Add some spacing when multiple alerts are shown */
    border: 2px solid; /* Use solid border, color set by style attribute */
  }

  .alert-message {
    flex-grow: 1;
  }

  .dismiss-button {
    background: none;
    border: none;
    color: inherit; /* Inherit text color from parent */
    font-size: 20px;
    cursor: pointer;
    margin-left: 15px;
    padding: 0;
    line-height: 1;
    opacity: 0.7;
    transition: opacity 0.2s ease-in-out;
  }

  .dismiss-button:hover {
    opacity: 1;
  }
</style>
