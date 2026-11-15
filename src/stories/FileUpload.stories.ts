import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, userEvent, within } from '@storybook/test';
import FileUploadExample from './FileUploadExample.svelte';

const meta = {
  title: 'CommonComponents/FileUpload',
  component: FileUploadExample,
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: '選択と解除の結果を File[] で通知します。送信と認証は利用側が担当し、サーバーでも形式と容量を検証してください。' } }
  }
} satisfies Meta<FileUploadExample>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Single: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('添付ファイル');
    await step('ファイル選択にキーボードで到達し、選択を通知できること', async () => {
      await userEvent.tab();
      await expect(input).toHaveFocus();
      await userEvent.upload(input, new File(['png'], 'report.png', { type: 'image/png' }));
      await expect(canvas.getByText('選択数: 1')).toBeVisible();
    });
  }
};

export const Multiple: Story = {
  args: { multiple: true },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('添付ファイル');
    await step('複数選択し、キーボードで一つずつ解除できること', async () => {
      await userEvent.upload(input, [
        new File(['png'], 'report.png', { type: 'image/png' }),
        new File(['jpg'], 'cover.jpg', { type: 'image/jpeg' })
      ]);
      await expect(canvas.getByText('選択数: 2')).toBeVisible();
      canvas.getByRole('button', { name: 'report.png を解除' }).focus();
      await userEvent.keyboard('{Enter}');
      await expect(canvas.getByText('選択数: 1')).toBeVisible();
      await expect(canvas.getByRole('button', { name: 'cover.jpg を解除' })).toHaveFocus();
    });
    await step('形式と容量が無効なファイルを退け、既存の選択は保持されること', async () => {
      const transfer = new DataTransfer();
      transfer.items.add(new File(['text'], 'invalid.txt', { type: 'text/plain' }));
      transfer.items.add(new File([new Uint8Array(5 * 1024 * 1024 + 1)], 'large.png', { type: 'image/png' }));
      (input as HTMLInputElement).files = transfer.files;
      input.dispatchEvent(new Event('change', { bubbles: true }));
      await expect(await canvas.findByText(/選択できない形式/)).toBeVisible();
      await expect(canvas.getByText(/サイズ上限/)).toBeVisible();
      await expect(canvas.getByText('選択数: 1')).toBeVisible();
    });
  }
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement, step }) => {
    await step('無効状態ではファイルを選択できないこと', async () => {
      await expect(within(canvasElement).getByLabelText('添付ファイル')).toBeDisabled();
    });
  }
};
