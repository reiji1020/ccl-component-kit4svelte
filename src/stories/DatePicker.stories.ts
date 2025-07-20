import type { Meta, StoryObj } from '@storybook/svelte';
import DatePicker from '../lib/DatePicker.svelte';
import { CCLVividColor, CCLPastelColor } from '../lib/const/config';
import { expect, fn, userEvent, within } from '@storybook/test';
import { DateTime } from 'luxon';
import AllColorsDatePickerWrapper from './AllColors/AllColorsDatePickerWrapper.svelte';

const colorOptions = Object.values(CCLVividColor);

const meta = {
	title: 'Form/DatePicker',
	component: DatePicker,
	tags: ['autodocs'],
	argTypes: {
		selectedDate: {
			control: { type: 'date' }
		},
		label: {
			control: { type: 'text' }
		},
		id: {
			control: { type: 'text' }
		},
		placeholder: {
			control: { type: 'text' }
		},
		borderColor: {
			control: { type: 'select' },
			options: Object.values(CCLVividColor)
		},
		disableBlurClose: {
			control: { type: 'boolean' }
		}
	}
} satisfies Meta<DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (args: Story['args']): Story => ({
	args: {
		...args,
		disableBlurClose: true // テスト中はblurで閉じないようにする
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const input = canvas.getByPlaceholderText(args.placeholder || '日付を選択');

		await step('日付ピッカーが開くこと', async () => {
			await userEvent.click(input);
			await expect(canvas.getByText(/\d{4}年\d{2}月/)).toBeInTheDocument(); // 例: 2023年10月
		});

		await step('日付を選択できること', async () => {
			const today = DateTime.local(); // Luxonを使用して現在の日付を取得
			const dayOfMonth = today.day;
			const dayButton = await canvas.findByRole('button', { name: String(dayOfMonth) });
			await userEvent.click(dayButton);
			await expect(input).toHaveValue(today.toFormat('yyyy/MM/dd')); // Luxonのフォーマットに合わせる
		});

		await step('日付ピッカーが閉じること', async () => {
			await expect(canvas.queryByText(/\d{4}年\d{2}月/)).not.toBeInTheDocument();
		});
	}
});

export const Default = createStory({
	placeholder: '日付を選択',
	selectedDate: null,
	borderColor: CCLVividColor.STRAWBERRY_PINK
});

export const WithInitialDate = createStory({
	placeholder: '初期日付',
	selectedDate: new Date('2023-01-15'),
	borderColor: CCLVividColor.PINEAPPLE_YELLOW
});

WithInitialDate.play = async ({ canvasElement, step, args }) => {
	const canvas = within(canvasElement);
	const input = canvas.getByPlaceholderText(args.placeholder || '初期日付');

	await step('初期日付が正しく表示されていること', async () => {
		const expectedDate = DateTime.fromJSDate(args.selectedDate as Date).toFormat('yyyy/MM/dd');
		await expect(input).toHaveValue(expectedDate);
	});
};

export const AllColors: Story = {
	render: () => ({ Component: AllColorsDatePickerWrapper }),
	args: {},
	parameters: {
		docs: {
			source: {
				code: null
			}
		}
	}
};
