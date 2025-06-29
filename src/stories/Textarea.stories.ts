import type { Meta, StoryObj } from '@storybook/svelte';
import Textarea from '../lib/Textarea.svelte';
import { CCLVividColor } from '../lib/const/config';
import { expect, userEvent, within } from '@storybook/test';

const meta = {
	title: 'CommonComponents/Textarea',
	component: Textarea,
	tags: ['autodocs'],
	argTypes: {
		borderColor: {
			control: { type: 'select' },
			options: Object.values(CCLVividColor)
		},
		rows: {
			control: { type: 'number' }
		},
		cols: {
			control: { type: 'number' }
		}
	}
} satisfies Meta<Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		id: 'default-textarea',
		label: 'ご意見・ご要望',
		placeholder: 'こちらにご自由にご記入ください。',
		borderColor: CCLVividColor.STRAWBERRY_PINK,
		rows: 5,
		cols: 30
	},
	play: async ({ canvasElement, args, step }) => {
		const canvas = within(canvasElement);
		const textarea = canvas.getByLabelText('ご意見・ご要望');

		await step('ユーザーがテキストエリアに複数行のテキストを入力できること', async () => {
			await userEvent.type(textarea, `テスト入力です。
複数行のテキストを試します。`);
		});

		await step('テキストエリアの値が正しく更新されること', async () => {
			await expect(textarea).toHaveValue(`テスト入力です。
複数行のテキストを試します。`);
		});
	}
};

export const Disabled: Story = {
	args: {
		id: 'disabled-textarea',
		label: '入力不可',
		placeholder: 'このフィールドは無効です',
		value: '編集できません。\n複数行のテキストです。\n無効化されています。',
		disabled: true,
		borderColor: CCLVividColor.WRAP_GREY,
		rows: 7,
		cols: 40
	}
};

export const NoLabel: Story = {
	args: {
		id: 'no-label-textarea',
		placeholder: 'ラベルなしのテキストエリア',
		borderColor: CCLVividColor.PINEAPPLE_YELLOW,
		rows: 3,
		cols: 25
	}
};

export const SodaBlue: Story = {
	args: {
		id: 'soda-blue-textarea',
		label: 'ソーダブルー',
		placeholder: 'ソーダブルーのテキストエリア',
		borderColor: CCLVividColor.SODA_BLUE,
		rows: 6,
		cols: 35
	}
};

export const MelonGreen: Story = {
	args: {
		id: 'melon-green-textarea',
		label: 'メロングリーン',
		placeholder: 'メロングリーンのテキストエリア',
		borderColor: CCLVividColor.MELON_GREEN,
		rows: 4,
		cols: 28
	}
};

export const GrapePurple: Story = {
	args: {
		id: 'grape-purple-textarea',
		label: 'グレープパープル',
		placeholder: 'グレープパープルのテキストエリア',
		borderColor: CCLVividColor.GRAPE_PURPLE,
		rows: 8,
		cols: 45
	}
};
