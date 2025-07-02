<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { DateTime } from 'luxon';
	import './const/variables.css';

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

	/**
	 * blurイベントでカレンダーを閉じないようにするか
	 * テスト用途で利用
	 * @default false
	 * @type boolean
	 */
	export let disableBlurClose: boolean = false;

	let showCalendar = false;
	let currentMonth: DateTime = selectedDate ? DateTime.fromJSDate(selectedDate) : DateTime.local();

	$: formattedDate = selectedDate ? DateTime.fromJSDate(selectedDate).toFormat('yyyy/MM/dd') : '';

	function toggleCalendar() {
		showCalendar = !showCalendar;
	}

	function selectDay(day: number) {
		const newDate = currentMonth.set({ day }).toJSDate();
		selectedDate = newDate;
		dispatch('change', newDate);
		showCalendar = false;
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

		// 前月の日付を埋める
		const startDayOfWeek = startOfMonth.weekday === 7 ? 0 : startOfMonth.weekday; // Luxon: 1=Mon, 7=Sun. Adjust to 0=Sun, 6=Sat
		for (let i = 0; i < startDayOfWeek; i++) {
			days.push(null);
		}

		// 今月の日付
		for (let i = 1; i <= endOfMonth.day; i++) {
			days.push(i);
		}

		// 次月の日付を埋める
		const remainingDays = 42 - days.length; // 6 rows * 7 days
		for (let i = 0; i < remainingDays; i++) {
			days.push(null);
		}

		return days;
	}

	$: daysInMonth = getDaysInMonth(currentMonth);
</script>

<div class="datePickerWrapper" style="--selected-color: var({borderColor});">
	<input type="text" {id} value={formattedDate} placeholder={placeholder} on:focus={toggleCalendar} on:blur={() => { if (!disableBlurClose) toggleCalendar(); }} readonly style="border-color: var({borderColor});" />

	{#if showCalendar}
		<div class="calendarOverlay" on:mousedown|preventDefault={() => {}}>
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
						class:selected={selectedDate && day === DateTime.fromJSDate(selectedDate).day && currentMonth.month === DateTime.fromJSDate(selectedDate).month && currentMonth.year === DateTime.fromJSDate(selectedDate).year}
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

<style lang="css">
	.datePickerWrapper {
		position: relative;
		display: inline-block;
	}

	.datePickerWrapper input {
		padding: 8px;
		border: 1px solid #ccc;
		border-radius: 4px;
		width: 120px;
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
