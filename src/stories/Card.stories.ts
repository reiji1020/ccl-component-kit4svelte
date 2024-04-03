import type { Meta, StoryObj } from '@storybook/svelte';
import Card from '$lib/Card.svelte';
import { CCLVividColor } from '$lib/const/config';
import { CCLPastelColor } from '$lib/const/config';

const meta = {
	title: 'Common/Card',
	component: Card,
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
		title: { control: { type: 'text' } },
		cardText: { control: { type: 'text' } },
		src: { control: { type: 'text' } }
	}
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * イベント出展などのお知らせはプライマリカラーを使用します。
 *
 * Primary colour for notices of event exhibits, etc.
 */
export const Default: Story = {
	args: {
		borderColor: CCLVividColor.STRAWBERRY_PINK,
		src: 'thumbnail.png',
		altText: 'Strawberry Pink',
		title: 'プライマリカラーのカードです',
		cardText: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
	}
};
/**
 * 書籍の出版などのオフライン活動に関してはセカンダリカラーを使用します。
 *
 *　For offline activities such as book publishing, a secondary colour is used.
 */
export const SecondColor: Story = {
	args: {
		borderColor: CCLVividColor.PINEAPPLE_YELLOW,
		src: 'thumbnail.png',
		altText: 'Pineapple Yellow',
		title: 'セカンダリカラーのカードです',
		cardText: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
	}
};
/**
 * その他の汎用的なお知らせとしてサードカラーを使用します。
 *
 * Use third colour for other generic notices.
 */
export const ThirdColor: Story = {
	args: {
		borderColor: CCLVividColor.SODA_BLUE,
		src: 'thumbnail.png',
		altText: 'Soda Blue',
		title: 'その他のプライマリカラーのカードです',
		cardText: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
	}
};
