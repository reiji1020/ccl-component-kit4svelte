import type { Meta, StoryObj } from '@storybook/svelte';
import Thumbnail from '$lib/Thumbnail.svelte';
import { CCLVividColor, CCLPastelColor } from '$lib/const/config';
import { expect, within } from '@storybook/test';
import AllColorsThumbnailWrapper from './AllColors/AllColorsThumbnailWrapper.svelte';

const colorOptions = [
  CCLVividColor.STRAWBERRY_PINK,
  CCLVividColor.PINEAPPLE_YELLOW,
  CCLVividColor.SODA_BLUE,
  CCLVividColor.MELON_GREEN,
  CCLVividColor.GRAPE_PURPLE,
  CCLVividColor.WRAP_GREY
];

const meta = {
  title: 'CommonComponents/Thumbnail',
  component: Thumbnail,
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
    imageSize: { control: { type: 'text' } },
    src: { control: { type: 'text' } }
  }
} satisfies Meta<Thumbnail>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (
  borderColor: string,
  altText: string,
  imageSize: string,
  src: string
): Story => ({
  args: {
    borderColor,
    altText,
    imageSize,
    src
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('画像にalt属性が存在し、データが設定されていていること', async () => {
      await expect(canvas.getByRole('img')).toHaveAttribute('alt', altText);
    });
    await step('ふちどり用として指定した色が正しいこと', async () => {
      await expect(args.borderColor).toBe(borderColor);
    });
  }
});

export const Default = createStory(
  CCLVividColor.STRAWBERRY_PINK,
  'Strawberry Pink',
  '120px',
  'thumbnail.png'
);

export const AllColors: Story = {
  render: () => ({ Component: AllColorsThumbnailWrapper }),
  args: {},
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
};
