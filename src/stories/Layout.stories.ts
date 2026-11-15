import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, within } from '@storybook/test';
import LayoutExample from './LayoutExample.svelte';

const meta = {
  title: 'CommonComponents/Layout',
  component: LayoutExample,
  tags: ['autodocs']
} satisfies Meta<LayoutExample>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Narrow: Story = {
  args: { width: '220px' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('狭い画面では操作が折り返し、資料が縦に並ぶこと', async () => {
      const first = canvas.getByText('資料 1').getBoundingClientRect();
      const second = canvas.getByText('資料 2').getBoundingClientRect();
      await expect(first.left).toBe(second.left);
      await expect(second.top).toBeGreaterThan(first.top);
      const buttons = canvas.getAllByRole('button');
      await expect(buttons[2].getBoundingClientRect().top)
        .toBeGreaterThan(buttons[0].getBoundingClientRect().top);
    });
  }
};

export const Wide: Story = {
  args: { width: '740px' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('広い画面では本文が中央寄せされ、資料が横に並ぶこと', async () => {
      const first = canvas.getByText('資料 1').getBoundingClientRect();
      const second = canvas.getByText('資料 2').getBoundingClientRect();
      const third = canvas.getByText('資料 3').getBoundingClientRect();
      const region = canvas.getByRole('region').getBoundingClientRect();
      await expect(first.top).toBe(second.top);
      await expect(second.left).toBeGreaterThan(first.left);
      await expect(first.left - region.left).toBeCloseTo(region.right - third.right, 0);
    });
  }
};
