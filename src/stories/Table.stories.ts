import type { Meta, StoryObj } from '@storybook/svelte';
import Table from '$lib/Table.svelte';
import { CCLVividColor } from '$lib/const/config';
import { expect, within } from '@storybook/test';

const colorOptions = [
	CCLVividColor.STRAWBERRY_PINK,
	CCLVividColor.PINEAPPLE_YELLOW,
	CCLVividColor.SODA_BLUE,
	CCLVividColor.MELON_GREEN,
	CCLVividColor.GRAPE_PURPLE,
	CCLVividColor.WRAP_GREY
];

const meta = {
	title: 'CommonComponents/Table',
	component: Table,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		tableColor: {
			control: { type: 'select' },
			options: colorOptions
		}
	}
} satisfies Meta<Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (tableColor: string, dataHeader: string[], tableData: string[][]): Story => ({
	args: {
		tableColor,
		dataHeader,
		tableData
	},
	play: async ({ args, step }) => {
		await step('メインカラーとして指定した色が正しいこと', async () => {
			await expect(args.tableColor).toBe(tableColor);
		});
	}
});

export const withScroll = createStory(
	CCLVividColor.STRAWBERRY_PINK,
	['更新日', 'お知らせ内容', 'カテゴリ'],
	[
		[
			'2024/03/19',
			'イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ',
			'イベント'
		],
		['2024/03/19', '商業誌出版のお知らせ', '出版物'],
		[
			'2024/03/19',
			'イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ',
			'イベント'
		],
		['2024/03/19', '商業誌出版のお知らせ', '出版物'],
		[
			'2024/03/19',
			'イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ',
			'イベント'
		],
		['2024/03/19', '商業誌出版のお知らせ', '出版物'],
		[
			'2024/03/19',
			'イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ',
			'イベント'
		],
		['2024/03/19', '商業誌出版のお知らせ', '出版物'],
		['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
		['2024/03/19', '商業誌出版のお知らせ', '出版物'],
		['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
		['2024/03/19', '商業誌出版のお知らせ', '出版物']
	]
);

export const Yellow = createStory(
	CCLVividColor.PINEAPPLE_YELLOW,
	['更新日', 'お知らせ内容', 'カテゴリ'],
	[
		['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
		['2024/03/19', '商業誌出版のお知らせ', '出版物'],
		['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
		['2024/03/19', '商業誌出版のお知らせ', '出版物']
	]
);

export const Blue = createStory(
	CCLVividColor.SODA_BLUE,
	['更新日', 'お知らせ内容', 'カテゴリ'],
	[
		['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
		['2024/03/19', '商業誌出版のお知らせ', '出版物'],
		['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
		['2024/03/19', '商業誌出版のお知らせ', '出版物']
	]
);
