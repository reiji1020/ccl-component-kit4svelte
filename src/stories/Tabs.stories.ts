import type { Meta, StoryObj } from '@storybook/svelte';
import { userEvent, within, expect } from '@storybook/test';
import Tabs from '../lib/Tabs.svelte';
import TabPanel from '../lib/TabPanel.svelte';

// Import story wrappers
import DefaultWrapper from './tabs/Default.svelte';
import DynamicWrapper from './tabs/Dynamic.svelte';
import WithDisabledTabWrapper from './tabs/WithDisabledTab.svelte';

const meta = {
  title: 'CommonComponents/Tabs',
  component: Tabs,
  subcomponents: { TabPanel },
  tags: ['autodocs']
} satisfies Meta<Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Dynamic: Story = {
  render: () => ({ Component: DynamicWrapper }),
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const summary = await canvas.findByRole('tab', { name: '概要' });

    await step('追加したタブを選べること', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'タブを追加' }));
      await userEvent.click(await canvas.findByRole('tab', { name: '詳細' }));
      await expect(canvas.getByRole('tabpanel')).toHaveTextContent('詳細パネル');
    });

    await step('選択中のタブの名前を変更しても選択が維持されること', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'タブ名を変更' }));
      const renamed = await canvas.findByRole('tab', { name: '詳細設定' });
      await expect(renamed).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByRole('tabpanel', { name: '詳細設定' })).toBeVisible();
    });

    await step('選択中のタブの無効化と再有効化が反映されること', async () => {
      const details = canvas.getByRole('tab', { name: '詳細設定' });
      await userEvent.click(canvas.getByRole('button', { name: 'タブを無効化' }));
      await expect(details).toBeDisabled();
      await expect(summary).toHaveAttribute('aria-selected', 'true');
      await userEvent.click(canvas.getByRole('button', { name: 'タブを有効化' }));
      await expect(details).toBeEnabled();
      await userEvent.click(details);
      await expect(details).toHaveAttribute('aria-selected', 'true');
    });

    await step('選択中のタブを削除すると有効なタブに切り替わること', async () => {
      await userEvent.click(canvas.getByRole('button', { name: 'タブを削除' }));
      await expect(canvas.queryByRole('tab', { name: '詳細設定' })).not.toBeInTheDocument();
      await expect(summary).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByRole('tabpanel')).toHaveTextContent('概要パネル');
    });
  }
};

export const Default: Story = {
  render: () => ({ Component: DefaultWrapper }),
  parameters: {
    docs: {
      source: {
        code: `
<script>
    import { Tabs, TabPanel } from 'cclkit4svelte';
	import { CCLVividColor } from 'cclkit4svelte';
</script>

<Tabs>
	<TabPanel label="はじめに" color={CCLVividColor.STRAWBERRY_PINK}>
		<p>ここにはじめにのコンテンツが入ります。</p>
	</TabPanel>
	<TabPanel label="使い方" color={CCLVividColor.PINEAPPLE_YELLOW}>
		<p>ここに使い方のコンテンツが入ります。</p>
	</TabPanel>
	<TabPanel label="設定" color={CCLVividColor.SODA_BLUE}>
		<p>ここに設定のコンテンツが入ります。</p>
	</TabPanel>
</Tabs>
`
      }
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const tab1Button = canvas.getByRole('tab', { name: 'はじめに' });
    const tab2Button = canvas.getByRole('tab', { name: '使い方' });
    const tab1Content = 'ここにはじめにのコンテンツが入ります。';
    const tab2Content = 'ここに使い方のコンテンツが入ります。';

    await step('デフォルトで最初のタブが選択されていること', async () => {
      await expect(tab1Button).toHaveAttribute('aria-selected', 'true');
      await expect(canvas.getByText(tab1Content)).toBeInTheDocument();
    });

    await step('2番目のタブをクリックすると、コンテンツが切り替わること', async () => {
      await userEvent.click(tab2Button);
      await expect(tab2Button).toHaveAttribute('aria-selected', 'true');
      await expect(tab1Button).toHaveAttribute('aria-selected', 'false');
      await expect(canvas.getByText(tab2Content)).toBeInTheDocument();
      await expect(canvas.queryByText(tab1Content)).not.toBeInTheDocument();
    });
  }
};

export const WithDisabledTab: Story = {
  render: () => ({ Component: WithDisabledTabWrapper }),
  parameters: {
    docs: {
      source: {
        code: `
<script>
    import { Tabs, TabPanel } from 'cclkit4svelte';
	import { CCLVividColor } from 'cclkit4svelte';
</script>

<Tabs>
	<TabPanel label="はじめに" color={CCLVividColor.STRAWBERRY_PINK}>
		<p>ここにはじめにのコンテンツが入ります。</p>
	</TabPanel>
	<TabPanel label="無効なタブ" color={CCLVividColor.WRAP_GREY} disabled={true}>
		<p>このコンテンツは表示されません。</p>
	</TabPanel>
	<TabPanel label="設定" color={CCLVividColor.SODA_BLUE}>
		<p>ここに設定のコンテンツが入ります。</p>
	</TabPanel>
</Tabs>
`
      }
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const defaultTab = canvas.getByRole('tab', { name: 'はじめに' });
    const disabledTab = canvas.getByRole('tab', { name: '無効なタブ' });

    await step('無効なタブがdisabled属性を持っていること', async () => {
      await expect(disabledTab).toBeDisabled();
    });

    await step('無効なタブをクリックしても、選択状態が変わらないこと', async () => {
      await userEvent.click(disabledTab);
      await expect(defaultTab).toHaveAttribute('aria-selected', 'true');
    });
  }
};
