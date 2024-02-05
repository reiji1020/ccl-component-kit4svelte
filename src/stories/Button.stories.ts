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
    onClick: action('clicked')
  }
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// プライマリカラー
export const Pink: Story = {
  args: {
    bgColor: CCLVividColor.STRAWBERRY_PINK,
    label: "Strawberry　Pink"
  }
};

export const Yellow: Story = {
  args: {
    bgColor: CCLVividColor.PINEAPPLE_YELLOW,
    label: "Pineapple Yellow"
  }
};

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