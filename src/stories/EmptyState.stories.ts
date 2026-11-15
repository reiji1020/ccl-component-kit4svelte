import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, userEvent, within } from '@storybook/test';
import EmptyStateExample from './EmptyStateExample.svelte';

const meta = {
  title: 'CommonComponents/EmptyState',
  component: EmptyStateExample,
  tags: ['autodocs']
} satisfies Meta<EmptyStateExample>;
export default meta;
type Story = StoryObj<typeof meta>;

const play: NonNullable<Story['play']> = async ({ args, canvasElement, step }) => {
  const canvas = within(canvasElement);
  await step('見出しと説明が表示され、操作をキーボードで実行できること', async () => {
    await expect(canvas.getByRole('heading', { name: args.title })).toBeVisible();
    await expect(canvas.getByText(args.description)).toBeVisible();
    await userEvent.tab();
    await expect(canvas.getByRole('button', { name: args.action })).toHaveFocus();
    await userEvent.keyboard('{Enter}');
    await expect(canvas.getByText('操作しました')).toBeVisible();
  });
};

export const NoResults: Story = {
  args: { title: '検索結果がありません', description: '検索条件を変更してください。', action: '検索条件をクリア' },
  play
};
export const FirstUse: Story = {
  args: { title: '最初のプロジェクトを作成', description: '資料を整理する場所を作成できます。', action: '作成' },
  play
};
export const NoData: Story = {
  args: { title: '資料が登録されていません', description: 'ファイルを登録すると一覧に表示されます。', action: '資料を登録' },
  play
};
