import type { Meta, StoryObj } from '@storybook/svelte';
import { expect } from '@storybook/test';
import Header from '$lib/Header.svelte';
import { CCLVividColor, HeaderHeight } from '$lib/const/config';

const meta = {
	title: 'CommonComponents/Header',
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
 * メインカラー、通常はこの幅・このカラーのヘッダーを使用する。
 *
 * ロゴ部分にはサービストップへのリンクがあることが望ましい。
 */
export const Pink: Story = {
	args: {
		bgColor: CCLVividColor.STRAWBERRY_PINK,
		height: HeaderHeight.NORMAL
	},
	play: async ({ args, step }) => {
		await step('背景色にセットした色が渡されていること', async () => {
			await expect(args.bgColor).toBe('--strawberry-pink');
		});
		await step('Headerの高さがセットした大きさになっていること', async () => {
			await expect(args.height).toBe('--hd-normal');
		});
	}
};
/**
 * セカンドカラー、メインカラーのピンクが使用できない場合に代用する
 */
export const Yellow: Story = {
	args: {
		bgColor: CCLVividColor.PINEAPPLE_YELLOW,
		height: HeaderHeight.NORMAL
	},
	play: async ({ args, step }) => {
		await step('背景色にセットした色が渡されていること', async () => {
			await expect(args.bgColor).toBe('--pineapple-yellow');
		});
		await step('Headerの高さがセットした大きさになっていること', async () => {
			await expect(args.height).toBe('--hd-normal');
		});
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
	play: async ({ args, step }) => {
		await step('背景色にセットした色が渡されていること', async () => {
			await expect(args.bgColor).toBe('--soda-blue');
		});
		await step('Headerの高さがセットした大きさになっていること', async () => {
			await expect(args.height).toBe('--hd-normal');
		});
	}
};
/**
 * あまり活用機会は無いかも
 */
export const Green: Story = {
	args: {
		bgColor: CCLVividColor.MELON_GREEN,
		height: HeaderHeight.NORMAL
	},
	play: async ({ args, step }) => {
		await step('背景色にセットした色が渡されていること', async () => {
			await expect(args.bgColor).toBe('--melon-green');
		});
		await step('Headerの高さがセットした大きさになっていること', async () => {
			await expect(args.height).toBe('--hd-normal');
		});
	}
};
/**
 * あまり活用機会は無いかも
 */
export const Purple: Story = {
	args: {
		bgColor: CCLVividColor.GRAPE_PURPLE,
		height: HeaderHeight.NORMAL
	},
	play: async ({ args, step }) => {
		await step('背景色にセットした色が渡されていること', async () => {
			await expect(args.bgColor).toBe('--grape-purple');
		});
		await step('Headerの高さがセットした大きさになっていること', async () => {
			await expect(args.height).toBe('--hd-normal');
		});
	}
};
/**
 * あまり活用機会は無いかも
 */
export const GREY: Story = {
	args: {
		bgColor: CCLVividColor.WRAP_GREY,
		height: HeaderHeight.NORMAL
	},
	play: async ({ args, step }) => {
		await step('背景色にセットした色が渡されていること', async () => {
			await expect(args.bgColor).toBe('--wrap-grey');
		});
		await step('Headerの高さがセットした大きさになっていること', async () => {
			await expect(args.height).toBe('--hd-normal');
		});
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
	play: async ({ args, step }) => {
		await step('背景色にセットした色が渡されていること', async () => {
			await expect(args.bgColor).toBe('--strawberry-pink');
		});
		await step('Headerの高さがセットした大きさになっていること', async () => {
			await expect(args.height).toBe('--hd-wide');
		});
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
	play: async ({ args, step }) => {
		await step('背景色にセットした色が渡されていること', async () => {
			await expect(args.bgColor).toBe('--strawberry-pink');
		});
		await step('Headerの高さがセットした大きさになっていること', async () => {
			await expect(args.height).toBe('--hd-nallow');
		});
	}
};
