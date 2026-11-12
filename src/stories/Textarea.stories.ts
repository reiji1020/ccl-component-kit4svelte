import type { Meta, StoryObj } from '@storybook/svelte';
import Textarea from '../lib/Textarea.svelte';
import { CCLVividColor } from '../lib/const/config';
import { expect, userEvent, within } from '@storybook/test';
import AllColorsTextareaWrapper from './AllColors/AllColorsTextareaWrapper.svelte';
import TextareaMultipleWrapper from './TextareaMultipleWrapper.svelte';

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
      await userEvent.type(
        textarea,
        `テスト入力です。
複数行のテキストを試します。`
      );
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
    value: '編集できません.\n複数行のテキストです.\n無効化されています.',
    disabled: true,
    borderColor: CCLVividColor.WRAP_GREY,
    rows: 7,
    cols: 40
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByLabelText('入力不可');
    const initialValue = '編集できません.\n複数行のテキストです.\n無効化されています.';

    await step('テキストエリアが無効であること', async () => {
      await expect(textarea).toBeDisabled();
      await expect(textarea).toHaveValue(initialValue);
    });

    await step('無効なテキストエリアは操作後も値が変わらないこと', async () => {
      await userEvent.type(textarea, '変更後の値');
      await expect(textarea).toHaveValue(initialValue);
    });
  }
};

export const NoLabel: Story = {
  args: {
    id: 'no-label-textarea',
    placeholder: 'ラベルなしのテキストエリア',
    borderColor: CCLVividColor.PINEAPPLE_YELLOW,
    rows: 3,
    cols: 25
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox');

    await step('ラベルがなくてもplaceholderでテキストエリアを識別できること', async () => {
      await expect(textarea).toHaveAttribute('placeholder', 'ラベルなしのテキストエリア');
    });

    await step('ラベルがないテキストエリアへ入力できること', async () => {
      await userEvent.type(textarea, 'ラベルなし入力');
      await expect(textarea).toHaveValue('ラベルなし入力');
    });
  }
};

export const Multiple: Story = {
  render: () => ({ Component: TextareaMultipleWrapper }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const first = canvas.getByRole('textbox', { name: 'First note' });
    const second = canvas.getByRole('textbox', { name: 'Second note' });

    await step('ID省略時もラベルがそれぞれの入力欄に対応すること', async () => {
      await expect(first).toHaveValue('first');
      await expect(second).toHaveValue('second');
      await userEvent.click(canvas.getByText('Second note'));
      await expect(second).toHaveFocus();
      await userEvent.type(second, ' edited');
      await expect(first).toHaveValue('first');
      await expect(canvas.getByRole('status', { name: 'Second note value' })).toHaveTextContent(
        'second edited'
      );
    });

    await step('明示IDを指定したラベルが対応する入力欄にフォーカスすること', async () => {
      const explicit = canvas.getByRole('textbox', { name: 'Explicit note' });
      await expect(explicit).toHaveAttribute('id', 'explicit-note');
      await userEvent.click(canvas.getByText('Explicit note'));
      await expect(explicit).toHaveFocus();
    });
  }
};

export const AllColors: Story = {
  render: () => ({ Component: AllColorsTextareaWrapper }),
  args: {},
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
};
