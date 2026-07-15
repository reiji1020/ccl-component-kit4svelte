import type { Meta, StoryObj } from '@storybook/svelte';
import Carousel from '$lib/Carousel.svelte';
import { expect, userEvent, within } from '@storybook/test';

const meta = {
  title: 'CommonComponents/Carousel',
  component: Carousel,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    src: { control: { type: 'text' } },
    csWidth: { control: { type: 'text' } }
  }
} satisfies Meta<Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (src: { src: string; alt: string }[], csWidth: string): Story => ({
  args: {
    src,
    csWidth
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const previousButton = canvas.getByRole('button', { name: '前のスライドへ' });
    const nextButton = canvas.getByRole('button', { name: '次のスライドへ' });
    const firstSlide = canvas.getByAltText('カルーセル画像 1');
    const secondSlide = canvas.getByAltText('カルーセル画像 2');

    await step('前後ボタンをアクセシブルな名前で取得できること', async () => {
      await expect(previousButton).toBeInTheDocument();
      await expect(nextButton).toBeInTheDocument();
    });

    await step('初期状態では最初のスライドが表示対象であること', async () => {
      await expect(firstSlide).toHaveAttribute('aria-hidden', 'false');
      await expect(secondSlide).toHaveAttribute('aria-hidden', 'true');
    });

    await step('次へ操作で次のスライドへ移動すること', async () => {
      await userEvent.click(nextButton);
      await expect(firstSlide).toHaveAttribute('aria-hidden', 'true');
      await expect(secondSlide).toHaveAttribute('aria-hidden', 'false');
    });

    await step('前へ操作で最初のスライドへ戻ること', async () => {
      await userEvent.click(previousButton);
      await expect(firstSlide).toHaveAttribute('aria-hidden', 'false');
      await expect(secondSlide).toHaveAttribute('aria-hidden', 'true');
    });
  }
});

const imageSources = [
  { src: 'frame1.png', alt: 'カルーセル画像 1' },
  { src: 'frame2.png', alt: 'カルーセル画像 2' },
  { src: 'frame3.png', alt: 'カルーセル画像 3' }
];

export const Default = createStory(imageSources, '680px');
