import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, userEvent, within } from '@storybook/test';
import InputSelectLabelsWrapper from './InputSelectLabelsWrapper.svelte';

const meta = {
  title: 'CommonComponents/InputSelectLabels',
  component: InputSelectLabelsWrapper
} satisfies Meta<InputSelectLabelsWrapper>;

export default meta;

export const MultipleFields: StoryObj<typeof meta> = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const email = canvas.getByRole('textbox', { name: 'メール' });

    await step('複数のラベルがそれぞれの入力欄を参照すること', async () => {
      const name = canvas.getByRole('textbox', { name: '名前' });
      const prefecture = canvas.getByRole('combobox', { name: '都道府県' });
      const city = canvas.getByRole('combobox', { name: '市区町村' });
      for (const field of [name, email, prefecture, city]) {
        await expect(field.id).not.toBe('');
      }
      await expect(name.id).not.toBe(email.id);
      await expect(prefecture.id).not.toBe(city.id);
      await userEvent.click(canvas.getByText('メール'));
      await expect(email).toHaveFocus();
      await userEvent.click(canvas.getByText('市区町村'));
      await expect(city).toHaveFocus();
      await expect(canvas.getByLabelText('明示IDの入力')).toHaveAttribute('id', 'explicit-input');
      await expect(canvas.getByLabelText('明示IDの選択')).toHaveAttribute('id', 'explicit-select');
    });

    await step('入力エラーが表示中だけ説明として関連付けられること', async () => {
      const toggle = canvas.getByRole('button', { name: '入力状態を切り替える' });
      await expect(email).toHaveAttribute('aria-invalid', 'false');
      await expect(email).not.toHaveAttribute('aria-describedby');
      await userEvent.click(toggle);
      await expect(email).toHaveAttribute('aria-invalid', 'true');
      await expect(email).toHaveAccessibleDescription('メールを確認してください');
      await userEvent.click(toggle);
      await expect(email).toHaveAttribute('aria-invalid', 'false');
      await expect(email).not.toHaveAttribute('aria-describedby');
      await expect(canvas.queryByText('メールを確認してください')).not.toBeInTheDocument();
    });
  }
};
