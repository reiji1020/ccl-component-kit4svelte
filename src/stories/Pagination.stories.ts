import type { Meta, StoryObj } from '@storybook/svelte';
import { within, userEvent, expect } from '@storybook/test';
import Pagination from '$lib/Pagination.svelte';
import PaginationWrapper from './PaginationWrapper.svelte';
import AllColorsPaginationWrapper from './AllColors/AllColorsPaginationWrapper.svelte';
import { CCLVividColor, CCLPastelColor } from '$lib/const/config';

const colorOptions = [...Object.values(CCLVividColor), ...Object.values(CCLPastelColor)];

const meta = {
  title: 'CommonComponents/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    page: { control: { type: 'number', min: 1 }, description: '現在ページ(1始まり)' },
    total: { control: { type: 'number' }, description: '総アイテム数（pageCountとどちらか）' },
    perPage: {
      control: { type: 'number', min: 1 },
      description: '1ページあたり件数（total使用時）'
    },
    pageCount: { control: { type: 'number', min: 1 }, description: '総ページ数（totalの代替）' },
    boundaryCount: {
      control: { type: 'number', min: 0, max: 5 },
      description: '両端に常時表示するページ数'
    },
    siblingCount: {
      control: { type: 'number', min: 0, max: 5 },
      description: '現在ページ前後の表示数'
    },
    showFirstLast: { control: { type: 'boolean' }, description: '最初/最後を表示' },
    showPrevNext: { control: { type: 'boolean' }, description: '前へ/次へを表示' },
    disabled: { control: { type: 'boolean' }, description: '全体の操作不可' },
    accentColor: {
      control: { type: 'select' },
      options: colorOptions,
      description: 'アクセントカラー'
    },
    ariaLabel: { control: { type: 'text' }, description: 'ナビゲーションのARIAラベル' }
  }
} satisfies Meta<Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({ Component: PaginationWrapper, props: args }),
  args: {
    page: 1,
    total: 120,
    perPage: 10,
    boundaryCount: 1,
    siblingCount: 1,
    showFirstLast: true,
    showPrevNext: true,
    disabled: false,
    accentColor: CCLVividColor.SODA_BLUE
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('次へをクリックすると、アクティブページが 2 になること', async () => {
      const next = await canvas.getByRole('button', { name: /go to next page/i });
      await userEvent.click(next);
      const page2 = await canvas.getByRole('button', { name: /go to page 2/i });
      await expect(page2).toHaveAttribute('aria-current', 'page');
    });
    await step('最後へをクリックすると、アクティブページが 最終 になること', async () => {
      const last = await canvas.getByRole('button', { name: /go to last page/i });
      await userEvent.click(last);
      const lastPage = await canvas.getByRole('button', { name: /go to page 12/i });
      await expect(lastPage).toHaveAttribute('aria-current', 'page');
    });
  }
};

export const ManyPages: Story = {
  render: (args) => ({ Component: PaginationWrapper, props: args }),
  args: {
    page: 10,
    pageCount: 50,
    boundaryCount: 2,
    siblingCount: 2,
    showFirstLast: true,
    showPrevNext: true,
    accentColor: CCLVividColor.STRAWBERRY_PINK
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('前へをクリックすると、アクティブページが 9 になること', async () => {
      const prev = await canvas.getByRole('button', { name: /go to previous page/i });
      await userEvent.click(prev);
      const page9 = await canvas.getByRole('button', { name: /go to page 9/i });
      await expect(page9).toHaveAttribute('aria-current', 'page');
    });
    await step('最後へをクリックすると、アクティブページが 最終 になること', async () => {
      const last = await canvas.getByRole('button', { name: /go to last page/i });
      await userEvent.click(last);
      const page50 = await canvas.getByRole('button', { name: /go to page 50/i });
      await expect(page50).toHaveAttribute('aria-current', 'page');
    });
  }
};

export const MinimalControls: Story = {
  render: (args) => ({ Component: PaginationWrapper, props: args }),
  args: {
    page: 3,
    pageCount: 8,
    boundaryCount: 1,
    siblingCount: 0,
    showFirstLast: false,
    showPrevNext: true,
    accentColor: CCLVividColor.MELON_GREEN
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('次へをクリックすると、アクティブページが 4 になること', async () => {
      const next = await canvas.getByRole('button', { name: /go to next page/i });
      await userEvent.click(next);
      const page4 = await canvas.getByRole('button', { name: /go to page 4/i });
      await expect(page4).toHaveAttribute('aria-current', 'page');
    });
    await step('前へをクリックすると、アクティブページが 3 に戻ること', async () => {
      const prev = await canvas.getByRole('button', { name: /go to previous page/i });
      await userEvent.click(prev);
      const page3 = await canvas.getByRole('button', { name: /go to page 3/i });
      await expect(page3).toHaveAttribute('aria-current', 'page');
    });
  }
};

export const AllColors: Story = {
  render: () => ({ Component: AllColorsPaginationWrapper }),
  args: {},
  parameters: {
    docs: {
      source: { code: null }
    }
  }
};
