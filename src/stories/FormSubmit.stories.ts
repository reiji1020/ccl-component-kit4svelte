import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, userEvent, within } from '@storybook/test';
import FormSubmitWrapper from './FormSubmitWrapper.svelte';

const meta = {
  title: 'CommonComponents/FormSubmit',
  component: FormSubmitWrapper
} satisfies Meta<FormSubmitWrapper>;

export default meta;

export const InternalControls: StoryObj<typeof meta> = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const submissions = canvas.getByRole('status', { name: '送信回数' });

    await step('月移動と日付選択でフォームが送信されないこと', async () => {
      const input = canvas.getByPlaceholderText('日付を選択');
      await userEvent.click(input);
      await userEvent.click(canvas.getByRole('button', { name: '次月へ' }));
      await expect(canvas.getByText('2026年02月')).toBeVisible();
      await userEvent.click(canvas.getByRole('button', { name: '前月へ' }));
      await userEvent.click(canvas.getByRole('button', { name: '15' }));
      await expect(input).toHaveValue('2026/01/15');
      await expect(submissions).toHaveTextContent('0');
    });

    await step('タブ切替やパネルの開閉でフォームが送信されないこと', async () => {
      await userEvent.click(canvas.getByRole('tab', { name: '詳細' }));
      await expect(canvas.getByText('詳細パネル')).toBeVisible();
      const accordion = canvas.getByRole('button', { name: '補足' });
      await userEvent.click(accordion);
      await expect(canvas.getByText('補足パネル')).toBeVisible();
      await userEvent.click(accordion);
      await expect(canvas.queryByText('補足パネル')).not.toBeInTheDocument();
      await userEvent.click(canvas.getByRole('button', { name: '確認を開く' }));
      await userEvent.click(canvas.getByRole('button', { name: 'Close dialog' }));
      await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
      await expect(submissions).toHaveTextContent('0');
    });

    await step('送信ボタンではフォームが送信されること', async () => {
      await userEvent.click(canvas.getByRole('button', { name: '送信' }));
      await expect(submissions).toHaveTextContent('1');
    });
  }
};
