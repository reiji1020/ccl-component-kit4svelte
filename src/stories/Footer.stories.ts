import type { Meta, StoryObj } from '@storybook/svelte';
import Footer from '$lib/Footer.svelte';
import { CCLVividColor, HeaderHeight } from '$lib/const/config';
import { expect } from '@storybook/test';

const meta = {
	title: 'CommonComponents/Footer',
	component: Footer,
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
		}
	}
} satisfies Meta<Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 通常カラー、基本的にはこの色を使用する
 *
 * 必ずHeaderコンポーネントの色と揃えて使用する
 */
export const Pink: Story = {
	args: {
		bgColor: CCLVividColor.STRAWBERRY_PINK
	},
	play: async ({ args, step }) => {
		await step('背景色に指定した色がセットされていること', async () => {
			await expect(args.bgColor).toBe('--strawberry-pink');
		});
	}
};
/**
 * サブカラー、ピンクが使用できない時に使う
 *
 * 必ずHeaderコンポーネントの色と揃えて使用する
 */
export const Yellow: Story = {
	args: {
		bgColor: CCLVividColor.PINEAPPLE_YELLOW
	},
	play: async ({ args, step }) => {
		await step('背景色に指定した色がセットされていること', async () => {
			await expect(args.bgColor).toBe('--pineapple-yellow');
		});
	}
};
/**
 * ピンク、イエローが使えない時に使う
 *
 * 必ずHeaderコンポーネントの色と揃えて使用する
 */
export const Blue: Story = {
	args: {
		bgColor: CCLVividColor.SODA_BLUE
	},
	play: async ({ args, step }) => {
		await step('背景色に指定した色がセットされていること', async () => {
			await expect(args.bgColor).toBe('--soda-blue');
		});
	}
};
