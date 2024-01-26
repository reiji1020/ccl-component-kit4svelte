<script lang="ts">
    /**
     * ボタンカラー、CCLVividColorの中から選ぶ
     * @default --strawberry-pink
     * @type string
     */
    export let bgColor: string;
    /**
     * クリックイベント
     * @default void
     * @type void
     */
    export let onclick: void | null;
    /**
     * ボタンの中に表示するテキスト
     * @default Button
     * @type string
     */
    export let label: string | "Button"
</script>

<!--汎用ボタン-->
<button class="buttonWrapper" style="background: var({bgColor})" onclick={onclick}><span class="btLabel">{label}</span></button>

<style>
    .buttonWrapper {
        display: flex;
        border-radius: 50px;
        border: none;
        padding: 15px 45px;
    }
    .btLabel {
        flex-direction: column;
        justify-content: center;
        flex-shrink: 0;
        color: #FFF;
        text-align: center;
        font-size: 18px;
        line-height: normal;
    }
</style>