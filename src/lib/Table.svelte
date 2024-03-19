<script lang="ts">
    /**
     * テーブルメインカラー
     * CCLVividColorの中から指定する
     * @default --strawberry-pink
     * @type string
     */
    export let tableColor: string;
    /**
     * テーブルサブカラー
     * CCLPasterColorの中から指定する(本当は自動調整されるようにしたい)
     * @default --peach-pink
     * @type string
     */
    export let subTableColor: string;
    /**
     * テーブルのヘッダー
     * 一次元配列で自由長、
     * @type Array<string>
     */
    export let dataHeader: string[];
    /**
     * テーブルにいれるデータ
     * 2次元の配列で自由長
     * @type Array<string | number>
     */
    export let tableData: string | number[][];
</script>

<!--汎用テーブル-->
<table class="tableWrapper">
    <!--テーブルヘッダー-->
    <tr class="tableHeader" style="--bgColor: var({tableColor})">
        {#each dataHeader as title, index}
                <th>{title}</th>
        {/each}
    </tr>
    {#each tableData as row}
        <tr style="--subBgColor: var({subTableColor})">
            {#each row as data}
                <td>{data}</td>
            {/each}
        </tr>
    {/each}
</table>

<style>
    tr {
        color: var(--wrap-grey);
    }

    tr:nth-child(even) {
        background-color: var(--subBgColor);
    }

    th {
        padding: 5px 60px;
    }

    td {
        text-align: center;
    }

    .tableWrapper {
        border-collapse: collapse;
    }
    .tableHeader {
        background-color: var(--bgColor);
        color: #ffffff;
    }
</style>