import type { Meta, StoryObj } from '@storybook/svelte';
import Select from '../lib/Select.svelte';
import { CCLVividColor } from '../lib/const/config';
import { expect, userEvent, within } from '@storybook/test';

const defaultOptions = [
	{ value: 'option1', label: 'オプション 1' },
	{ value: 'option2', label: 'オプション 2' },
	{ value: 'option3', label: 'オプション 3' }
];

const meta = {
	title: 'Form/Select',
	component: Select,
	tags: ['autodocs'],
	argTypes: {
		borderColor: {
			control: { type: 'select' },
			options: Object.values(CCLVividColor)
		},
		options: {
			control: { type: 'object' }
		}
	}
} satisfies Meta<Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: 'default-select',
		label: '選択してください',
		options: defaultOptions,
		value: 'option1',
		borderColor: CCLVividColor.STRAWBERRY_PINK
	},
	play: async ({ canvasElement, args, step }) => {
		const canvas = within(canvasElement);
		const select = canvas.getByLabelText('選択してください');

		await step('ユーザーがドロップダウンからオプションを選択できること', async () => {
			await userEvent.selectOptions(select, 'option2');
		});

		await step('選択された値が正しく更新されること', async () => {
			await expect(select).toHaveValue('option2');
		});
	}
};

export const Disabled: Story = {
	args: {
		id: 'disabled-select',
		label: '選択不可',
		options: defaultOptions,
		value: 'option2',
		disabled: true,
		borderColor: CCLVividColor.WRAP_GREY
	}
};

export const NoLabel: Story = {
	args: {
		id: 'no-label-select',
		options: defaultOptions,
		value: 'option3',
		borderColor: CCLVividColor.PINEAPPLE_YELLOW
	}
};

export const SodaBlue: Story = {
	args: {
		id: 'soda-blue-select',
		label: 'ソーダブルー',
		options: defaultOptions,
		value: 'option1',
		borderColor: CCLVividColor.SODA_BLUE
	}
};

export const MelonGreen: Story = {
	args: {
		id: 'melon-green-select',
		label: 'メロングリーン',
		options: defaultOptions,
		value: 'option2',
		borderColor: CCLVividColor.MELON_GREEN
	}
};

export const GrapePurple: Story = {
	args: {
		id: 'grape-purple-select',
		label: 'グレープパープル',
		options: defaultOptions,
		value: 'option3',
		borderColor: CCLVividColor.GRAPE_PURPLE
	}
};
