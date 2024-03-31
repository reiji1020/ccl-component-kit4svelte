import type { Meta, StoryObj } from '@storybook/svelte';
import Header from '$lib/Header.svelte';
import { CCLVividColor, HeaderHeight } from "$lib/const/config";

const meta = {
  title: 'Common/Header',
  component: Header,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters:{
    layout: 'fullscreen',
  },
  argTypes: {
    bgColor: {
      control: { type: 'select' },
      options: [
        CCLVividColor.STRAWBERRY_PINK,
        CCLVividColor.PINEAPPLE_YELLOW,
        CCLVividColor.SODA_BLUE,
        CCLVividColor.MELON_GREEN,
        CCLVividColor.GRAPE_PURPLE,
        CCLVividColor.WRAP_GREY
      ]
    },
    height: {
      control: { type: 'select' },
      options: [
          HeaderHeight.NALLOW,
          HeaderHeight.NOMAL,
          HeaderHeight.WIDE
      ]
    }
  }
} satisfies Meta<Header>;

export default meta;
type Story = StoryObj<typeof meta>;

// 通常カラー、通常幅
export const Default: Story = {
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    height: HeaderHeight.NOMAL,
  }
};
// 2ndカラー、通常幅
export const SecondColor: Story = {
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW,
    height: HeaderHeight.NOMAL
  }
};
// 3rdカラー、通常幅
export const ThirdColor: Story = {
  args: {
    bgColor: CCLVividColor.SODA_BLUE,
    height: HeaderHeight.NOMAL
  }
};

// 通常カラー、太幅
export const WideHeader: Story = {
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    height: HeaderHeight.WIDE,
  }
};
// 通常カラー、細幅
export const NallowHeader: Story = {
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    height: HeaderHeight.NALLOW,
  }
};

