import type { Meta, StoryObj } from '@storybook/svelte';
import Checkbox from '../lib/Checkbox.svelte';
import { CCLVividColor, CCLPastelColor } from '../lib/const/config';
import { expect, fn, userEvent, within } from '@storybook/test';
import MultipleCheckboxesWrapper from './MultipleCheckboxesWrapper.svelte';
import AllColorsCheckboxWrapper from './AllColors/AllColorsCheckboxWrapper.svelte';

const meta = {
	title: 'Form/Checkbox',
	component: Checkbox,
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: { type: 'text' }
		},
		checked: {
			control: { type: 'boolean' }
		},
		color: {
			control: { type: 'select' },
			options: Object.values(CCLVividColor)
		},
		onChange: fn()
	}
} satisfies Meta<Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (initialArgs: Story['args']): Story => ({
	args: {
		...initialArgs,
		onChange: fn() // Ensure onChange is always a spy
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		const checkbox = canvas.getByRole('checkbox', { hidden: true });

		await step('初期状態が正しいこと', async () => {
			if (args?.checked) {
				await expect(checkbox).toBeChecked();
			} else {
				await expect(checkbox).not.toBeChecked();
			}
		});

		await step('クリック操作が正しく行われること', async () => {
			await userEvent.click(checkbox);
			if (args?.disabled) {
				await expect(args.onChange).not.toHaveBeenCalled();
				await step('非活性時は状態が変化しないこと', async () => {
					if (args?.checked) {
						await expect(checkbox).toBeChecked();
					} else {
						await expect(checkbox).not.toBeChecked();
					}
				});
			} else {
				await expect(args.onChange).toHaveBeenCalledOnce();
				await step('活性時は状態が変化すること', async () => {
					if (args?.checked) {
						await expect(checkbox).not.toBeChecked(); // Will be false after click
					} else {
						await expect(checkbox).toBeChecked(); // Will be true after click
					}
				});
			}
		});
	}
});

export const Default = createStory({ label: 'Checkbox', checked: false });
export const Checked = createStory({ label: 'Checked', checked: true });
export const Disabled = createStory({ label: 'Disabled', checked: false, disabled: true });
export const DisabledChecked = createStory({ label: 'Disabled Checked', checked: true, disabled: true });

export const MultipleCheckboxes: Story = {
	render: () => ({
		Component: MultipleCheckboxesWrapper,
		props: {
			checked1: false,
			checked2: false,
			checked3: false,
		},
	}),
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		const checkbox1 = await canvas.findByRole('checkbox', { hidden: true, name: 'Option 1' });
		const checkbox2 = await canvas.findByRole('checkbox', { hidden: true, name: 'Option 2' });
		const checkbox3 = await canvas.findByRole('checkbox', { hidden: true, name: 'Option 3' });

		await step('複数のチェックボックスが存在することを確認', async () => {
			await expect(checkbox1).toBeInTheDocument();
			await expect(checkbox2).toBeInTheDocument();
			await expect(checkbox3).toBeInTheDocument();
		});

		await step('Option 1をクリックし、状態が正しく切り替わること', async () => {
			await userEvent.click(checkbox1);
			await expect(checkbox1).toBeChecked();
			await expect(checkbox2).not.toBeChecked();
			await expect(checkbox3).not.toBeChecked();
		});

		await step('Option 2をクリックし、状態が正しく切り替わること', async () => {
			await userEvent.click(checkbox2);
			await expect(checkbox1).toBeChecked();
			await expect(checkbox2).toBeChecked();
			await expect(checkbox3).not.toBeChecked();
		});

		await step('Option 3をクリックし、状態が正しく切り替わること', async () => {
			await userEvent.click(checkbox3);
			await expect(checkbox1).toBeChecked();
			await expect(checkbox2).toBeChecked();
			await expect(checkbox3).toBeChecked();
		});

		await step('Option 1を再度クリックし、チェックが外れること', async () => {
			await userEvent.click(checkbox1);
			await expect(checkbox1).not.toBeChecked();
			await expect(checkbox2).toBeChecked();
			await expect(checkbox3).toBeChecked();
		});
	},
};

export const AllColors: Story = {
	render: () => ({ Component: AllColorsCheckboxWrapper }),
	args: {},
	parameters: {
		docs: {
			source: {
				code: null
			}
		}
	}
};


