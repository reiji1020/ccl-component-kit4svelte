import type { Meta, StoryObj } from '@storybook/svelte';
import Button from '$lib/Button.svelte';
import { CCLVividColor } from '$lib/const/config';
import { expect, fn, userEvent, within } from '@storybook/test';

const meta = {
	title: 'Common/Button',
	component: Button,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
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
		},
		onClick: fn()
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
	play: async ({ args, canvasElement, step }) => {
		await step('ボタンが存在するかどうかをチェックする', async () => {
			const canvas = within(canvasElement);
			await userEvent.click(canvas.getByRole('button'));
		});

		await step('ボタンの色がプロパティの通りに設定されている', async () => {
			await expect(args.bgColor).toBe('--strawberry-pink');
		});

		await step('ボタンのテキストがプロパティの通りに設定されている', async () => {
			await expect(args.label).toBe('Strawberry Pink');
		});
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
	play: async ({ args, canvasElement, step }) => {
		await step('ボタンが存在するかどうかをチェックする', async () => {
			const canvas = within(canvasElement);
			await userEvent.click(canvas.getByRole('button'));
		});

		await step('ボタンの色がプロパティの通りに設定されている', async () => {
			await expect(args.bgColor).toBe('--pineapple-yellow');
		});

		await step('ボタンのテキストがプロパティの通りに設定されている', async () => {
			await expect(args.label).toBe('Pineapple Yellow');
		});
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
	play: async ({ args, canvasElement, step }) => {
		await step('ボタンが存在するかどうかをチェックする', async () => {
			const canvas = within(canvasElement);
			await userEvent.click(canvas.getByRole('button'));
		});

		await step('ボタンの色がプロパティの通りに設定されている', async () => {
			await expect(args.bgColor).toBe('--soda-blue');
		});

		await step('ボタンのテキストがプロパティの通りに設定されている', async () => {
			await expect(args.label).toBe('Soda Blue');
		});
	}
};

export const Green: Story = {
	args: {
		bgColor: CCLVividColor.MELON_GREEN,
		label: 'Melon Green',
		onClick: fn()
	},
	play: async ({ args, canvasElement, step }) => {
		await step('ボタンが存在するかどうかをチェックする', async () => {
			const canvas = within(canvasElement);
			await userEvent.click(canvas.getByRole('button'));
		});

		await step('ボタンの色がプロパティの通りに設定されている', async () => {
			await expect(args.bgColor).toBe('--melon-green');
		});

		await step('ボタンのテキストがプロパティの通りに設定されている', async () => {
			await expect(args.label).toBe('Melon Green');
		});
	}
};

export const Purple: Story = {
	args: {
		bgColor: CCLVividColor.GRAPE_PURPLE,
		label: 'Grape Purple',
		onClick: fn()
	},
	play: async ({ args, canvasElement, step }) => {
		await step('ボタンが存在するかどうかをチェックする', async () => {
			const canvas = within(canvasElement);
			await userEvent.click(canvas.getByRole('button'));
		});

		await step('ボタンの色がプロパティの通りに設定されている', async () => {
			await expect(args.bgColor).toBe('--grape-purple');
		});

		await step('ボタンのテキストがプロパティの通りに設定されている', async () => {
			await expect(args.label).toBe('Grape Purple');
		});
	}
};

export const Grey: Story = {
	args: {
		bgColor: CCLVividColor.WRAP_GREY,
		label: 'Wrap Grey',
		onClick: fn()
	},
	play: async ({ args, canvasElement, step }) => {
		await step('ボタンが存在するかどうかをチェックする', async () => {
			const canvas = within(canvasElement);
			await userEvent.click(canvas.getByRole('button'));
		});

		await step('ボタンの色がプロパティの通りに設定されている', async () => {
			await expect(args.bgColor).toBe('--wrap-grey');
		});

		await step('ボタンのテキストがプロパティの通りに設定されている', async () => {
			await expect(args.label).toBe('Wrap Grey');
		});
	}
};
