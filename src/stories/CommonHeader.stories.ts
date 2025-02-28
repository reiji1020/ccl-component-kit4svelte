import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, within } from '@storybook/test';
import CommonHeader from '$lib/CommonHeader.svelte';
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
	title: 'CommonComponents/CommonHeader',
	component: CommonHeader,
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
		},
		logo: { control: { type: 'text' } },
		logoHeight: { control: { type: 'text' } }
	}
} satisfies Meta<CommonHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (bgColor: string, height: string, logo: string, logoHeight: string): Story => ({
	args: {
		bgColor,
		height,
		logo,
		logoHeight
	},
	play: async ({ args, step, canvasElement }) => {
		const canvas = within(canvasElement);
		await step('背景色にセットした色が渡されていること', async () => {
			await expect(args.bgColor).toBe(bgColor);
		});
		await step('Headerの高さがセットした大きさになっていること', async () => {
			await expect(args.height).toBe(height);
		});
		await step('Headerに指定したsvg画像が埋め込まれていること', async () => {
			await expect(canvas.getByRole('img')).toHaveAttribute('src', logo);
		});
		await step('Headerに指定したsvg画像のheightが正しく指定されていること', async () => {
			await expect(args.logoHeight).toBe(logoHeight);
		});
	}
});

export const Pink = createStory(
	CCLVividColor.STRAWBERRY_PINK,
	HeaderHeight.NORMAL,
	'beace.svg',
	'50px'
);
export const Yellow = createStory(
	CCLVividColor.PINEAPPLE_YELLOW,
	HeaderHeight.NORMAL,
	'beace.svg',
	'50px'
);
export const ThirdColor = createStory(
	CCLVividColor.SODA_BLUE,
	HeaderHeight.NORMAL,
	'beace.svg',
	'50px'
);
export const Green = createStory(
	CCLVividColor.MELON_GREEN,
	HeaderHeight.NORMAL,
	'beace.svg',
	'50px'
);
export const Purple = createStory(
	CCLVividColor.GRAPE_PURPLE,
	HeaderHeight.NORMAL,
	'beace.svg',
	'50px'
);
export const Grey = createStory(CCLVividColor.WRAP_GREY, HeaderHeight.NORMAL, 'beace.svg', '50px');
export const WideHeader = createStory(
	CCLVividColor.STRAWBERRY_PINK,
	HeaderHeight.WIDE,
	'beace.svg',
	'50px'
);
export const NallowHeader = createStory(
	CCLVividColor.STRAWBERRY_PINK,
	HeaderHeight.NALLOW,
	'beace.svg',
	'30px'
);
