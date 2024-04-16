import type { Meta, StoryObj } from '@storybook/svelte';
import Thumbnail from '$lib/Thumbnail.svelte';
import { CCLVividColor } from '$lib/const/config';
import { expect, within } from '@storybook/test';

const meta = {
	title: 'Common/Thumbnail',
	component: Thumbnail,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		borderColor: {
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
		altText: { control: { type: 'text' } },
		imageSize: { control: { type: 'text' } },
		src: { control: { type: 'text' } }
	}
} satisfies Meta<Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

// 通常カラー
export const Default: Story = {
	args: {
		borderColor: CCLVividColor.STRAWBERRY_PINK,
		altText: 'Strawberry Pink',
		imageSize: '120px',
		src: 'thumbnail.png'
	},
	play: async ({ args, canvasElement, step }) => {
		await step('画像にalt属性が存在し、データが設定されていていること', async () => {
			const canvas = within(canvasElement);
			await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Strawberry Pink');
		});
		await step('ふちどり用として指定した色が正しいこと', async () => {
			await expect(args.borderColor).toBe('--strawberry-pink');
		});
	}
};
// 2ndカラー
export const Yellow: Story = {
	args: {
		borderColor: CCLVividColor.PINEAPPLE_YELLOW,
		altText: 'Pineapple Yellow',
		imageSize: '120px',
		src: 'thumbnail.png'
	},
	play: async ({ args, canvasElement, step }) => {
		await step('画像にalt属性が存在し、データが設定されていていること', async () => {
			const canvas = within(canvasElement);
			await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Pineapple Yellow');
		});
		await step('ふちどり用として指定した色が正しいこと', async () => {
			await expect(args.borderColor).toBe('--pineapple-yellow');
		});
	}
};
// 3rdカラー
export const Blue: Story = {
	args: {
		borderColor: CCLVividColor.SODA_BLUE,
		altText: 'Soda Blue',
		imageSize: '120px',
		src: 'thumbnail.png'
	},
	play: async ({ args, canvasElement, step }) => {
		await step('画像にalt属性が存在し、データが設定されていていること', async () => {
			const canvas = within(canvasElement);
			await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'Soda Blue');
		});
		await step('ふちどり用として指定した色が正しいこと', async () => {
			await expect(args.borderColor).toBe('--soda-blue');
		});
	}
};
