<script lang="ts">
    /**
     * フッター背景色
     * CCLVividColorの中から指定する
     * @default --strawberry-pink
     * @type string
     */
    export let bgColor: string;

    /**
     * アクセス当日の年を４桁で算出、フッターの中に配置する
     */
    const date = new Date();
    const year = date.getFullYear();
</script>

<!--汎用フッター-->
<footer>
    <div class="wrapper" style="background: var({bgColor});">
        <span class="copy">Copyright © 2015-{year} CANDY CHUPS Lab. All Rights Reserved.</span>
    </div>
</footer>

<style>
    .wrapper {
        display: flex;
        padding: 0 298px;
        height: 30px;
        justify-content: center;
        align-items: center;
    }

    .copy {
        color: #fff;
        font-size: 12px;
    }
</style>