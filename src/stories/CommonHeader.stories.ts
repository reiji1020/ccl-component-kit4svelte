import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, within } from '@storybook/test';
import CommonHeader from '$lib/CommonHeader.svelte';
import { CCLVividColor, CCLPastelColor, HeaderHeight } from '$lib/const/config';
import AllColorsCommonHeaderWrapper from './AllColors/AllColorsCommonHeaderWrapper.svelte';

const colorOptions = [
  CCLVividColor.STRAWBERRY_PINK,
  CCLVividColor.PINEAPPLE_YELLOW,
  CCLVividColor.SODA_BLUE,
  CCLVividColor.MELON_GREEN,
  CCLVividColor.GRAPE_PURPLE,
  CCLVividColor.WRAP_GREY
];

const heightOptions = [HeaderHeight.NALLOW, HeaderHeight.NORMAL, HeaderHeight.WIDE];

const meta = {
  title: 'CommonComponents/CommonHeader',
  component: CommonHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    bgColor: {
      control: { type: 'select' },
      options: colorOptions
    },
    height: {
      control: { type: 'select' },
      options: heightOptions
    },
    logo: { control: { type: 'text' } },
    logoHeight: { control: { type: 'text' } },
    href: { control: { type: 'text' }, description: 'ロゴのリンク先（必須）' }
  }
} satisfies Meta<CommonHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (
  bgColor: string,
  height: string,
  logo: string,
  logoHeight: string,
  href: string
): Story => ({
  args: {
    bgColor,
    height,
    logo,
    logoHeight,
    href
  },
  play: async ({ args, step, canvasElement }) => {
    const canvas = within(canvasElement);
    await step('背景色にセットした色が渡されていること', async () => {
      await expect(args.bgColor).toBe(bgColor);
    });
    await step('Headerの高さがセットした大きさになっていること', async () => {
      await expect(args.height).toBe(height);
    });
    await step('Headerに指定したsvg画像が埋め込まれていること', async () => {
      await expect(canvas.getByRole('img')).toHaveAttribute('src', logo);
    });
    await step('Headerに指定したsvg画像のheightが正しく指定されていること', async () => {
      await expect(args.logoHeight).toBe(logoHeight);
    });
    await step('aタグにリンクが設定されていること', async () => {
      await expect(canvas.getByRole('link')).toHaveAttribute('href', href);
    });
  }
});

export const WideHeader = createStory(
  CCLVividColor.STRAWBERRY_PINK,
  HeaderHeight.WIDE,
  'beace.svg',
  '50px',
  'https://www.google.com/'
);
export const NallowHeader = createStory(
  CCLVividColor.STRAWBERRY_PINK,
  HeaderHeight.NALLOW,
  'beace.svg',
  '30px',
  'https://www.google.com/'
);

export const AllColors: Story = {
  render: () => ({ Component: AllColorsCommonHeaderWrapper }),
  args: {},
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
};
