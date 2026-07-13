<script context="module" lang="ts">
  export type PrismaticSectionHeadingTone =
    | '--strawberry-pink'
    | '--pineapple-yellow'
    | '--soda-blue'
    | '--melon-green'
    | '--grape-purple'
    | '--wrap-grey';

  export type PrismaticSectionHeadingProps = {
    eyebrow?: string;
    title?: string;
    tone?: PrismaticSectionHeadingTone;
  };
</script>

<script lang="ts">
  import { CCLVividColor } from './const/config';

  export let eyebrow: string = 'LATEST';
  export let title: string = 'Latest Stories';
  export let tone: PrismaticSectionHeadingTone = CCLVividColor.STRAWBERRY_PINK;

  $: toneValue = `var(${tone})`;
</script>

<div class="prismatic-section-heading" style="--eyebrow-color: {toneValue};">
  <p class="eyebrow">{eyebrow}</p>
  <h2 class="title">{title}</h2>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap');

  .prismatic-section-heading {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    width: min(100%, 600px);
    min-height: 80px;
    color: color-mix(in srgb, var(--palette-grape-900) 42%, var(--palette-wrap-900));
    font-family: 'DotGothic16', sans-serif;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0;
    overflow-wrap: anywhere;
    word-break: normal;
  }

  .eyebrow,
  .title {
    margin: 0;
    max-width: 100%;
    font-weight: 400;
  }

  .eyebrow {
    color: var(--eyebrow-color);
    font-size: 12px;
    line-height: 1.25;
    text-transform: uppercase;
  }

  .title {
    color: inherit;
    font-size: 42px;
    line-height: 1.05;
  }
</style>
