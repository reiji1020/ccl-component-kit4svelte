import type { Meta, StoryObj } from '@storybook/svelte';
import Card from "$lib/Card.svelte";
import { CCLVividColor } from "$lib/const/config";
import {CCLPastelColor} from "../../.svelte-kit/__package__/const/config";

const meta = {
  title: 'Common/Card',
  component: Card,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters:{
    layout: 'fullscreen',
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

