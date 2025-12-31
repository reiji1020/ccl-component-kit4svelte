import type { Meta, StoryObj } from '@storybook/svelte';
import { within, expect } from '@storybook/test';
import ProgressList from '../lib/ProgressList.svelte';
import { CCLVividColor, ProgressBarHeight } from '../lib/const/config';
import ProgressListAllColorsWrapper from './AllColors/ProgressListAllColorsWrapper.svelte';

const baseItems = [
  {
    title: 'Pattern drafting',
    subtitle: 'Sketch and measurements',
    progress: 30,
    status: 'in_progress',
    meta: 'Due: Jan 20'
  },
  {
    title: 'Material sourcing',
    subtitle: 'Order fabric and thread',
    progress: 70,
    status: 'in_progress',
    meta: 'Supplier: CCL Store',
    accentColor: CCLVividColor.SODA_BLUE
  },
  {
    title: 'Assembly',
    subtitle: 'Main sewing',
    progress: 100,
    status: 'done',
    meta: 'Done by A-san'
  }
] as const;

const meta = {
  title: 'CommonComponents/ProgressList',
  component: ProgressList,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'ProgressListはタイトル・サブタイトル・進捗バー・ステータスを縦方向にまとめるリストです。行ごとにアクセント色を変えられ、リンク化・コンパクト表示・スロット（actions/itemSuffix）での拡張にも対応します。'
      }
    }
  },
  argTypes: {
    items: {
      description:
        '表示する配列。各要素は以下の形:\n' +
        '- title (必須)\n' +
        '- progress (必須, 0-100)\n' +
        '- subtitle? / status? (pending|in_progress|done|blocked) / meta?\n' +
        '- iconUrl? / accentColor? / linkUrl?',
      control: { type: 'object' },
      type: { required: true }
    },
    showPercent: { description: '右側に%表示を出す（デフォルト: true）', control: 'boolean' },
    showMeta: { description: 'バー下にmetaを表示する（デフォルト: true）', control: 'boolean' },
    compact: {
      description: '余白を抑えたコンパクト表示にする（デフォルト: false）',
      control: 'boolean'
    },
    clickable: {
      description: 'trueかつitem.linkUrlがある行をリンク化する（デフォルト: true）',
      control: 'boolean'
    },
    accentFallback: {
      control: { type: 'select' },
      options: Object.values(CCLVividColor),
      description: 'accentColor未指定時に使う色（CSSカスタムプロパティも可、デフォルト: --strawberry-pink）'
    },
    barHeight: {
      control: { type: 'select' },
      options: Object.values(ProgressBarHeight),
      description: 'バーの高さ（ProgressBarHeightに準拠、デフォルト: DEFAULT）'
    }
  }
} satisfies Meta<ProgressList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: baseItems,
    showPercent: true,
    showMeta: true,
    clickable: false
  },
  parameters: {
    docs: {
      source: {
        code: `
<script>
  import { ProgressList } from 'cclkit4svelte';
  import { CCLVividColor, ProgressBarHeight } from 'cclkit4svelte';

  const items = [
    { title: 'Pattern drafting', subtitle: 'Sketch and measurements', progress: 30, status: 'in_progress', meta: 'Due: Jan 20' },
    { title: 'Material sourcing', subtitle: 'Order fabric and thread', progress: 70, status: 'in_progress', meta: 'Supplier: CCL Store', accentColor: CCLVividColor.SODA_BLUE },
    { title: 'Assembly', subtitle: 'Main sewing', progress: 100, status: 'done', meta: 'Done by A-san' }
  ];
</script>

<ProgressList items={items} barHeight={ProgressBarHeight.DEFAULT} />
        `
      }
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('指定した3件が表示されること', async () => {
      await expect(canvas.getByText('Pattern drafting')).toBeInTheDocument();
      await expect(canvas.getByText('Material sourcing')).toBeInTheDocument();
      await expect(canvas.getByText('Assembly')).toBeInTheDocument();
    });
  }
};

export const Blocked: Story = {
  args: {
    items: [
      {
        title: 'Packaging',
        subtitle: 'Prepare shipment',
        progress: 40,
        status: 'blocked',
        meta: 'Waiting for boxes',
        accentColor: CCLVividColor.GRAPE_PURPLE
      }
    ],
    clickable: false
  }
};

export const Compact: Story = {
  args: {
    items: [
      {
        title: 'Cutting',
        subtitle: 'Prepare pieces',
        progress: 55,
        status: 'in_progress',
        meta: 'Due: Jan 22',
        accentColor: CCLVividColor.MELON_GREEN
      }
    ],
    compact: true,
    barHeight: ProgressBarHeight.NARROW,
    clickable: false
  }
};

export const NoPercent: Story = {
  args: {
    items: [
      {
        title: 'Pattern review',
        subtitle: 'Peer check',
        progress: 40,
        status: 'pending',
        meta: 'Reviewer: B-san'
      }
    ],
    showPercent: false,
    clickable: false
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('パーセント表示がないこと', async () => {
      const percentLabels = canvas.queryAllByText(/%/);
      await expect(percentLabels.length).toBe(0);
    });
  }
};

export const CustomColors: Story = {
  args: {
    items: [
      {
        title: 'Photos',
        subtitle: 'Shoot final product',
        progress: 80,
        status: 'in_progress',
        accentColor: CCLVividColor.PINEAPPLE_YELLOW
      }
    ],
    clickable: false
  }
};

export const Clickable: Story = {
  args: {
    items: [
      {
        title: 'Review board',
        subtitle: 'Team sync',
        progress: 45,
        status: 'in_progress',
        linkUrl: 'https://example.com/review',
        accentColor: CCLVividColor.PINEAPPLE_YELLOW
      }
    ],
    clickable: true
  },
  parameters: {
    docs: {
      source: {
        code: `
<script>
  import { ProgressList } from 'cclkit4svelte';
  import { CCLVividColor } from 'cclkit4svelte';

  const items = [
    { title: 'Review board', subtitle: 'Team sync', progress: 45, status: 'in_progress', linkUrl: 'https://example.com/review', accentColor: CCLVividColor.PINEAPPLE_YELLOW }
  ];
</script>

<ProgressList items={items} clickable />
        `
      }
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const links = canvas.getAllByRole('link');

    await step('リンクとして表示されること', async () => {
      await expect(links.length).toBe(1);
    });

    await step('hrefが設定されていること', async () => {
      await expect(links[0]).toHaveAttribute('href', 'https://example.com/review');
    });
  }
};

export const AllColors: Story = {
  render: () => ({ Component: ProgressListAllColorsWrapper }),
  args: {},
  parameters: {
    docs: {
      source: {
        code: `
<script>
  import { ProgressList } from 'cclkit4svelte';
  import { CCLVividColor, ProgressBarHeight } from 'cclkit4svelte';

  const items = [
    { title: 'Strawberry Pink', progress: 30, status: 'in_progress', accentColor: CCLVividColor.STRAWBERRY_PINK },
    { title: 'Pineapple Yellow', progress: 55, status: 'in_progress', accentColor: CCLVividColor.PINEAPPLE_YELLOW },
    { title: 'Soda Blue', progress: 70, status: 'in_progress', accentColor: CCLVividColor.SODA_BLUE },
    { title: 'Melon Green', progress: 80, status: 'in_progress', accentColor: CCLVividColor.MELON_GREEN },
    { title: 'Grape Purple', progress: 45, status: 'in_progress', accentColor: CCLVividColor.GRAPE_PURPLE },
    { title: 'Wrap Grey', progress: 90, status: 'in_progress', accentColor: CCLVividColor.WRAP_GREY }
  ];
</script>

<ProgressList items={items} barHeight={ProgressBarHeight.DEFAULT} clickable={false} />
        `
      }
    }
  }
};
