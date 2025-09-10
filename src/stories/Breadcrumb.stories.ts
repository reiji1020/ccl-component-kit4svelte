import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, within } from '@storybook/test';
import Breadcrumb from '$lib/Breadcrumb.svelte';
import { CCLVividColor, CCLPastelColor } from '$lib/const/config';

const meta = {
  title: 'CommonComponents/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    items: { control: 'object', description: 'パンくず項目の配列' },
    separator: { control: 'text', description: '区切り文字（slot優先）' },
    ariaLabel: { control: 'text' },
    lastItemClickable: { control: 'boolean' },
    activeColor: { control: { type: 'select' }, options: [undefined, ...Object.values(CCLVividColor), ...Object.values(CCLPastelColor)] }
  }
} satisfies Meta<Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

const baseItems = [
  { label: 'Home', href: '#' },
  { label: 'Library', href: '#' },
  { label: 'Data' }
];

export const Default: Story = {
  args: { items: baseItems, separator: '/', ariaLabel: 'Breadcrumb' },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('navのaria-labelが指定通りであること', async () => {
      const nav = canvas.getByLabelText('Breadcrumb');
      await expect(nav).toBeInTheDocument();
    });
    await step('最後の要素が現在地としてマークされていること', async () => {
      const last = await canvas.findByText('Data');
      await expect(last).toHaveAttribute('aria-current', 'page');
    });
    await step('セパレータが表示されていること', async () => {
      const seps = canvas.getAllByText('/', { exact: true });
      await expect(seps.length).toBe(baseItems.length - 1);
    });
  }
};

export const WithClickableLast: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Svelte', href: '#' }
    ],
    lastItemClickable: true,
    activeColor: CCLVividColor.SODA_BLUE
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('最後の要素がリンクであること', async () => {
      const last = canvas.getByText('Svelte');
      await expect(last.tagName).toBe('A');
    });
    await step('最後の要素にaria-currentが付与されていないこと', async () => {
      const last = canvas.getByText('Svelte');
      await expect(last).not.toHaveAttribute('aria-current');
    });
    await step('アクティブ要素の色が指定通りであること', async () => {
      const last = canvas.getByText('Svelte') as HTMLElement;
      await expect(last.getAttribute('style')).toContain(`var(${CCLVividColor.SODA_BLUE})`);
    });
  }
};
