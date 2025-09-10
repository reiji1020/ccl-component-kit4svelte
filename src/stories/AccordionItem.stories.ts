import type { Meta, StoryObj } from '@storybook/svelte';
import AccordionItem from '../lib/AccordionItem.svelte';
import ItemWrapper from './accordion/ItemWrapper.svelte';
import { CCLVividColor, CCLPastelColor } from '../lib/const/config';

const colorOptions = { ...CCLVividColor, ...CCLPastelColor };

const meta = {
  title: 'CommonComponents/Accordion/AccordionItem',
  component: AccordionItem,
  argTypes: {
    label: {
      control: 'text',
      description: '項目のヘッダーとして表示されるテキスト'
    },
    isOpen: {
      control: 'boolean',
      description: '初期状態で開いているかどうか'
    },
    headerColor: {
      control: { type: 'select' },
      options: colorOptions,
      description: 'ヘッダーの背景色'
    },
    contentColor: {
      control: { type: 'select' },
      options: colorOptions,
      description: 'コンテンツエリアの背景色'
    }
  },
  tags: ['autodocs']
} satisfies Meta<AccordionItem>;

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
    import { Accordion, AccordionItem } from 'cclkit4svelte';
    import { CCLPastelColor } from 'cclkit4svelte';
</script>

<Accordion>
    <AccordionItem
        label="インタラクティブなAccordionItem"
        isOpen={true}
        headerColor={CCLPastelColor.SUGAR_BLUE}
        contentColor={CCLPastelColor.CLOUD_GREY}
    >
        <p>これはAccordionItemのコンテンツです。Controlsパネルからプロパティを操作できます。</p>
    </AccordionItem>
</Accordion>
`
      }
    }
  },
  args: {
    label: 'インタラクティブなAccordionItem',
    isOpen: true,
    headerColor: CCLPastelColor.SUGAR_BLUE,
    contentColor: CCLPastelColor.CLOUD_GREY
  }
};
