import type { Meta, StoryObj } from '@storybook/svelte';
import Footer from '$lib/Footer.svelte';
import { CCLVividColor } from '$lib/const/config';
import { expect } from '@storybook/test';

const colorOptions = [
	CCLVividColor.STRAWBERRY_PINK,
	CCLVividColor.PINEAPPLE_YELLOW,
	CCLVividColor.SODA_BLUE,
	CCLVividColor.MELON_GREEN,
	CCLVividColor.GRAPE_PURPLE,
	CCLVividColor.WRAP_GREY
];

const meta = {
	title: 'CommonComponents/Footer',
	component: Footer,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		bgColor: {
			control: { type: 'select' },
			options: colorOptions
		}
	}
} satisfies Meta<Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (bgColor: string): Story => ({
	args: {
		bgColor
	},
	play: async ({ args, step }) => {
		await step('背景色に指定した色がセットされていること', async () => {
			await expect(args.bgColor).toBe(bgColor);
		});
	}
});

export const Pink = createStory(CCLVividColor.STRAWBERRY_PINK);
export const Yellow = createStory(CCLVividColor.PINEAPPLE_YELLOW);
export const Blue = createStory(CCLVividColor.SODA_BLUE);
export const Green = createStory(CCLVividColor.MELON_GREEN);
export const Purple = createStory(CCLVividColor.GRAPE_PURPLE);
export const Grey = createStory(CCLVividColor.WRAP_GREY);
