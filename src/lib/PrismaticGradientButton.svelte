<script context="module" lang="ts">
  export type PrismaticGradientButtonTone = 'primary' | 'secondary';
  export type PrismaticGradientButtonSize = 'large' | 'medium';
  export type PrismaticGradientButtonType = 'button' | 'submit' | 'reset';
</script>

<script lang="ts">
  import { CCLPastelColor, CCLVividColor } from './const/config';
  import type { ColorVar } from './const/config';

  type GradientStops = {
    primaryStart: ColorVar;
    primaryEnd: ColorVar;
    secondaryStart: ColorVar;
    secondaryEnd: ColorVar;
    disabledStart: ColorVar;
    disabledEnd: ColorVar;
  };

  /**
   * ボタン内に表示するラベル
   * @default Explore the Lab
   */
  export let label: string = 'Explore the Lab';

  /**
   * ボタンの視覚的な強さ
   * @default primary
   */
  export let tone: PrismaticGradientButtonTone = 'primary';

  /**
   * ボタンサイズ
   * @default large
   */
  export let size: PrismaticGradientButtonSize = 'large';

  /**
   * グラデーションの基準色
   * @default --strawberry-pink
   */
  export let color: ColorVar = CCLVividColor.STRAWBERRY_PINK;

  /**
   * ボタンの非活性状態
   * @default false
   */
  export let disabled: boolean = false;

  /**
   * button要素のtype属性
   * @default button
   */
  export let type: PrismaticGradientButtonType = 'button';

  /**
   * クリックイベントハンドラ
   * @default () => {}
   */
  export let onClick: () => void = () => {};

  const fallbackStops: GradientStops = {
    primaryStart: CCLVividColor.STRAWBERRY_PINK,
    primaryEnd: CCLVividColor.SODA_BLUE,
    secondaryStart: CCLPastelColor.PEACH_PINK,
    secondaryEnd: CCLVividColor.STRAWBERRY_PINK,
    disabledStart: CCLPastelColor.LEMON_YELLOW,
    disabledEnd: CCLPastelColor.PEACH_PINK
  };

  const gradientStops: Record<string, GradientStops> = {
    [CCLVividColor.STRAWBERRY_PINK]: fallbackStops,
    [CCLVividColor.PINEAPPLE_YELLOW]: {
      primaryStart: CCLVividColor.PINEAPPLE_YELLOW,
      primaryEnd: CCLVividColor.MELON_GREEN,
      secondaryStart: CCLPastelColor.LEMON_YELLOW,
      secondaryEnd: CCLVividColor.PINEAPPLE_YELLOW,
      disabledStart: CCLPastelColor.LEMON_YELLOW,
      disabledEnd: CCLPastelColor.PEACH_PINK
    },
    [CCLVividColor.SODA_BLUE]: {
      primaryStart: CCLVividColor.SODA_BLUE,
      primaryEnd: CCLVividColor.GRAPE_PURPLE,
      secondaryStart: CCLPastelColor.SUGAR_BLUE,
      secondaryEnd: CCLVividColor.SODA_BLUE,
      disabledStart: CCLPastelColor.SUGAR_BLUE,
      disabledEnd: CCLPastelColor.CLOUD_GREY
    },
    [CCLVividColor.MELON_GREEN]: {
      primaryStart: CCLVividColor.MELON_GREEN,
      primaryEnd: CCLVividColor.SODA_BLUE,
      secondaryStart: CCLPastelColor.MATCHA_GREEN,
      secondaryEnd: CCLVividColor.MELON_GREEN,
      disabledStart: CCLPastelColor.MATCHA_GREEN,
      disabledEnd: CCLPastelColor.CLOUD_GREY
    },
    [CCLVividColor.GRAPE_PURPLE]: {
      primaryStart: CCLVividColor.GRAPE_PURPLE,
      primaryEnd: CCLVividColor.PINEAPPLE_YELLOW,
      secondaryStart: CCLPastelColor.AKEBI_PURPLE,
      secondaryEnd: CCLVividColor.GRAPE_PURPLE,
      disabledStart: CCLPastelColor.AKEBI_PURPLE,
      disabledEnd: CCLPastelColor.CLOUD_GREY
    },
    [CCLVividColor.WRAP_GREY]: {
      primaryStart: CCLVividColor.WRAP_GREY,
      primaryEnd: CCLVividColor.PINEAPPLE_YELLOW,
      secondaryStart: CCLPastelColor.CLOUD_GREY,
      secondaryEnd: CCLVividColor.WRAP_GREY,
      disabledStart: CCLPastelColor.CLOUD_GREY,
      disabledEnd: CCLPastelColor.CLOUD_GREY
    }
  };

  $: stops = gradientStops[color] ?? fallbackStops;
  $: gradientStart = disabled
    ? stops.disabledStart
    : tone === 'secondary'
      ? stops.secondaryStart
      : stops.primaryStart;
  $: gradientEnd = disabled
    ? stops.disabledEnd
    : tone === 'secondary'
      ? stops.secondaryEnd
      : stops.primaryEnd;
  $: gradientStartValue = `var(${gradientStart})`;
  $: gradientEndValue =
    color === CCLVividColor.WRAP_GREY && !disabled
      ? `color-mix(in srgb, var(${CCLVividColor.WRAP_GREY}) 14%, Canvas)`
      : `var(${gradientEnd})`;
  $: labelColor = disabled
    ? `var(${CCLVividColor.WRAP_GREY})`
    : 'var(--prismatic-gradient-button-primary-fg, Canvas)';
</script>

<button
  class="prismatic-gradient-button tone-{tone} size-{size}"
  style="--gradient-start: {gradientStartValue}; --gradient-end: {gradientEndValue}; --label-color: {labelColor};"
  on:click={onClick}
  {disabled}
  {type}
>
  <span class="label">{label}</span>
</button>

<style>
  .prismatic-gradient-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    width: fit-content;
    min-width: 156px;
    border: 0;
    border-radius: 999px;
    background: linear-gradient(105deg, var(--gradient-start), var(--gradient-end));
    color: var(--label-color);
    font-family: inherit;
    font-weight: 700;
    line-height: 1;
    letter-spacing: 0;
    white-space: nowrap;
    cursor: pointer;
    transition:
      transform 160ms ease,
      filter 160ms ease,
      opacity 160ms ease;
  }

  .size-large {
    min-height: 48px;
    padding: 0 28px;
    font-size: 14px;
  }

  .size-medium {
    min-height: 40px;
    min-width: 132px;
    padding: 0 22px;
    font-size: 12px;
  }

  .tone-secondary {
    color: var(--label-color);
  }

  .prismatic-gradient-button:hover:not(:disabled) {
    filter: saturate(1.08) brightness(1.02);
    transform: translateY(-1px);
  }

  .prismatic-gradient-button:active:not(:disabled) {
    filter: saturate(1.02) brightness(0.96);
    transform: translateY(0);
  }

  .prismatic-gradient-button:focus-visible {
    outline: 3px solid color-mix(in srgb, var(--gradient-end) 48%, Canvas);
    outline-offset: 3px;
  }

  .prismatic-gradient-button:disabled {
    cursor: not-allowed;
    opacity: 0.68;
  }

  .label {
    display: inline-flex;
    align-items: center;
  }
</style>
