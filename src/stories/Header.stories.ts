import type { Meta, StoryObj } from '@storybook/svelte';
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
			options: [HeaderHeight.NALLOW, HeaderHeight.NOMAL, HeaderHeight.WIDE]
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
		height: HeaderHeight.NOMAL
	}
};
/**
 * セカンドカラー、メインカラーのピンクが使用できない場合に代用する
 */
export const Yellow: Story = {
	args: {
		bgColor: CCLVividColor.PINEAPPLE_YELLOW,
		height: HeaderHeight.NOMAL
	}
};
/**
 * こちらも何らかの理由でピンクが利用できないときに代用する
 */
export const Blue: Story = {
	args: {
		bgColor: CCLVividColor.SODA_BLUE,
		height: HeaderHeight.NOMAL
	}
};
/**
 * あまり活用機会は無いかも
 */
export const Green: Story = {
	args: {
		bgColor: CCLVividColor.MELON_GREEN,
		height: HeaderHeight.NOMAL
	}
};
/**
 * あまり活用機会は無いかも
 */
export const Purple: Story = {
	args: {
		bgColor: CCLVividColor.GRAPE_PURPLE,
		height: HeaderHeight.NOMAL
	}
};
/**
 * あまり活用機会は無いかも
 */
export const GREY: Story = {
	args: {
		bgColor: CCLVividColor.WRAP_GREY,
		height: HeaderHeight.NOMAL
	}
};

/**
 * 太幅対応版
 *
 * ペライチのページなどでヘッダーを強調したい場合に使用する？
 */
export const WideHeader: Story = {
	args: {
		bgColor: CCLVividColor.STRAWBERRY_PINK,
		height: HeaderHeight.WIDE
	}
};
/**
 * お知らせページなど、文章主体の控えめなページなどで使用する
 */
export const NallowHeader: Story = {
	args: {
		bgColor: CCLVividColor.STRAWBERRY_PINK,
		height: HeaderHeight.NALLOW
	}
};
