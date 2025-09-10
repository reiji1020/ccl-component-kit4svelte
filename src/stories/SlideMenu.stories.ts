import type { Meta, StoryObj } from '@storybook/svelte';
import { within, userEvent, expect } from '@storybook/test';
import SlideMenu from '$lib/SlideMenu.svelte';
import SlideMenuWrapper from './SlideMenuWrapper.svelte';
import { CCLVividColor, CCLPastelColor } from '$lib/const/config';

const colorOptions = [...Object.values(CCLVividColor), ...Object.values(CCLPastelColor)];

const meta = {
  title: 'CommonComponents/SlideMenu',
  component: SlideMenu,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    side: { control: { type: 'radio' }, options: ['left', 'right'] },
    size: { control: { type: 'text' } },
    title: { control: { type: 'text' } },
    ariaLabel: { control: { type: 'text' } },
    accentColor: { control: { type: 'select' }, options: colorOptions }
  }
} satisfies Meta<SlideMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'products', label: 'Products', href: '#' },
  { id: 'about', label: 'About', href: '#' },
  { id: 'contact', label: 'Contact', href: '#' }
];

export const Default: Story = {
  render: (args) => ({ Component: SlideMenuWrapper, props: args }),
  args: {
    side: 'left',
    size: '320px',
    title: 'メニュー',
    ariaLabel: 'メインメニュー',
    items: sampleItems,
    currentId: 'home',
    accentColor: CCLVividColor.SODA_BLUE
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    await step('初期状態では閉じていること', async () => {
      const dialogHidden = await canvas.findByRole('dialog', { hidden: true });
      await expect(dialogHidden).toHaveAttribute('aria-hidden', 'true');
    });
    await step('Open Menu ボタンで開くこと', async () => {
      await userEvent.click(canvas.getByRole('button', { name: /open menu/i }));
      const dialogOpen = await canvas.findByRole('dialog');
      await expect(dialogOpen).toHaveAttribute('aria-hidden', 'false');
    });
    await step('リンク選択で閉じること', async () => {
      const products = canvas.getByRole('link', { name: 'Products' });
      await userEvent.click(products);
      const dialogHidden = await canvas.findByRole('dialog', { hidden: true });
      await expect(dialogHidden).toHaveAttribute('aria-hidden', 'true');
    });
  }
};

export const RightSide: Story = {
  render: (args) => ({ Component: SlideMenuWrapper, props: args }),
  args: {
    side: 'right',
    size: '320px',
    title: 'メニュー',
    ariaLabel: 'メインメニュー',
    items: sampleItems,
    currentId: 'products',
    accentColor: CCLVividColor.STRAWBERRY_PINK
  }
};
