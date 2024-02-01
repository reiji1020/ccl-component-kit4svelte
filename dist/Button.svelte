<script>export let bgColor;
export let label;
</script>

<!--汎用ボタン-->
<button class="buttonWrapper" style="background: var({bgColor})"><span class="btLabel">{label}</span></button>

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