import type { Meta, StoryObj } from '@storybook/svelte';
import Button from '$lib/Button.svelte';
import { CCLVividColor, HeaderHeight } from '$lib/const/config';
import { expect, fireEvent, fn, userEvent, within } from '@storybook/test';

const meta = {
	title: 'Common/Button',
	component: Button,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		onClick: fn(),
		bgColor: {
			control: { type: 'select' },
			options: [
				CCLVividColor.STRAWBERRY_PINK,
				CCLVividColor.PINEAPPLE_YELLOW,
				CCLVividColor.SODA_BLUE,
				CCLVividColor.MELON_GREEN,
				CCLVividColor.GRAPE_PURPLE,
				CCLVividColor.WRAP_GREY
			]
		}
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * サービス、サークルのメインカラー
 *
 * 意思決定の場で、「次へ」や「OK」など、肯定の同意を得るときに使用します。
 *
 * Services, main colours of the circle.
 *
 * Used in decision-making situations to obtain agreement of affirmation, e.g. 'Next' or 'OK'.
 */
export const Pink: Story = {
	args: {
		bgColor: CCLVividColor.STRAWBERRY_PINK,
		label: 'Strawberry Pink',
		onClick: fn()
	},
	play: async ({ args, canvasElement }) => {
		await expect(args.bgColor).toBe(CCLVividColor.STRAWBERRY_PINK);
		await expect(args.label).toBe('Strawberry Pink');
		// Buttonがクリックされた時のイベントを取得
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('button'));
	}
};

/**
 * 意思決定の場で、ヘルプやユーザーの補助を行う情報を提示するときに使用します。中立カラーです。
 *
 * Used when presenting information to help or assist users in decision-making. Neutral colour.
 */
export const Yellow: Story = {
	args: {
		bgColor: CCLVividColor.PINEAPPLE_YELLOW,
		label: 'Pineapple Yellow',
		onClick: fn()
	},
	play: async ({ args, canvasElement }) => {
		await expect(args.bgColor).toBe(CCLVividColor.PINEAPPLE_YELLOW);
		await expect(args.label).toBe('Pineapple Yellow');
		// Buttonがクリックされた時のイベントを取得
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('button'));
	}
};

/**
 * 意思決定の場で、キャンセルや取りやめなどの否定的な意思決定を行うボタンで使用します。
 *
 * Used in decision-making situations with buttons for negative decisions such as cancel or withdraw.
 */
export const Blue: Story = {
	args: {
		bgColor: CCLVividColor.SODA_BLUE,
		label: 'Soda Blue',
		onClick: fn()
	},
	play: async ({ args, canvasElement }) => {
		await expect(args.bgColor).toBe(CCLVividColor.SODA_BLUE);
		await expect(args.label).toBe('Soda Blue');
		// Buttonがクリックされた時のイベントを取得
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('button'));
	}
};

export const Green: Story = {
	args: {
		bgColor: CCLVividColor.MELON_GREEN,
		label: 'Melon Green',
		onClick: fn()
	},
	play: async ({ args, canvasElement }) => {
		await expect(args.bgColor).toBe(CCLVividColor.MELON_GREEN);
		await expect(args.label).toBe('Melon Green');
		// Buttonがクリックされた時のイベントを取得
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('button'));
	}
};

export const Purple: Story = {
	args: {
		bgColor: CCLVividColor.GRAPE_PURPLE,
		label: 'Grape Purple',
		onClick: fn()
	},
	play: async ({ args, canvasElement }) => {
		await expect(args.bgColor).toBe(CCLVividColor.GRAPE_PURPLE);
		await expect(args.label).toBe('Grape Purple');
		// Buttonがクリックされた時のイベントを取得
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('button'));
	}
};

export const Grey: Story = {
	args: {
		bgColor: CCLVividColor.WRAP_GREY,
		label: 'Wrap Grey',
		onClick: fn()
	},
	play: async ({ args, canvasElement }) => {
		await expect(args.bgColor).toBe(CCLVividColor.WRAP_GREY);
		await expect(args.label).toBe('Wrap Grey');
		// Buttonがクリックされた時のイベントを取得
		const canvas = within(canvasElement);
		await userEvent.click(canvas.getByRole('button'));
	}
};
