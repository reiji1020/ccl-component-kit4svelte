import type { Meta, StoryObj } from '@storybook/svelte';
import Footer from '$lib/Footer.svelte';
import { CCLVividColor } from "$lib/const/config";

const meta = {
  title: 'Common/Footer',
  component: Footer,
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
    }
  }
} satisfies Meta<Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

// 通常カラー、通常幅
export const Default: Story = {
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
  }
};
// 2ndカラー、通常幅
export const SecondColor: Story = {
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW,
  }
};
// 3rdカラー、通常幅
export const ThirdColor: Story = {
  args: {
    bgColor: CCLVividColor.SODA_BLUE,
  }
};
