import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, userEvent, within } from '@storybook/test';
import IconButtonExample from './IconButtonExample.svelte';

const meta = {
  title: 'CommonComponents/IconButton',
  component: IconButtonExample,
  tags: ['autodocs']
} satisfies Meta<IconButtonExample>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('名前で識別でき、キーボードで実行されること', async () => {
      const button = canvas.getByRole('button', { name: '編集' });
      await userEvent.tab();
      await expect(button).toHaveFocus();
      await userEvent.keyboard('{Enter} ');
      await expect(canvas.getByText('2回実行')).toBeVisible();
    });
  }
};

export const Disabled: Story = {
  args: { disabled: true },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('無効状態ではフォーカスも実行もできないこと', async () => {
      const button = canvas.getByRole('button', { name: '編集' });
      await expect(button).toBeDisabled();
      await userEvent.tab();
      await expect(button).not.toHaveFocus();
      await userEvent.click(button);
      await expect(canvas.getByText('0回実行')).toBeVisible();
    });
  }
};
