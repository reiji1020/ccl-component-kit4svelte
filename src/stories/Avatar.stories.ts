import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, waitFor, within } from '@storybook/test';
import type { ComponentProps } from 'svelte';
import Avatar from '$lib/Avatar.svelte';
import exampleImage from './assets/ccl_pink.png';

const meta = {
  title: 'CommonComponents/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: { name: 'Aoi Mori' }
} satisfies Meta<ComponentProps<typeof Avatar>>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: { src: exampleImage, alt: '森さんのプロフィール画像' },
  play: async ({ canvasElement, step }) => {
    await step('画像が読み込まれ、代替テキストで識別できること', async () => {
      const avatar = within(canvasElement).getByRole('img', { name: '森さんのプロフィール画像' });
      await waitFor(() => expect(avatar.querySelector('img')?.naturalWidth).toBeGreaterThan(0));
    });
  }
};

export const WithoutImage: Story = {
  play: async ({ canvasElement, step }) => {
    await step('画像未設定時にイニシャルが表示されていること', async () => {
      await expect(within(canvasElement).getByText('AM')).toBeVisible();
      await expect(within(canvasElement).getByRole('img', { name: 'Aoi Mori' })).toBeVisible();
    });
  }
};

export const BrokenImage: Story = {
  args: { src: 'data:image/png,invalid', decorative: true },
  play: async ({ canvasElement, step }) => {
    await step('読み込みに失敗した画像が隠れ、装飾用のイニシャルが表示されていること', async () => {
      const canvas = within(canvasElement);
      await waitFor(() => expect(canvasElement.querySelector('img')).not.toBeVisible());
      await expect(canvas.getByText('AM')).toBeVisible();
      await expect(canvas.queryByRole('img')).not.toBeInTheDocument();
    });
  }
};
