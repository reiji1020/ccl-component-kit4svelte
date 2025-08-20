<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { DateTime } from 'luxon';

	const dispatch = createEventDispatcher();

	/**
	 * 選択された日付
	 * @default null
	 * @type {Date | null}
	 */
	export let selectedDate: Date | null = null;

	/**
	 * 日付ピッカーのプレースホルダーテキスト
	 * @default '日付を選択'
	 * @type string
	 */
	export let placeholder: string = '日付を選択';

	/**
	 * 日付ピッカーのID
	 * @default ''
	 * @type string
	 */
	export let id: string = 'date-picker-' + Math.random().toString(36).substring(2, 9);

	/**
	 * ボーダーカラー、CCLVividColorの中から選ぶ
	 * @default --strawberry-pink
	 * @type string
	 */
	export let borderColor: string = '--strawberry-pink';

	let showCalendar = false;
	let currentMonth: DateTime = selectedDate ? DateTime.fromJSDate(selectedDate) : DateTime.local();

	$: formattedDate = selectedDate ? DateTime.fromJSDate(selectedDate).toFormat('yyyy/MM/dd') : '';

	// --- イベントハンドラを整理 ---
	function openCalendar() {
		showCalendar = true;
	}

	function closeCalendar() {
		showCalendar = false;
	}

	function selectDay(day: number) {
		const newDate = currentMonth.set({ day }).toJSDate();
		selectedDate = newDate;
		dispatch('change', newDate);
		closeCalendar(); // 日付選択後はカレンダーを閉じる
	}

	function prevMonth() {
		currentMonth = currentMonth.minus({ months: 1 });
	}

	function nextMonth() {
		currentMonth = currentMonth.plus({ months: 1 });
	}

	function getDaysInMonth(date: DateTime) {
		const startOfMonth = date.startOf('month');
		const endOfMonth = date.endOf('month');
		const days = [];

		// 前月の日付を埋める (日曜始まりに調整)
		const startDayOfWeek = startOfMonth.weekday % 7; // 1(月)..6(土), 0(日)
		for (let i = 0; i < startDayOfWeek; i++) {
			days.push(null);
		}

		// 今月の日付
		for (let i = 1; i <= endOfMonth.day; i++) {
			days.push(i);
		}

		// 6行x7列=42マスを埋めるために次月の日付を追加
		while (days.length < 42) {
			days.push(null);
		}

		return days;
	}

	/**
	 * Svelte Action to detect clicks outside an element.
	 * @param {HTMLElement} node
	 */
	function clickOutside(node: HTMLElement) {
		const handleClick = (event: MouseEvent) => {
			if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
				// 'click_outside' というカスタムイベントを発行
				node.dispatchEvent(new CustomEvent('click_outside'));
			}
		};

		document.addEventListener('click', handleClick, true);

		return {
			destroy() {
				document.removeEventListener('click', handleClick, true);
			}
		};
	}

	$: daysInMonth = getDaysInMonth(currentMonth);
</script>

<!--
  - `use:clickOutside` でアクションを適用
  - `on:click_outside` で外側クリック時の動作を定義
-->
<div
		class="datePickerWrapper"
		style="--selected-color: var({borderColor});"
		use:clickOutside
		on:click_outside={closeCalendar}
>
	<input
			type="text"
			{id}
			value={formattedDate}
			{placeholder}
			on:focus={openCalendar}
			readonly
			style="border-color: var({borderColor});"
	/>

	{#if showCalendar}
		<!--
      - カレンダー内のクリックが外側クリックと誤認されないようにイベントの伝播を止める
    -->
		<div class="calendarOverlay" on:click|stopPropagation>
			<div class="calendarHeader">
				<button on:click={prevMonth} aria-label="前月へ">&lt;</button>
				<span>{currentMonth.toFormat('yyyy年MM月')}</span>
				<button on:click={nextMonth} aria-label="次月へ">&gt;</button>
			</div>
			<div class="weekdays">
				<span>日</span>
				<span>月</span>
				<span>火</span>
				<span>水</span>
				<span>木</span>
				<span>金</span>
				<span>土</span>
			</div>
			<div class="daysGrid">
				{#each daysInMonth as day}
					<button
							class:currentMonthDay={day !== null}
							class:selected={selectedDate &&
							day === DateTime.fromJSDate(selectedDate).day &&
							currentMonth.month === DateTime.fromJSDate(selectedDate).month &&
							currentMonth.year === DateTime.fromJSDate(selectedDate).year}
							on:click={() => day && selectDay(day)}
							disabled={day === null}
					>
						{day !== null ? day : ''}
					</button>
				{/each}
			</div>
		</div>
	{/if}
</div>

<style>
	/* スタイルは変更なし */
	.datePickerWrapper {
		position: relative;
		display: inline-block;
	}

	.datePickerWrapper input {
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 120px;
		cursor: pointer; /* クリックできることを示す */
	}

	.datePickerWrapper input:focus {
		outline: none;
	}

	.calendarOverlay {
		position: absolute;
		background-color: white;
		border: 1px solid #ccc;
		border-radius: 4px;
		padding: 10px;
		z-index: 1000;
		box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
		margin-top: 5px;
	}

	.calendarHeader {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
	}

	.calendarHeader button {
		background: none;
		border: none;
		font-size: 1.2em;
		cursor: pointer;
		padding: 5px;
	}

	.weekdays,
	.daysGrid {
		display: grid;
		grid-template-columns: repeat(7, 1fr);
		text-align: center;
	}

	.weekdays span {
		font-weight: bold;
		padding: 5px 0;
	}

	.daysGrid button {
		background: none;
		border: none;
		padding: 0;
		width: 30px;
		height: 30px;
		line-height: 30px;
		cursor: pointer;
		border-radius: 4px;
	}

	.daysGrid button:hover:not([disabled]) {
		background-color: #eee;
	}

	.daysGrid button.currentMonthDay {
		color: #333;
	}

	.daysGrid button.selected {
		background-color: var(--selected-color);
		color: white;
	}

	.daysGrid button[disabled] {
		color: #ccc;
		cursor: default;
	}
</style>
