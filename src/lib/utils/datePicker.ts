import { DateTime } from 'luxon';

/**
 * 指定月の前月を取得
 */
export const prevMonth = (current: DateTime): DateTime => {
	return current.minus({ months: 1 });
};

/**
 * 指定月の翌月を取得
 */
export const nextMonth = (current: DateTime): DateTime => {
	return current.plus({ months: 1 });
};

/**
 * カレンダー表示用に日付配列を生成
 */
export const getDaysInMonth = (date: DateTime): Array<number | null> => {
	const startOfMonth = date.startOf('month');
	const endOfMonth = date.endOf('month');
	const days: Array<number | null> = [];

	const startDayOfWeek = startOfMonth.weekday === 7 ? 0 : startOfMonth.weekday;
	for (let i = 0; i < startDayOfWeek; i++) {
		days.push(null);
	}

	for (let i = 1; i <= endOfMonth.day; i++) {
		days.push(i);
	}

	const remainingDays = 42 - days.length;
	for (let i = 0; i < remainingDays; i++) {
		days.push(null);
	}

	return days;
};
