import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, userEvent, within } from '@storybook/test';
import ComboboxExample from './ComboboxExample.svelte';

const meta = {
  title: 'CommonComponents/Combobox',
  component: ComboboxExample,
  tags: ['autodocs']
} satisfies Meta<ComboboxExample>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('combobox', { name: '担当チーム' });
    const submit = canvas.getByRole('button', { name: '送信' });
    await step('初期選択が表示され、検索文字列に該当する候補だけが表示されること', async () => {
      await expect(input).toHaveValue('デザイン');
      await userEvent.clear(input);
      await userEvent.type(input, 'デ');
      await expect(canvas.getAllByRole('option')).toHaveLength(2);
    });
    await step('候補をキーボードで選び、対応する値がフォームで送信されること', async () => {
      await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
      await expect(input).toHaveValue('データ分析');
      await userEvent.click(submit);
      await expect(canvas.getByText('送信値: data')).toBeVisible();
    });
    await step('検索結果なしを表示し、Escapeで選択済みの表示に戻ること', async () => {
      await userEvent.clear(input);
      await userEvent.type(input, '営業');
      await expect(canvas.getByText('該当する項目がありません')).toBeVisible();
      await userEvent.keyboard('{Escape}');
      await expect(input).toHaveAttribute('aria-expanded', 'false');
      await expect(input).toHaveValue('データ分析');
    });
  }
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement, step }) => {
    await step('無効状態では候補の入力ができないこと', async () => {
      await expect(within(canvasElement).getByRole('combobox')).toBeDisabled();
    });
  }
};
