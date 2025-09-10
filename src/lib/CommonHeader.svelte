<script lang="ts">
  import type { ColorVar } from './const/config';

  /**
   * ヘッダー背景色（CCLVividColor/CCLPastelColor の CSS 変数名）
   * @default --strawberry-pink
   */
  export let bgColor: ColorVar = '--strawberry-pink';
  /**
   * ヘッダー高さ（HeaderHeight の CSS 変数名）
   * @default --hd-normal
   */
  export let height: string = '--hd-normal';

  /**
   * ヘッダーに表示するロゴ
   * 基本的にsvg要素を読み込む
   * @type string
   */
  export let logo: string;

  /**
   * ロゴの高さ
   * @type string
   */
  export let logoHeight: string;

  /**
   * ロゴのリンク先
   * @type string
   */
  export let href: string;
</script>

<!--汎用ヘッダー-->
<header>
  <div class="wrapper" style="--bgColor: var({bgColor}); --height: var({height})">
    {#if logo}
      <a {href}>
        <img style="height: {logoHeight}" src={logo} alt="SVG Image" />
      </a>
    {:else}
      <p>SVGファイルが指定されていません</p>
    {/if}
  </div>
</header>

<style>
  .wrapper {
    background: var(--bgColor);
    height: var(--height);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .a {
    fill: #fff;
  }
</style>
