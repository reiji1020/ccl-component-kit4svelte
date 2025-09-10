import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, within } from '@storybook/test';
import Skeleton from '$lib/Skeleton.svelte';

const meta = {
  title: 'CommonComponents/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    variant: { control: { type: 'radio' }, options: ['text', 'rect', 'circle'] },
    width: { control: 'text' },
    height: { control: 'text' },
    radius: { control: 'text' },
    lines: { control: { type: 'number', min: 1, max: 10, step: 1 } }
  }
} satisfies Meta<Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const TextLines: Story = {
  args: { variant: 'text', lines: 3, width: '360px', height: '14px' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('スケルトンが表示されていること', async () => {
      const el = canvas.getByRole('presentation', { hidden: true });
      await expect(el).toBeInTheDocument();
    });
    await step('指定行数のラインが描画されていること', async () => {
      const el = canvas.getByRole('presentation', { hidden: true });
      const lines = el.querySelectorAll('.line');
      await expect(lines.length).toBe(3);
    });
  }
};

export const Rectangle: Story = {
  args: { variant: 'rect', width: '240px', height: '120px', radius: '8px' },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    await step('スケルトンが表示されていること', async () => {
      const el = canvas.getByRole('presentation', { hidden: true });
      await expect(el).toBeInTheDocument();
    });
    await step('指定のサイズが適用されていること', async () => {
      const el = canvas.getByRole('presentation', { hidden: true }) as HTMLElement;
      await expect(el.style.width).toBe(args.width);
      await expect(el.style.height).toBe(args.height);
    });
  }
};

export const Circle: Story = {
  args: { variant: 'circle', width: '64px', height: '64px' },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    await step('スケルトンが表示されていること', async () => {
      const el = canvas.getByRole('presentation', { hidden: true });
      await expect(el).toBeInTheDocument();
    });
    await step('指定のサイズが適用されていること', async () => {
      const el = canvas.getByRole('presentation', { hidden: true }) as HTMLElement;
      await expect(el.style.width).toBe(args.width);
      await expect(el.style.height).toBe(args.height);
    });
  }
};
