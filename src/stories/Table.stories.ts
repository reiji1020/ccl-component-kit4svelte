import type { Meta, StoryObj } from '@storybook/svelte';
import Table from "$lib/Table.svelte";
import {CCLPastelColor, CCLVividColor} from "$lib/const/config";

const meta = {
  title: 'Common/Table',
  component: Table,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  parameters:{
    layout: 'fullscreen',
  }
} satisfies Meta<Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// 通常カラー
export const Default: Story = {
  args: {
    tableColor: CCLVividColor.STRAWBERRY_PINK,
    subTableColor: CCLPastelColor.PEACH_PINK,
    dataHeader: ['更新日', 'お知らせ内容', 'カテゴリ'],
    tableData: [
      ['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
      ['2024/03/19', '商業誌出版のお知らせ', '出版物'],
      ['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
      ['2024/03/19', '商業誌出版のお知らせ', '出版物'],
    ]
  }
};
// 2ndカラー
export const SecondColor: Story = {
  args: {
    tableColor: CCLVividColor.PINEAPPLE_YELLOW,
    subTableColor: CCLPastelColor.LEMON_YELLOW,
    dataHeader: ['更新日', 'お知らせ内容', 'カテゴリ'],
    tableData: [
      ['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
      ['2024/03/19', '商業誌出版のお知らせ', '出版物'],
      ['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
      ['2024/03/19', '商業誌出版のお知らせ', '出版物'],
    ]
  }
};
// 3rdカラー
export const ThirdColor: Story = {
  args: {
    tableColor: CCLVividColor.SODA_BLUE,
    subTableColor: CCLPastelColor.SUGAR_BLUE,
    dataHeader: ['更新日', 'お知らせ内容', 'カテゴリ'],
    tableData: [
      ['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
      ['2024/03/19', '商業誌出版のお知らせ', '出版物'],
      ['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
      ['2024/03/19', '商業誌出版のお知らせ', '出版物'],
    ]
  }
};

