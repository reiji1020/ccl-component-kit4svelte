import type { Meta, StoryObj } from '@storybook/svelte';
import Button from '$lib/Button.svelte';
import { CCLVividColor, CCLPastelColor } from '$lib/const/config';
import { expect, fn, userEvent, within } from '@storybook/test';
import AllColorsButtonWrapper from './AllColors/AllColorsButtonWrapper.svelte';

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
		onClick: fn(),
		disabled: {
			control: { type: 'boolean' }
		}
	}
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (bgColor: string, label: string, disabled: boolean = false): Story => ({
	args: {
		bgColor,
		label,
		onClick: fn(),
		disabled
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		const button = canvas.getByRole('button');

		await step('ボタンが存在すること', async () => {
			await expect(button).toBeInTheDocument();
		});

		await step('ボタンの色が正しく設定されていること', async () => {
			await expect(args.bgColor).toBe(bgColor);
		});

		await step('ボタンのラベルが正しく設定されていること', async () => {
			await expect(args.label).toBe(label);
		});

		if (disabled) {
			await step('非活性状態であること', async () => {
				await expect(button).toBeDisabled();
			});
			await step('クリックしてもonClickが呼ばれないこと', async () => {
				await userEvent.click(button);
				await expect(args.onClick).not.toHaveBeenCalled();
			});
		} else {
			await step('活性状態であること', async () => {
				await expect(button).toBeEnabled();
			});
			await step('クリックするとonClickが呼ばれること', async () => {
				await userEvent.click(button);
				await expect(args.onClick).toHaveBeenCalled();
			});
		}
	}
});



export const Disabled = createStory(CCLVividColor.SODA_BLUE, 'Disabled Button', true);

export const DisabledClicked = createStory(CCLVividColor.SODA_BLUE, 'Disabled Clicked', true);

export const AllColors: Story = {
	render: () => ({ Component: AllColorsButtonWrapper }),
	args: {},
	parameters: {
		docs: {
			source: {
				code: null
			}
		}
	}
};
