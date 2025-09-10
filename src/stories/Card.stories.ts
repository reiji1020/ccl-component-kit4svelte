import type { Meta, StoryObj } from '@storybook/svelte';
import Card from '$lib/Card.svelte';
import { CCLVividColor } from '$lib/const/config';
import { expect, fn, userEvent, within } from '@storybook/test';

const colorOptions = [
  CCLVividColor.STRAWBERRY_PINK,
  CCLVividColor.PINEAPPLE_YELLOW,
  CCLVividColor.SODA_BLUE,
  CCLVividColor.MELON_GREEN,
  CCLVividColor.GRAPE_PURPLE,
  CCLVividColor.WRAP_GREY
];

const meta = {
  title: 'CommonComponents/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    borderColor: {
      control: { type: 'select' },
      options: colorOptions
    },
    altText: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    cardText: { control: { type: 'text' } },
    src: { control: { type: 'text' } }
  }
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (
  borderColor: string,
  altText: string,
  title: string,
  cardText: string
): Story => ({
  args: {
    borderColor,
    src: 'thumbnail.png',
    altText,
    title,
    cardText
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('カードのタイトルが正しく指定されていること', async () => {
      await expect(args.title).toBe(title);
    });
    await step('カードのテキストが正しく指定されていること', async () => {
      await expect(args.cardText).toBe(cardText);
    });
    await step('画像にalt属性が付与されていること', async () => {
      await expect(canvas.getByRole('img')).toHaveAttribute('alt', altText);
    });
    await step('色指定が正しく動作していること', async () => {
      await expect(args.borderColor).toBe(borderColor);
    });
  }
});

export const Default = createStory(
  CCLVividColor.STRAWBERRY_PINK,
  'Strawberry Pink',
  'プライマリカラーのカードです',
  'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
);

export const SecondColor = createStory(
  CCLVividColor.PINEAPPLE_YELLOW,
  'Pineapple Yellow',
  'セカンダリカラーのカードです',
  'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
);

export const ThirdColor = createStory(
  CCLVividColor.SODA_BLUE,
  'Soda Blue',
  '汎用的なお知らせ用のカードです',
  'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
);

export const Writing = createStory(
  CCLVividColor.MELON_GREEN,
  'Melon Green',
  '書籍出版お知らせ用のカードです',
  'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
);

export const Coding = createStory(
  CCLVividColor.GRAPE_PURPLE,
  'Grape Purple',
  'コーディング成果物お知らせ用のカードです',
  'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト'
);
