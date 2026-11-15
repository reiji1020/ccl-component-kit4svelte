import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, userEvent, within } from '@storybook/test';
import PopoverExample from './PopoverExample.svelte';

const meta = {
  title: 'CommonComponents/Popover',
  component: PopoverExample,
  tags: ['autodocs'],
  parameters: {
    docs: { description: { component: 'トリガー近くの非モーダルな補足やミニフォームです。説明のみなら Tooltip、実行するメニュー項目なら DropdownMenu を使用します。開いた直後はパネルまたは data-autofocus を付けた要素にフォーカスし、閉じる際は必要に応じてトリガーに戻します。' } }
  }
} satisfies Meta<PopoverExample>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Form: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const trigger = canvas.getByRole('button', { name: '表示設定' });
    await step('フォームをキーボードで開き、適用後にフォーカスが復帰すること', async () => {
      trigger.focus();
      await userEvent.keyboard('{Enter}');
      const dialog = await canvas.findByRole('dialog');
      await expect(dialog).toHaveFocus();
      await userEvent.selectOptions(within(dialog).getByRole('combobox'), '50');
      await userEvent.click(within(dialog).getByRole('button', { name: '適用' }));
      await expect(canvas.getByText('表示件数: 50')).toBeVisible();
      await expect(trigger).toHaveFocus();
    });
    await step('Escapeと外側クリックで閉じられること', async () => {
      await userEvent.keyboard('{Enter}');
      await userEvent.keyboard('{Escape}');
      await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
      await expect(trigger).toHaveFocus();
      await userEvent.click(trigger);
      await userEvent.click(canvas.getByRole('button', { name: '外側の操作' }));
      await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
    });
  }
};

export const AtViewportEdge: Story = {
  args: { atEdge: true },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('下側の余白が足りない場合に上側へ配置されること', async () => {
      await userEvent.click(canvas.getByRole('button', { name: '表示設定' }));
      await expect(await canvas.findByRole('dialog')).toHaveAttribute('data-placement', 'top');
    });
  }
};
