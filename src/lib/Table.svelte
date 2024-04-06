<script lang="ts">
	import { CCLPastelColor, CCLVividColor } from '$lib/const/config';
	import './const/variables.css';
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
	let bodyColor: string;

	switch (tableColor) {
		case CCLVividColor.STRAWBERRY_PINK:
			bodyColor = CCLPastelColor.PEACH_PINK;
			break;
		case CCLVividColor.PINEAPPLE_YELLOW:
			bodyColor = CCLPastelColor.LEMON_YELLOW;
			break;
		case CCLVividColor.SODA_BLUE:
			bodyColor = CCLPastelColor.SUGAR_BLUE;
			break;
		case CCLVividColor.MELON_GREEN:
			bodyColor = CCLPastelColor.MATCHA_GREEN;
			break;
		case CCLVividColor.GRAPE_PURPLE:
			bodyColor = CCLPastelColor.AKEBI_PURPLE;
			break;
		case CCLVividColor.WRAP_GREY:
			bodyColor = CCLPastelColor.CLOUD_GREY;
			break;
		default:
			bodyColor = CCLPastelColor.PEACH_PINK;
			break;
	}
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
<table class="table-wrapper">
	<!--テーブルヘッダー-->
	<thead class="table-header" style="--bgColor: var({tableColor})">
		<tr>
			{#each dataHeader as title, index}
				<th>{title}</th>
			{/each}
		</tr>
	</thead>
	<tbody>
		{#each tableData as row}
			<tr class="table-body-style" style="--table-body-color: var({bodyColor})">
				{#each row as data}
					<td>{data}</td>
				{/each}
			</tr>
		{/each}
	</tbody>
</table>

<style>
	th {
		padding: 5px 60px;
	}

	.table-wrapper {
		border-collapse: collapse;
	}
	.table-header {
		background-color: var(--bgColor);
		color: #ffffff;
	}
	.table-body-style {
		text-align: center;
		color: var(--wrap-grey);
	}
	.table-body-style:nth-child(odd) {
		background-color: var(--table-body-color);
	}
</style>
