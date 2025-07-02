import type { Meta, StoryObj } from '@storybook/svelte';
import RadioButton from '../lib/RadioButton.svelte';
import { CCLVividColor, CCLPastelColor } from '../lib/const/config';
import { expect, fn, userEvent, within } from '@storybook/test';
import MultipleRadioButtonsWrapper from './MultipleRadioButtonsWrapper.svelte';
import AllColorsRadioButtonWrapper from './AllColors/AllColorsRadioButtonWrapper.svelte';

const meta = {
	title: 'Form/RadioButton',
	component: RadioButton,
	tags: ['autodocs'],
	argTypes: {
		label: {
			control: { type: 'text' }
		},
		color: {
			control: { type: 'select' },
			options: Object.values(CCLVividColor)
		},
		disabled: {
			control: { type: 'boolean' }
		}
	}
} satisfies Meta<RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (initialArgs: Story['args']): Story => ({
	args: {
		...initialArgs
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		const radio = canvas.getByRole('radio', { hidden: true });

		await step('初期状態が正しいこと', async () => {
			if (args?.group === args?.value) {
				await expect(radio).toBeChecked();
			} else {
				await expect(radio).not.toBeChecked();
			}
		});

		await step('クリック操作が正しく行われること', async () => {
			await userEvent.click(radio);
			if (args?.disabled) {
				await expect(radio).toBeChecked(); // Disabled radio should not change state
			} else {
				await expect(radio).toBeChecked();
			}
		});
	}
});

export const Default = createStory({
	label: 'Option 1',
	value: 'option1',
	group: 'option1'
});

export const Disabled = createStory({
	label: 'Disabled',
	value: 'disabled',
	group: 'none',
	disabled: true
});

export const DisabledChecked = createStory({
	label: 'Disabled Checked',
	value: 'disabledChecked',
	group: 'disabledChecked',
	disabled: true
});

export const MultipleRadioButtons: Story = {
	render: () => ({
		Component: MultipleRadioButtonsWrapper,
		props: {
			selectedValue: 'option1'
		}
	}),
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		const radio1 = canvas.getByRole('radio', { name: 'Option 1' });
		const radio2 = canvas.getByRole('radio', { name: 'Option 2' });
		const radio3 = canvas.getByRole('radio', { name: 'Option 3' });

		await step('初期状態でOption 1が選択されていること', async () => {
			await expect(radio1).toBeChecked();
			await expect(radio2).not.toBeChecked();
			await expect(radio3).not.toBeChecked();
		});

		await step('Option 2をクリックし、選択が切り替わること', async () => {
			await userEvent.click(radio2);
			await expect(radio1).not.toBeChecked();
			await expect(radio2).toBeChecked();
			await expect(radio3).not.toBeChecked();
		});

		await step('Option 3をクリックし、選択が切り替わること', async () => {
			await userEvent.click(radio3);
			await expect(radio1).not.toBeChecked();
			await expect(radio2).not.toBeChecked();
			await expect(radio3).toBeChecked();
		});

		await step('再度Option 1をクリックし、選択が切り替わること', async () => {
			await userEvent.click(radio1);
			await expect(radio1).toBeChecked();
			await expect(radio2).not.toBeChecked();
			await expect(radio3).not.toBeChecked();
		});
	}
};

export const AllColors: Story = {
	render: () => ({ Component: AllColorsRadioButtonWrapper }),
	args: {},
	parameters: {
		docs: {
			source: {
				code: null
			}
		}
	}
};
