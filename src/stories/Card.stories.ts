import type { Meta, StoryObj } from '@storybook/svelte';
import Card from "$lib/Card.svelte";
import { CCLVividColor } from "$lib/const/config";
import { CCLPastelColor } from "$lib/const/config";

const meta = {
  title: 'Common/Card',
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters:{
    layout: 'fullscreen',
  },
  argTypes: {
    borderColor: {
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
    bgColor: {
      control: { type: 'select' },
      options: [
        CCLPastelColor.PEACH_PINK,
        CCLPastelColor.LEMON_YELLOW,
        CCLPastelColor.SUGAR_BLUE,
        CCLPastelColor.MATCHA_GREEN,
        CCLPastelColor.AKEBI_PURPLE,
        CCLPastelColor.CLOUD_GREY
      ]
    },
    altText: { control: { type: 'text'} },
    title: { control: { type: 'text'} },
    cardText: { control: { type: 'text'} },
    src: { control: { type: 'text'} }
  }
} satisfies Meta<Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// 通常カラー
export const Default: Story = {
  args: {
    borderColor: CCLVividColor.STRAWBERRY_PINK,
    bgColor: CCLPastelColor.PEACH_PINK,
    src: "thumbnail.png",
    altText: "Strawberry Pink",
    title: "プライマリカラーのカードです",
    cardText: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  }
};
// 2ndカラー
export const SecondColor: Story = {
  args: {
    borderColor: CCLVividColor.PINEAPPLE_YELLOW,
    bgColor: CCLPastelColor.LEMON_YELLOW,
    src: "thumbnail.png",
    altText: "Pineapple Yellow",
    title: "セカンダリカラーのカードです",
    cardText: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  }
};
// 3rdカラー
export const ThirdColor: Story = {
  args: {
    borderColor: CCLVividColor.SODA_BLUE,
    bgColor: CCLPastelColor.SUGAR_BLUE,
    src: "thumbnail.png",
    altText: "Soda Blue",
    title: "その他のプライマリカラーのカードです",
    cardText: "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト"
  }
};

