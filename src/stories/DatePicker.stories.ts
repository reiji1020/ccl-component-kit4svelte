import type { Meta, StoryObj } from '@storybook/svelte';
import DatePicker from '../lib/DatePicker.svelte';
import { CCLVividColor } from '../lib/const/config';
import { expect, userEvent, within } from '@storybook/test';
import AllColorsDatePickerWrapper from './AllColors/AllColorsDatePickerWrapper.svelte';

const meta = {
  title: 'Form/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    selectedDate: {
      control: { type: 'date' }
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
    }
  }
} satisfies Meta<DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (args: NonNullable<Story['args']>): Story => ({
  args,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(args.placeholder || '日付を選択');

    await step('初期状態では日付が未選択であること', async () => {
      await expect(input).toHaveValue('');
    });

    await step('日付ピッカーが開くこと', async () => {
      await userEvent.click(input);
      await expect(canvas.getByRole('button', { name: '前月へ' })).toBeInTheDocument();
      await expect(canvas.getByRole('button', { name: '次月へ' })).toBeInTheDocument();
    });
  }
});

export const Default = createStory({
  placeholder: '日付を選択',
  selectedDate: null,
  borderColor: CCLVividColor.STRAWBERRY_PINK
});

export const WithInitialDate: Story = {
  args: {
    placeholder: '初期日付',
    selectedDate: new Date(2023, 0, 15),
    borderColor: CCLVividColor.PINEAPPLE_YELLOW
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('初期日付');

    await step('固定した初期日付が正しく表示されていること', async () => {
      await expect(input).toHaveValue('2023/01/15');
    });

    await step('固定した年月のカレンダーが開くこと', async () => {
      await userEvent.click(input);
      await expect(canvas.getByText('2023年01月')).toBeInTheDocument();
    });

    await step('前月と翌月へ移動できること', async () => {
      await userEvent.click(canvas.getByRole('button', { name: '次月へ' }));
      await expect(canvas.getByText('2023年02月')).toBeInTheDocument();

      await userEvent.click(canvas.getByRole('button', { name: '前月へ' }));
      await expect(canvas.getByText('2023年01月')).toBeInTheDocument();
    });

    await step('固定した日付を選択すると入力値に反映されること', async () => {
      await userEvent.click(canvas.getByRole('button', { name: '20' }));
      await expect(input).toHaveValue('2023/01/20');
    });

    await step('日付選択後にカレンダーが閉じること', async () => {
      await expect(canvas.queryByText('2023年01月')).not.toBeInTheDocument();
    });
  }
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
