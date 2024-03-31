import type { Meta, StoryObj } from '@storybook/svelte';
import Button from '$lib/Button.svelte';
import { CCLVividColor } from "$lib/const/config";
import { action } from "@storybook/addon-actions";

const meta = {
  title: 'Common/Button',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters:{
    layout: 'fullscreen',
  },
  argTypes: {
    onClick: action('clicked'),
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
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * サービス、サークルのメインカラー
 *
 * 意思決定の場で、「次へ」や「OK」など、肯定の同意を得るときに使用します。
 *
 * Services, main colours of the circle.
 *
 * Used in decision-making situations to obtain agreement of affirmation, e.g. 'Next' or 'OK'.
 */
export const Pink: Story = {
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    label: "Strawberry　Pink"
  }
};

/**
 * 意思決定の場で、ヘルプやユーザーの補助を行う情報を提示するときに使用します。中立カラーです。
 *
 * Used when presenting information to help or assist users in decision-making. Neutral colour.
 */
export const Yellow: Story = {
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW,
    label: "Pineapple Yellow"
  }
};

/**
 * 意思決定の場で、キャンセルや取りやめなどの否定的な意思決定を行うボタンで使用します。
 *
 * Used in decision-making situations with buttons for negative decisions such as cancel or withdraw.
 */
export const Blue: Story = {
  args: {
    bgColor: CCLVividColor.SODA_BLUE,
    label: "Soda Blue"
  }
};

export const Green: Story = {
  args: {
    bgColor: CCLVividColor.MELON_GREEN,
    label: "Melon Green"
  }
};

export const Purple: Story = {
  args: {
    bgColor: CCLVividColor.GRAPE_PURPLE,
    label: "Grape Purple"
  }
};

export const Grey: Story = {
  args: {
    bgColor: CCLVividColor.WRAP_GREY,
    label: "Wrap Grey"
  }
};