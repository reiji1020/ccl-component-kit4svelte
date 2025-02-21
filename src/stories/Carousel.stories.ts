import type { Meta, StoryObj } from '@storybook/svelte';
import Carousel from '$lib/Carousel.svelte';

const meta = {
	title: 'CommonComponents/Carousel',
	component: Carousel,
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	}
} satisfies Meta<Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

// 通常カラー
export const Default: Story = {
	args: {
		src: [
			{ src: 'frame1.png', alt: 'alt text' },
			{ src: 'frame2.png', alt: 'alt text' },
			{ src: 'frame3.png', alt: 'alt text' }
		]
	}
};
