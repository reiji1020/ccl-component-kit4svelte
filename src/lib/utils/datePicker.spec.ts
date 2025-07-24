import { describe, it, expect } from 'vitest';
import { DateTime } from 'luxon';
import { prevMonth, nextMonth, getDaysInMonth } from './datePicker';

describe('datePicker utils', () => {
	it('prevMonth returns previous month', () => {
		const date = DateTime.fromISO('2024-05-15');
		const prev = prevMonth(date);
		expect(prev.month).toBe(4);
		expect(prev.year).toBe(2024);
	});

	it('nextMonth returns next month', () => {
		const date = DateTime.fromISO('2024-05-15');
		const next = nextMonth(date);
		expect(next.month).toBe(6);
	});

	it('getDaysInMonth returns array length 42', () => {
		const days = getDaysInMonth(DateTime.fromISO('2024-02-01'));
		expect(days).toHaveLength(42);
	});
});
