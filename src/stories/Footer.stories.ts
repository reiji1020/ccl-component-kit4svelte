import type { Meta, StoryObj } from '@storybook/svelte';
import Footer from '$lib/Footer.svelte';
import { CCLVividColor, CCLPastelColor } from '$lib/const/config';
import { expect } from '@storybook/test';
import AllColorsFooterWrapper from './AllColors/AllColorsFooterWrapper.svelte';

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

export const AllColors: Story = {
	render: () => ({ Component: AllColorsFooterWrapper }),
	args: {},
	parameters: {
		docs: {
			source: {
				code: null
			}
		}
	}
};
