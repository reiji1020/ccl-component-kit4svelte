import type { Meta, StoryObj } from '@storybook/svelte';
import Table from '$lib/Table.svelte';
import { CCLPastelColor, CCLVividColor } from '$lib/const/config';
import { expect, userEvent, within } from '@storybook/test';
import TableCustomWrapper from './TableCustomWrapper.svelte';

const colorOptions = [
  CCLVividColor.STRAWBERRY_PINK,
  CCLVividColor.PINEAPPLE_YELLOW,
  CCLVividColor.SODA_BLUE,
  CCLVividColor.MELON_GREEN,
  CCLVividColor.GRAPE_PURPLE,
  CCLVividColor.WRAP_GREY
];

const meta = {
  title: 'CommonComponents/Table',
  component: Table,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    tableColor: {
      control: { type: 'select' },
      options: colorOptions
    }
  }
} satisfies Meta<Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CustomCells: Story = {
  args: { tableColor: CCLVividColor.SODA_BLUE, dataHeader: [], tableData: [] },
  render: () => ({ Component: TableCustomWrapper }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole('table');
    const body = within(table.querySelector('tbody')!);
    const count = canvas.getByRole('button', { name: '件数' });

    await step('セルの操作とサイズ指定が反映されること', async () => {
      await expect(canvas.getByRole('link', { name: 'Beta' })).toHaveAttribute('href', '#item-0');
      await expect(body.getByText('公開')).toBeVisible();
      const wrapper = table.parentElement!;
      await expect(getComputedStyle(wrapper).height).toBe('140px');
      await expect(wrapper.getBoundingClientRect().width).toBeLessThanOrEqual(640);
    });

    await step('列を昇順と降順に切り替え、元の行を操作できること', async () => {
      await userEvent.click(count);
      await expect(canvas.getByRole('columnheader', { name: '件数' })).toHaveAttribute('aria-sort', 'ascending');
      await expect(body.getAllByRole('row')[0]).toHaveTextContent('Alpha');
      await userEvent.click(body.getByRole('button', { name: 'Alpha を選択' }));
      await expect(canvas.getByRole('status', { name: '選択した行' })).toHaveTextContent('Alpha');
      await userEvent.click(count);
      await expect(canvas.getByRole('columnheader', { name: '件数' })).toHaveAttribute('aria-sort', 'descending');
      await expect(body.getAllByRole('row')[0]).toHaveTextContent('Beta');
      await expect(canvas.getByRole('status', { name: '並べ替え' })).toHaveTextContent('descending');
    });

    await step('行がない場合に空状態が表示されること', async () => {
      await userEvent.click(canvas.getByRole('button', { name: '一覧を空にする' }));
      await expect(body.getByRole('cell')).toHaveAttribute('colspan', '3');
      await expect(body.getByText('表示する項目がありません')).toBeVisible();
    });
  }
};

const createStory = (
  tableColor: string,
  bodyColor: string,
  dataHeader: string[],
  tableData: string[][],
  expectScroll: boolean = false
): Story => ({
  args: {
    tableColor,
    dataHeader,
    tableData
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole('table');
    const header = table.querySelector('thead') as HTMLElement;
    const body = table.querySelector('tbody') as HTMLElement;
    const wrapper = table.closest('.table-wrapper') as HTMLElement;
    const bodyRows = within(body).getAllByRole('row');

    await step('スクロール用wrapper内にtableが描画されていること', async () => {
      await expect(wrapper).toHaveClass('table-wrapper');
      await expect(getComputedStyle(wrapper).overflowY).toBe('auto');
    });

    await step('header cellがStoryデータ通りに描画されていること', async () => {
      const headerCells = within(header).getAllByRole('columnheader');

      await expect(headerCells).toHaveLength(dataHeader.length);
      for (const [index, title] of dataHeader.entries()) {
        await expect(headerCells[index]).toHaveTextContent(title);
      }
    });

    await step('body rowとcellがStoryデータ通りに描画されていること', async () => {
      await expect(bodyRows).toHaveLength(tableData.length);

      for (const [rowIndex, expectedRow] of tableData.entries()) {
        const cells = within(bodyRows[rowIndex]).getAllByRole('cell');

        await expect(cells).toHaveLength(expectedRow.length);
        for (const [cellIndex, expectedValue] of expectedRow.entries()) {
          await expect(cells[cellIndex]).toHaveTextContent(expectedValue);
        }
      }
    });

    await step('色指定とsticky headerがDOMへ反映されていること', async () => {
      await expect(header.style.getPropertyValue('--bgColor').trim()).toBe(`var(${tableColor})`);
      await expect(getComputedStyle(header).position).toBe('sticky');

      for (const row of bodyRows) {
        await expect(row.style.getPropertyValue('--table-body-color').trim()).toBe(
          `var(${bodyColor})`
        );
      }
    });

    if (expectScroll) {
      await step('行数が多い場合にwrapper内を縦スクロールできること', async () => {
        await expect(wrapper.scrollHeight).toBeGreaterThan(wrapper.clientHeight);
      });
    }
  }
});

export const withScroll = createStory(
  CCLVividColor.STRAWBERRY_PINK,
  CCLPastelColor.PEACH_PINK,
  ['更新日', 'お知らせ内容', 'カテゴリ'],
  [
    [
      '2024/03/19',
      'イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ',
      'イベント'
    ],
    ['2024/03/19', '商業誌出版のお知らせ', '出版物'],
    [
      '2024/03/19',
      'イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ',
      'イベント'
    ],
    ['2024/03/19', '商業誌出版のお知らせ', '出版物'],
    [
      '2024/03/19',
      'イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ',
      'イベント'
    ],
    ['2024/03/19', '商業誌出版のお知らせ', '出版物'],
    [
      '2024/03/19',
      'イベント参加のお知らせイベント参加のお知らせイベント参加のお知らせイベント参加のお知らせ',
      'イベント'
    ],
    ['2024/03/19', '商業誌出版のお知らせ', '出版物'],
    ['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
    ['2024/03/19', '商業誌出版のお知らせ', '出版物'],
    ['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
    ['2024/03/19', '商業誌出版のお知らせ', '出版物']
  ],
  true
);

export const Yellow = createStory(
  CCLVividColor.PINEAPPLE_YELLOW,
  CCLPastelColor.LEMON_YELLOW,
  ['更新日', 'お知らせ内容', 'カテゴリ'],
  [
    ['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
    ['2024/03/19', '商業誌出版のお知らせ', '出版物'],
    ['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
    ['2024/03/19', '商業誌出版のお知らせ', '出版物']
  ]
);

export const Blue = createStory(
  CCLVividColor.SODA_BLUE,
  CCLPastelColor.SUGAR_BLUE,
  ['更新日', 'お知らせ内容', 'カテゴリ'],
  [
    ['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
    ['2024/03/19', '商業誌出版のお知らせ', '出版物'],
    ['2024/03/19', 'イベント参加のお知らせ', 'イベント'],
    ['2024/03/19', '商業誌出版のお知らせ', '出版物']
  ]
);
