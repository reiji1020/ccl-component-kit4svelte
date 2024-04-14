import type { Meta, StoryObj } from '@storybook/svelte';
import { expect } from '@storybook/test';
import Header from '$lib/Header.svelte';
import { CCLVividColor, HeaderHeight } from '$lib/const/config';

const meta = {
	title: 'Common/Header',
	component: Header,
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
		height: {
			control: { type: 'select' },
			options: [HeaderHeight.NALLOW, HeaderHeight.NORMAL, HeaderHeight.WIDE]
		}
	}
} satisfies Meta<Header>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 基本のカラー、特になにか事情がない場合はこの通常カラー＆通常幅のヘッダーを使用する
 */
export const Default: Story = {
	args: {
		bgColor: CCLVividColor.STRAWBERRY_PINK,
		height: HeaderHeight.NORMAL
	},
	play: async ({ args }) => {
		await expect(args.bgColor).toBe(CCLVividColor.STRAWBERRY_PINK);
		await expect(args.height).toBe(HeaderHeight.NORMAL);
	}
};
/**
 * サービスカラーを変えた場合などに使用。
 */
export const SecondColor: Story = {
	args: {
		bgColor: CCLVividColor.PINEAPPLE_YELLOW,
		height: HeaderHeight.NORMAL
	},
	play: async ({ args }) => {
		await expect(args.bgColor).toBe(CCLVividColor.PINEAPPLE_YELLOW);
		await expect(args.height).toBe(HeaderHeight.NORMAL);
	}
};
/**
 * サービスカラーを変えた場合などに使用、もしくはナイトモードでのプライマリカラーを想定。
 */
export const ThirdColor: Story = {
	args: {
		bgColor: CCLVividColor.SODA_BLUE,
		height: HeaderHeight.NORMAL
	},
	play: async ({ args }) => {
		await expect(args.bgColor).toBe(CCLVividColor.SODA_BLUE);
		await expect(args.height).toBe(HeaderHeight.NORMAL);
	}
};

/**
 * PC向けサービスなどでヘッダーの太さがもっと欲しいときなどに使用する
 */
export const WideHeader: Story = {
	args: {
		bgColor: CCLVividColor.STRAWBERRY_PINK,
		height: HeaderHeight.WIDE
	},
	play: async ({ args }) => {
		await expect(args.bgColor).toBe(CCLVividColor.STRAWBERRY_PINK);
		await expect(args.height).toBe(HeaderHeight.WIDE);
	}
};
/**
 * スマホ向けサービスなどでヘッダーの太さを削りたい時に使用する。
 */
export const NallowHeader: Story = {
	args: {
		bgColor: CCLVividColor.STRAWBERRY_PINK,
		height: HeaderHeight.NALLOW
	},
	play: async ({ args }) => {
		await expect(args.bgColor).toBe(CCLVividColor.STRAWBERRY_PINK);
		await expect(args.height).toBe(HeaderHeight.NALLOW);
	}
};
