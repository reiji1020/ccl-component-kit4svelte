import type { Meta, StoryObj } from '@storybook/svelte';
import Button from '$lib/Button.svelte';
import { CCLVividColor } from '$lib/const/config';
import { expect, fn, userEvent, within } from '@storybook/test';

const colorOptions = [
	CCLVividColor.STRAWBERRY_PINK,
	CCLVividColor.PINEAPPLE_YELLOW,
	CCLVividColor.SODA_BLUE,
	CCLVividColor.MELON_GREEN,
	CCLVividColor.GRAPE_PURPLE,
	CCLVividColor.WRAP_GREY
];

const meta = {
	title: 'CommonComponents/Button',
	component: Button,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		bgColor: {
			control: { type: 'select' },
			options: colorOptions
		},
		onClick: fn()
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (bgColor: string, label: string): Story => ({
	args: {
		bgColor,
		label,
		onClick: fn()
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		await step('Check if the button exists', async () => {
			await userEvent.click(canvas.getByRole('button'));
		});
		await step('Check if the button color is set correctly', async () => {
			await expect(args.bgColor).toBe(bgColor);
		});
		await step('Check if the button label is set correctly', async () => {
						await expect(args.label).toBe(label);
		});
		await step('Check if onClick is called', async () => {
			await expect(args.onClick).toHaveBeenCalled();
		});
	}
});

export const Pink = createStory(CCLVividColor.STRAWBERRY_PINK, 'Strawberry Pink');
export const Yellow = createStory(CCLVividColor.PINEAPPLE_YELLOW, 'Pineapple Yellow');
export const Blue = createStory(CCLVividColor.SODA_BLUE, 'Soda Blue');
export const Green = createStory(CCLVividColor.MELON_GREEN, 'Melon Green');
export const Purple = createStory(CCLVividColor.GRAPE_PURPLE, 'Grape Purple');
export const Grey = createStory(CCLVividColor.WRAP_GREY, 'Wrap Grey');
