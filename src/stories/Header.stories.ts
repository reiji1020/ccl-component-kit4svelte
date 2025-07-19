import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, within } from '@storybook/test';
import Header from '$lib/Header.svelte';
import { CCLVividColor, CCLPastelColor, HeaderHeight } from '$lib/const/config';
import AllColorsHeaderWrapper from './AllColors/AllColorsHeaderWrapper.svelte';

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
	play: async ({ args, step, canvasElement }) => {
		const canvas = within(canvasElement);
		await step('背景色にセットした色が渡されていること', async () => {
			await expect(args.bgColor).toBe(bgColor);
		});
		await step('Headerの高さがセットした大きさになっていること', async () => {
			await expect(args.height).toBe(height);
		});
		await step('aタグにリンクが設定されていること', async () => {
			const link = canvas.getByRole('link');
			await expect(link).toHaveAttribute('href', 'https://candychupslab.netlify.app/');
		});
	}
});

export const Default = createStory(CCLVividColor.STRAWBERRY_PINK, HeaderHeight.NORMAL);

export const WideHeader = createStory(CCLVividColor.STRAWBERRY_PINK, HeaderHeight.WIDE);
export const NallowHeader = createStory(CCLVividColor.STRAWBERRY_PINK, HeaderHeight.NALLOW);

export const AllColors: Story = {
	render: () => ({ Component: AllColorsHeaderWrapper }),
	args: {},
	parameters: {
		docs: {
			source: {
				code: null
			}
		}
	}
};
