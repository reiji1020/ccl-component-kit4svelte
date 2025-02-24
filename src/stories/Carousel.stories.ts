import type { Meta, StoryObj } from '@storybook/svelte';
import Carousel from '$lib/Carousel.svelte';
import { CCLVividColor } from 'cclkit4svelte';

const meta = {
	title: 'CommonComponents/Carousel',
	component: Carousel,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		src: { control: { type: 'text' } },
		csWidth: { control: { type: 'text' } }
	}
} satisfies Meta<Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * デフォルト表示。基本的に画像の大きさは変えずに表示領域の幅だけ変更する
 *
 * Default display. Basically, the size of the image is not changed, only the width of the display area is changed.
 */
export const Default: Story = {
	args: {
		src: [
			{ src: 'frame1.png', alt: 'alt text' },
			{ src: 'frame2.png', alt: 'alt text' },
			{ src: 'frame3.png', alt: 'alt text' }
		],
		csWidth: '680px'
	}
};

/**
 * 大きいサイズ
 *
 * Large size
 */
export const Large: Story = {
	args: {
		src: [
			{ src: 'frame1.png', alt: 'alt text' },
			{ src: 'frame2.png', alt: 'alt text' },
			{ src: 'frame3.png', alt: 'alt text' }
		],
		csWidth: '900px'
	}
};

/**
 * 小さいサイズ
 *
 * small size
 */
export const Small: Story = {
	args: {
		src: [
			{ src: 'frame1.png', alt: 'alt text' },
			{ src: 'frame2.png', alt: 'alt text' },
			{ src: 'frame3.png', alt: 'alt text' }
		],
		csWidth: '350px'
	}
};
