import type { Meta, StoryObj } from '@storybook/svelte';
import Spinner from '../lib/Spinner.svelte';

import { CCLVividColor, CCLPastelColor } from '../lib/const/config';

const colorOptions = [
  CCLVividColor.STRAWBERRY_PINK,
  CCLVividColor.PINEAPPLE_YELLOW,
  CCLVividColor.SODA_BLUE,
  CCLVividColor.MELON_GREEN,
  CCLVividColor.GRAPE_PURPLE,
  CCLVividColor.WRAP_GREY,
  CCLPastelColor.PEACH_PINK,
  CCLPastelColor.LEMON_YELLOW,
  CCLPastelColor.SUGAR_BLUE,
  CCLPastelColor.MATCHA_GREEN,
  CCLPastelColor.AKEBI_PURPLE,
  CCLPastelColor.CLOUD_GREY
];

const meta = {
  title: 'CommonComponents/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    size: {
      control: { type: 'text' },
      description: 'スピナーのサイズ (例: "40px", "2em")'
    },
    color: {
      control: { type: 'select' },
      options: colorOptions,
      description: 'スピナーの色'
    },
    borderWidth: {
      control: { type: 'text' },
      description: 'スピナーのボーダー幅 (例: "4px", "0.2em")'
    }
  }
} satisfies Meta<Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

import { expect } from '@storybook/test';
import { within } from '@storybook/test';

export const Default: Story = {
  args: {
    size: '50px',
    color: CCLVividColor.STRAWBERRY_PINK,
    borderWidth: '5px'
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    await step('スピナーが表示されていること', async () => {
      const spinner = canvas.getByRole('status');
      await expect(spinner).toBeInTheDocument();
    });
    await step('スピナーのサイズが指定通りであること', async () => {
      const spinner = canvas.getByRole('status');
      await expect(spinner).toHaveStyle(`width: ${args.size}; height: ${args.size};`);
    });
    await step('スピナーのボーダー幅が指定通りであること', async () => {
      const spinner = canvas.getByRole('status');
      await expect(spinner).toHaveStyle(`border-width: ${args.borderWidth};`);
    });
  }
};

export const Large: Story = {
  args: {
    size: '80px',
    color: CCLVividColor.MELON_GREEN,
    borderWidth: '8px'
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    await step('スピナーが表示されていること', async () => {
      const spinner = canvas.getByRole('status');
      await expect(spinner).toBeInTheDocument();
    });
    await step('スピナーのサイズが指定通りであること', async () => {
      const spinner = canvas.getByRole('status');
      await expect(spinner).toHaveStyle(`width: ${args.size}; height: ${args.size};`);
    });
    await step('スピナーのボーダー幅が指定通りであること', async () => {
      const spinner = canvas.getByRole('status');
      await expect(spinner).toHaveStyle(`border-width: ${args.borderWidth};`);
    });
  }
};

import AllColorsSpinnerWrapper from './AllColors/AllColorsSpinnerWrapper.svelte';

export const Small: Story = {
  args: {
    size: '20px',
    color: CCLVividColor.SODA_BLUE,
    borderWidth: '2px'
  },
  play: async ({ canvasElement, step, args }) => {
    const canvas = within(canvasElement);
    await step('スピナーが表示されていること', async () => {
      const spinner = canvas.getByRole('status');
      await expect(spinner).toBeInTheDocument();
    });
    await step('スピナーのサイズが指定通りであること', async () => {
      const spinner = canvas.getByRole('status');
      await expect(spinner).toHaveStyle(`width: ${args.size}; height: ${args.size};`);
    });
    await step('スピナーのボーダー幅が指定通りであること', async () => {
      const spinner = canvas.getByRole('status');
      await expect(spinner).toHaveStyle(`border-width: ${args.borderWidth};`);
    });
  }
};

export const AllColors: Story = {
  render: () => ({ Component: AllColorsSpinnerWrapper }),
  args: {},
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
};
