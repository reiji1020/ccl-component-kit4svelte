import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, userEvent, waitFor, within } from '@storybook/test';
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
    await step('リセットボタンで表示とバインド値とフォーム送信値が初期選択に戻ること', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'リセット' }));
      await expect(input).toHaveValue('デザイン');
      await expect(canvas.getByText('選択値: design')).toBeVisible();
      await userEvent.click(submit);
      await expect(canvas.getByText('送信値: design')).toBeVisible();
    });
    await step('form.reset() で検索中の入力と候補表示も初期状態に戻ること', async () => {
      await userEvent.clear(input);
      await userEvent.type(input, '営業');
      await expect(input).toHaveAttribute('aria-expanded', 'true');
      const form = input.closest('form')!;
      form.reset();
      await waitFor(() => expect(input).toHaveValue('デザイン'));
      await expect(input).toHaveAttribute('aria-expanded', 'false');
      await expect(new FormData(form).get('team')).toBe('design');
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
