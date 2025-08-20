import type { Meta, StoryObj } from '@storybook/svelte';
import { CCLVividColor } from '../lib/const/config';
import TabPanel from '../lib/TabPanel.svelte';
import ItemWrapper from './tabs/ItemWrapper.svelte';

const meta = {
	title: 'CommonComponents/Tabs/TabPanel',
	component: TabPanel,
	argTypes: {
		label: {
			control: 'text',
			description: 'タブのボタンに表示されるテキスト'
		},
		color: {
			control: { type: 'select' },
			options: Object.values(CCLVividColor),
			description: 'アクティブな時のインジケーターの色'
		},
		disabled: {
			control: 'boolean',
			description: 'タブを無効化するかどうか'
		}
	},
	tags: ['autodocs']
} satisfies Meta<TabPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({
		Component: ItemWrapper,
		props: args
	}),
	parameters: {
		docs: {
			source: {
				code: `
<script>
    import { Tabs, TabPanel } from 'cclkit4svelte';
	import { CCLVividColor } from 'cclkit4svelte';
</script>

<Tabs>
    <TabPanel
        label="インタラクティブなTabPanel"
        color={CCLVividColor.STRAWBERRY_PINK}
        disabled={false}
    >
		<p>これはTabPanelのコンテンツです。Controlsパネルからプロパティを操作できます。</p>
    </TabPanel>
</Tabs>
`
			}
		}
	},
	args: {
		label: 'インタラクティブなTabPanel',
		color: CCLVividColor.STRAWBERRY_PINK,
		disabled: false
	}
};