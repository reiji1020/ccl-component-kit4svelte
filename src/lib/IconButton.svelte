<script lang="ts">
  import type { Snippet } from 'svelte';
  import { CCLVividColor, type ColorVar } from './const/config';

  interface Props {
    label: string;
    icon: Snippet;
    size?: 'sm' | 'md' | 'lg';
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    backgroundColor?: ColorVar;
    borderColor?: ColorVar;
    focusColor?: ColorVar;
    onclick?: (event: MouseEvent) => void;
  }

  let {
    label, icon, size = 'md', type = 'button', disabled = false,
    backgroundColor = CCLVividColor.STRAWBERRY_PINK, borderColor, focusColor, onclick
  }: Props = $props();
</script>

<button
  {type}
  {disabled}
  {onclick}
  aria-label={label}
  data-size={size}
  style:--icon-background={`var(${backgroundColor})`}
  style:--icon-border={borderColor ? `var(${borderColor})` : undefined}
  style:--icon-focus={focusColor ? `var(${focusColor})` : undefined}
>
  <span aria-hidden="true">{@render icon()}</span>
</button>

<style>
  button {
    box-sizing: border-box;
    display: inline-grid;
    place-items: center;
    width: 44px;
    height: 44px;
    padding: 0;
    border: 1px solid var(--icon-border, transparent);
    border-radius: var(--ccl-button-radius, 50px);
    background: var(--icon-background);
    color-scheme: light;
    color: var(--ccl-button-label-color, Canvas);
    cursor: pointer;
  }
  button[data-size='sm'] { width: 32px; height: 32px; }
  button[data-size='lg'] { width: 48px; height: 48px; }
  span { display: grid; place-items: center; }
  button:focus-visible {
    outline: 2px solid var(--icon-focus, var(--ccl-focus-color, var(--soda-blue)));
    outline-offset: 2px;
  }
  button:disabled {
    background: var(--palette-cloud-100);
    color: var(--wrap-grey);
    cursor: not-allowed;
  }
</style>
