<script lang="ts">
	import { CCLPastelColor, CCLVividColor } from '$lib/const/config';

	/**
	 * テーブルメインカラー
	 * CCLVividColorの中から指定する
	 * @default --strawberry-pink
	 * @type string
	 */
	export let tableColor: string;

	/**
	 * テーブルサブカラー
	 * CCLPasterColorの中から指定する
	 * @default --peach-pink
	 * @type string
	 */
	let bodyColor: string;

	/**
	 * テーブルのヘッダー
	 * 一次元配列で自由長、
	 * @type Array<string>
	 */
	export let dataHeader: string[];

	/**
	 * テーブルにいれるデータ
	 * 2次元の配列で自由長
	 * @type Array<Array<string | number>>
	 */
	export let tableData: (string | number)[][];

	/**
	 * テーブルカラーに応じた背景色を取得する関数
	 * @param tableColor - テーブルのメインカラー
	 * @returns 背景色
	 */
	function getBodyColor(tableColor: string): string {
		switch (tableColor) {
			case CCLVividColor.STRAWBERRY_PINK:
				return CCLPastelColor.PEACH_PINK;
			case CCLVividColor.PINEAPPLE_YELLOW:
				return CCLPastelColor.LEMON_YELLOW;
			case CCLVividColor.SODA_BLUE:
				return CCLPastelColor.SUGAR_BLUE;
			case CCLVividColor.MELON_GREEN:
				return CCLPastelColor.MATCHA_GREEN;
			case CCLVividColor.GRAPE_PURPLE:
				return CCLPastelColor.AKEBI_PURPLE;
			case CCLVividColor.WRAP_GREY:
				return CCLPastelColor.CLOUD_GREY;
			default:
				return CCLPastelColor.PEACH_PINK;
		}
	}

	// 背景色を取得
	$: bodyColor = getBodyColor(tableColor);
</script>

<!--汎用テーブル-->
<div class="table-wrapper">
	<table>
		<!--テーブルヘッダー-->
		<thead class="table-header" style="--bgColor: var({tableColor})">
			<tr>
				{#each dataHeader as title}
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
</div>

<style>
	th {
		padding: 5px 60px;
	}

	thead {
		position: sticky;
		top: 0;
		left: 0;
		white-space: nowrap;
	}

	table {
		border-collapse: collapse;
		width: 100%;
	}

	.table-wrapper {
		overflow-y: auto;
		max-width: 90%;
		height: 200px;
		-webkit-overflow-scrolling: touch;
	}

	.table-header {
		background-color: var(--bgColor);
		color: #ffffff;
	}
	.table-body-style {
		text-align: center;
		color: var(--wrap-grey);
		white-space: nowrap;
	}
	.table-body-style:nth-child(odd) {
		background-color: var(--table-body-color);
	}
</style>
