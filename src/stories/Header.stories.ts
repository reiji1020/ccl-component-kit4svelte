import type { Meta, StoryObj } from '@storybook/svelte';
import { expect } from '@storybook/test';
import Header from '$lib/Header.svelte';
import { CCLVividColor, HeaderHeight } from '$lib/const/config';

const colorOptions = [
	CCLVividColor.STRAWBERRY_PINK,
	CCLVividColor.PINEAPPLE_YELLOW,
	CCLVividColor.SODA_BLUE,
	CCLVividColor.MELON_GREEN,
	CCLVividColor.GRAPE_PURPLE,
	CCLVividColor.WRAP_GREY
];

const heightOptions = [HeaderHeight.NALLOW, HeaderHeight.NORMAL, HeaderHeight.WIDE];

const meta = {
	title: 'CommonComponents/Header',
	component: Header,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		bgColor: {
			control: { type: 'select' },
			options: colorOptions
		},
		height: {
			control: { type: 'select' },
			options: heightOptions
		}
	}
} satisfies Meta<Header>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (bgColor: string, height: string): Story => ({
	args: {
		bgColor,
		height
	},
	play: async ({ args, step }) => {
		await step('背景色にセットした色が渡されていること', async () => {
			await expect(args.bgColor).toBe(bgColor);
		});
		await step('Headerの高さがセットした大きさになっていること', async () => {
			await expect(args.height).toBe(height);
		});
	}
});

export const Pink = createStory(CCLVividColor.STRAWBERRY_PINK, HeaderHeight.NORMAL);
export const Yellow = createStory(CCLVividColor.PINEAPPLE_YELLOW, HeaderHeight.NORMAL);
export const ThirdColor = createStory(CCLVividColor.SODA_BLUE, HeaderHeight.NORMAL);
export const Green = createStory(CCLVividColor.MELON_GREEN, HeaderHeight.NORMAL);
export const Purple = createStory(CCLVividColor.GRAPE_PURPLE, HeaderHeight.NORMAL);
export const Grey = createStory(CCLVividColor.WRAP_GREY, HeaderHeight.NORMAL);
export const WideHeader = createStory(CCLVividColor.STRAWBERRY_PINK, HeaderHeight.WIDE);
export const NallowHeader = createStory(CCLVividColor.STRAWBERRY_PINK, HeaderHeight.NALLOW);
