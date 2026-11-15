import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, userEvent, within } from '@storybook/test';
import DropdownMenuExample from './DropdownMenuExample.svelte';

const meta = {
  title: 'CommonComponents/DropdownMenu',
  component: DropdownMenuExample,
  tags: ['autodocs']
} satisfies Meta<DropdownMenuExample>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', { name: 'アクション' });
    await step('キーボードで開き、矢印キーでリンクへ移動して選択できること', async () => {
      trigger.focus();
      await userEvent.keyboard('{ArrowDown}');
      await expect(canvas.getByRole('menuitem', { name: '名前を変更' })).toHaveFocus();
      await expect(canvas.getByRole('separator')).toBeVisible();
      await userEvent.keyboard('{ArrowDown}');
      const link = canvas.getByRole('menuitem', { name: '詳細を表示' });
      await expect(link).toHaveFocus();
      await expect(link).toHaveAttribute('href', '#dropdown-details');
      await userEvent.keyboard(' ');
      await expect(canvas.getByText('選択: details')).toBeVisible();
      await expect(trigger).toHaveFocus();
    });
    await step('無効項目は実行できず、Escapeまたは外側クリックで閉じられること', async () => {
      await userEvent.keyboard('{ArrowUp}');
      const item = canvas.getByRole('menuitem', { name: '削除（権限なし）' });
      await expect(item).toHaveFocus();
      await expect(item).toHaveAttribute('aria-disabled', 'true');
      await userEvent.keyboard('{Enter}');
      await expect(canvas.getByRole('menu')).toBeVisible();
      await userEvent.keyboard('{Escape}');
      await expect(trigger).toHaveFocus();
      await userEvent.keyboard('{Enter}');
      await userEvent.click(canvas.getByRole('button', { name: '外側の操作' }));
      await expect(canvas.queryByRole('menu')).not.toBeInTheDocument();
    });
  }
};
