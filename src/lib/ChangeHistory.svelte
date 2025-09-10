<script lang="ts">
  import { CCLVividColor, CCLPastelColor } from './const/config';

  /**
   * @typedef {object} HistoryItem
   * @property {string} date - 更新日 (例: "2025/07")
   * @property {string} title - 更新内容のタイトル
   * @property {string} [tag] - カテゴリやバージョンなどのタグ (例: "イベント")。省略可能
   * @property {string} [color] - アイテムのテーマカラー。`CCLVividColor`の値を指定します。省略可能
   * @property {string} [version] - バージョン番号 (例: "v1.1.0")。省略可能
   * @property {string[]} [details] - 更新内容の詳細なリスト。省略可能
   */
  export interface HistoryItem {
    date: string;
    title: string;
    tag?: string;
    color?: string;
    version?: string;
    details?: string[];
  }

  /**
   * 表示する更新履歴の配列
   * @type {HistoryItem[]}
   */
  export let historyItems: HistoryItem[] = [];

  /**
   * コンポーネントの高さ。'400px'や'50vh'のようにCSSの値を指定します。
   * @type {string | undefined}
   */
  export let height: string | undefined = undefined;

  /**
   * アイテムに色が指定されていない場合のデフォルトカラー。`CCLVividColor`の値を指定します。
   * @type {string}
   */
  export let defaultColor: string = CCLVividColor.SODA_BLUE;

  // VividカラーをPastelカラー（タグ背景色）にマッピングします
  const vividToPastelMap: Record<string, string> = {
    [CCLVividColor.STRAWBERRY_PINK]: CCLPastelColor.PEACH_PINK,
    [CCLVividColor.PINEAPPLE_YELLOW]: CCLPastelColor.LEMON_YELLOW,
    [CCLVividColor.SODA_BLUE]: CCLPastelColor.SUGAR_BLUE,
    [CCLVividColor.MELON_GREEN]: CCLPastelColor.MATCHA_GREEN,
    [CCLVividColor.GRAPE_PURPLE]: CCLPastelColor.AKEBI_PURPLE,
    [CCLVividColor.WRAP_GREY]: CCLPastelColor.CLOUD_GREY
  };

  // defaultColorプロパティの変更に追従して、対応するパステルカラーを算出します
  $: defaultPastelColor = vividToPastelMap[defaultColor] || CCLPastelColor.SUGAR_BLUE;
</script>

<div class="change-history-container" style={height ? `height: ${height};` : ''}>
  <ul class="timeline">
    {#each historyItems as item (item.date + item.title)}
      <li
        class="timeline-item"
        style:--marker-color="var({item.color || defaultColor})"
        style:--tag-color="var({item.color || defaultColor})"
        style:--tag-bg-color="var({vividToPastelMap[item.color || defaultColor] ||
          defaultPastelColor})"
      >
        <div class="timeline-marker"></div>
        <div class="timeline-content">
          <div class="header">
            <time class="date" datetime={item.date}>{item.date}</time>
            {#if item.tag}
              <span class="tag">{item.tag}</span>
            {/if}
            {#if item.version}
              <span class="version">{item.version}</span>
            {/if}
          </div>
          <h3 class="title">{item.title}</h3>
          {#if item.details && item.details.length > 0}
            <ul class="details">
              {#each item.details as detail}
                <li>{detail}</li>
              {/each}
            </ul>
          {/if}
        </div>
      </li>
    {/each}
  </ul>
</div>

<style>
  .change-history-container {
    font-family: sans-serif;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    overflow-y: auto;
  }

  .timeline {
    list-style-type: none;
    padding-left: 20px;
    position: relative;
  }

  /* タイムラインの縦線 */
  .timeline::before {
    content: '';
    position: absolute;
    top: 5px;
    left: 5px;
    height: calc(100% - 5px);
    width: 2px;
    background-color: #dee2e6;
  }

  .timeline-item {
    position: relative;
    margin-bottom: 30px;
    padding-left: 35px;
  }

  .timeline-item:last-child {
    margin-bottom: 0;
  }

  .timeline-marker {
    position: absolute;
    top: 5px;
    left: -2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--marker-color);
    border: 3px solid #fff;
    z-index: 1;
  }

  .timeline-content {
    background-color: #ffffff;
    padding: 15px 20px;
    border-radius: 6px;
    border: 1px solid #dee2e6;
  }

  .header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 8px;
  }

  .date {
    font-weight: bold;
    color: #343a40;
  }

  .tag {
    background-color: var(--tag-bg-color);
    color: var(--tag-color);
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 0.85em;
    font-weight: 600;
  }

  .version {
    background-color: #f1f3f5; /* ニュートラルなグレー */
    color: #495057;
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 0.85em;
    font-weight: 600;
  }

  .title {
    margin: 0 0 12px 0;
    font-size: 1.15em;
    font-weight: 600;
    color: #212529;
  }

  .details {
    list-style-type: disc;
    padding-left: 20px;
    margin: 0;
    color: #495057;
    line-height: 1.6;
  }

  .details li {
    margin-bottom: 5px;
  }
  .details li:last-child {
    margin-bottom: 0;
  }
</style>
