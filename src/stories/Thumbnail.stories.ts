import type { Meta, StoryObj } from '@storybook/svelte';
import Thumbnail from '$lib/Thumbnail.svelte';
import { CCLVividColor } from '$lib/const/config';

const meta = {
	title: 'Common/Thumbnail',
	component: Thumbnail,
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
		imageSize: { control: { type: 'text' } },
		src: { control: { type: 'text' } }
	}
} satisfies Meta<Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

// 通常カラー
export const Default: Story = {
	args: {
		borderColor: CCLVividColor.STRAWBERRY_PINK,
		altText: 'Strawberry Pink',
		imageSize: '120px',
		src: 'thumbnail.png'
	}
};
// 2ndカラー
export const SecondColor: Story = {
	args: {
		borderColor: CCLVividColor.PINEAPPLE_YELLOW,
		altText: 'Pineapple Yellow',
		imageSize: '120px',
		src: 'thumbnail.png'
	}
};
// 3rdカラー
export const ThirdColor: Story = {
	args: {
		borderColor: CCLVividColor.SODA_BLUE,
		altText: 'Soda Blue',
		imageSize: '120px',
		src: 'thumbnail.png'
	}
};
