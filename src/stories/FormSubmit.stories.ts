import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, userEvent, within } from '@storybook/test';
import FormSubmitWrapper from './FormSubmitWrapper.svelte';
import FormAttributesWrapper from './FormAttributesWrapper.svelte';

const meta = {
  title: 'CommonComponents/FormSubmit',
  component: FormSubmitWrapper
} satisfies Meta<FormSubmitWrapper>;

export default meta;

export const NativeAttributes: StoryObj<typeof meta> = {
  render: () => ({ Component: FormAttributesWrapper }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const email = canvas.getByRole('textbox', { name: 'メール' });
    const plan = canvas.getByRole('combobox', { name: 'プラン' });
    const submitted = canvas.getByRole('status', { name: '送信内容' });
    const submit = canvas.getByRole('button', { name: '送信' });

    await step('必須の入力または選択が空の場合は送信されないこと', async () => {
      await expect(email).toBeRequired();
      await expect(plan).toBeRequired();
      await expect(email).toHaveAttribute('autocomplete', 'email');
      await userEvent.click(submit);
      await expect(email).toHaveFocus();
      await userEvent.type(email, 'member@example.com');
      await userEvent.click(submit);
      await expect(plan).toHaveFocus();
      await expect(submitted.textContent).toBe('');
    });

    await step('入力値をバインドし名前付きの有効な欄だけを送信すること', async () => {
      await userEvent.selectOptions(plan, 'basic');
      await expect(canvas.getByRole('status', { name: 'バインド値' })).toHaveTextContent(
        'member@example.com/basic'
      );
      const quantity = canvas.getByRole('spinbutton', { name: '数量' });
      await expect(quantity).toHaveAttribute('min', '1');
      await expect(quantity).toHaveAttribute('max', '9');
      await expect(quantity).toHaveAttribute('step', '1');
      await expect(canvas.getByRole('textbox', { name: '参照番号' })).toHaveAttribute('readonly');
      await userEvent.click(canvas.getByRole('button', { name: '操作' }));
      await expect(submitted.textContent).toBe('');
      await userEvent.click(submit);
      await expect(JSON.parse(submitted.textContent ?? '')).toEqual({
        email: 'member@example.com',
        plan: 'basic',
        quantity: '2',
        reference: 'CCL'
      });
    });

    await step('type省略時の送信と明示的なリセットが機能すること', async () => {
      await userEvent.clear(email);
      await userEvent.type(email, 'other@example.com');
      await userEvent.click(canvas.getByRole('button', { name: '既定の送信' }));
      await expect(submitted).toHaveTextContent('other@example.com');
      await userEvent.click(canvas.getByRole('button', { name: 'リセット' }));
      await expect(canvas.getByRole('status', { name: 'リセット回数' })).toHaveTextContent('1');
    });
  }
};

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
