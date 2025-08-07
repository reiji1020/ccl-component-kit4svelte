import type { Meta, StoryObj } from '@storybook/svelte';
import Carousel from '$lib/Carousel.svelte';

const meta = {
	title: 'CommonComponents/Carousel',
	component: Carousel,
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

const createStory = (src: { src: string; alt: string }[], csWidth: string): Story => ({
	args: {
		src,
		csWidth
	}
});

const imageSources = [
	{ src: 'frame1.png', alt: 'alt text' },
	{ src: 'frame2.png', alt: 'alt text' },
	{ src: 'frame3.png', alt: 'alt text' }
];

export const Default = createStory(imageSources, '680px');
