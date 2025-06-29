import type { Meta, StoryObj } from '@storybook/svelte';
import Input from '../lib/Input.svelte';
import { CCLVividColor } from '../lib/const/config';
import { expect, userEvent, within } from '@storybook/test';

const meta = {
	title: 'CommonComponents/Input',
	component: Input,
	tags: ['autodocs'],
	argTypes: {
		type: {
			control: { type: 'select' },
			options: ['text', 'password', 'email', 'number']
		},
		borderColor: {
			control: { type: 'select' },
			options: Object.values(CCLVividColor)
		}
	}
} satisfies Meta<Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: 'default-input',
		label: 'お名前',
		placeholder: '山田 太郎',
		borderColor: CCLVividColor.STRAWBERRY_PINK
	},
	play: async ({ canvasElement, args, step }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByLabelText('お名前');

		await step('ユーザーが入力フィールドにテキストを入力できること', async () => {
			await userEvent.type(input, 'テスト入力');
		});

		await step('入力フィールドの値が正しく更新されること', async () => {
			await expect(input).toHaveValue('テスト入力');
		});
	}
};

export const Password: Story = {
	args: {
		id: 'password-input',
		label: 'パスワード',
		type: 'password',
		placeholder: 'パスワードを入力',
		borderColor: CCLVividColor.SODA_BLUE
	}
};

export const Disabled: Story = {
	args: {
		id: 'disabled-input',
		label: '入力不可',
		placeholder: 'このフィールドは無効です',
		value: '編集できません',
		disabled: true,
		borderColor: CCLVividColor.WRAP_GREY
	}
};

export const NoLabel: Story = {
	args: {
		id: 'no-label-input',
		placeholder: 'ラベルなしの入力フィールド',
		borderColor: CCLVividColor.PINEAPPLE_YELLOW
	}
};

export const MelonGreen: Story = {
	args: {
		id: 'melon-green-input',
		label: 'メロングリーン',
		placeholder: 'メロングリーンの入力フィールド',
		borderColor: CCLVividColor.MELON_GREEN
	}
};

export const GrapePurple: Story = {
	args: {
		id: 'grape-purple-input',
		label: 'グレープパープル',
		placeholder: 'グレープパープルの入力フィールド',
		borderColor: CCLVividColor.GRAPE_PURPLE
	}
};
