import type { Meta, StoryObj } from '@storybook/svelte';
import Toggle from '../lib/Toggle.svelte';
import { CCLVividColor, CCLPastelColor } from '../lib/const/config';
import { expect, fn, userEvent, within } from '@storybook/test';
import AllColorsToggleWrapper from './AllColors/AllColorsToggleWrapper.svelte';

const meta = {
	title: 'Form/Toggle',
	component: Toggle,
	tags: ['autodocs'],
	argTypes: {
		checked: {
			control: { type: 'boolean' }
		},
		color: {
			control: { type: 'select' },
			options: Object.values(CCLVividColor)
		},
		disabled: {
			control: { type: 'boolean' }
		},
		onChange: fn()
	}
} satisfies Meta<Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (initialArgs: Story['args']): Story => ({
	args: {
		...initialArgs,
		onChange: fn() // Ensure onChange is always a spy
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		const toggle = canvas.getByRole('checkbox', { hidden: true });

		await step('初期状態が正しいこと', async () => {
			if (args?.checked) {
				await expect(toggle).toBeChecked();
			} else {
				await expect(toggle).not.toBeChecked();
			}
		});

		await step('クリック操作が正しく行われること', async () => {
			await userEvent.click(toggle);
			if (args?.disabled) {
				await expect(args.onChange).not.toHaveBeenCalled();
				await step('非活性時は状態が変化しないこと', async () => {
					if (args?.checked) {
						await expect(toggle).toBeChecked();
					} else {
						await expect(toggle).not.toBeChecked();
					}
				});
			} else {
				await expect(args.onChange).toHaveBeenCalledOnce();
				await step('活性時は状態が変化すること', async () => {
					if (args?.checked) {
						await expect(toggle).not.toBeChecked(); // Will be false after click
					} else {
						await expect(toggle).toBeChecked(); // Will be true after click
					}
				});
			}
		});
	}
});

export const Default = createStory({
	checked: false
});

export const Checked = createStory({
	checked: true
});

export const Disabled = createStory({
	checked: false,
	disabled: true
});

export const DisabledChecked = createStory({
	checked: true,
	disabled: true
});

export const AllColors: Story = {
	render: () => ({ Component: AllColorsToggleWrapper }),
	args: {},
	parameters: {
		docs: {
			source: {
				code: null
			}
		}
	}
};
