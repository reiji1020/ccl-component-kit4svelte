<script>export let bgColor;
const date = /* @__PURE__ */ new Date();
const year = date.getFullYear();
</script>

<!--汎用フッター-->
<footer>
    <div class="wrapper" style="--bgColor: var({bgColor});">
        <span class="copy">Copyright © 2015-{year} CANDY CHUPS Lab. All Rights Reserved.</span>
    </div>
</footer>

<style>

    .wrapper {
        display: flex;
        height: 30px;
        justify-content: center;
        align-items: center;
        background: var(--bgColor);
    }

    .copy {
        color: #fff;
        font-size: 9px;
    }
</style>