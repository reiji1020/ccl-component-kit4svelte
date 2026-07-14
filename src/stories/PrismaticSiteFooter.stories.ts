import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, within } from '@storybook/test';
import PrismaticSiteFooter from '$lib/PrismaticSiteFooter.svelte';
import { CCLVividColor } from '$lib/const/config';
import AllColorsPrismaticSiteFooterWrapper from './AllColors/AllColorsPrismaticSiteFooterWrapper.svelte';
import PrismaticSiteFooterMixedWrapper from './PrismaticSiteFooterMixedWrapper.svelte';

const toneOptions = Object.values(CCLVividColor);

const meta = {
  title: 'CommonComponents/PrismaticSiteFooter',
  component: PrismaticSiteFooter,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    brand: { control: { type: 'text' } },
    brandHref: { control: { type: 'text' } },
    logoUrl: { control: { type: 'text' } },
    logoAlt: { control: { type: 'text' } },
    logoHeight: { control: { type: 'text' } },
    links: { control: { type: 'object' } },
    copyright: { control: { type: 'text' } },
    ariaLabel: { control: { type: 'text' } },
    tone: {
      control: { type: 'select' },
      options: toneOptions
    }
  }
} satisfies Meta<PrismaticSiteFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brandHref: '/',
    logoUrl: 'candy-chups-lab.svg',
    logoAlt: 'CANDY CHUPS Lab.',
    logoHeight: '40px',
    tone: CCLVividColor.STRAWBERRY_PINK
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('白いSVGロゴとコピーライトが表示されていること', async () => {
      await expect(canvas.getByRole('img', { name: 'CANDY CHUPS Lab.' })).toHaveAttribute(
        'data-logo-url',
        'candy-chups-lab.svg'
      );
      await expect(canvas.getByText(/Copyright ©/)).toBeInTheDocument();
    });

    await step('フッターナビゲーションが表示されていること', async () => {
      await expect(
        canvas.getByRole('navigation', { name: 'フッターナビゲーション' })
      ).toBeInTheDocument();
      await expect(canvas.getByRole('link', { name: 'CONTACT' })).toHaveAttribute(
        'href',
        '#contact'
      );
    });
  }
};

export const CustomContent: Story = {
  args: {
    brand: 'キャンディ研究所',
    brandHref: '/',
    links: [
      { label: '作品', href: '#works' },
      { label: '書籍', href: '#books' },
      { label: 'お問い合わせ', href: '#contact' }
    ],
    copyright: '© 2026 キャンディ研究所',
    ariaLabel: 'サイト情報',
    tone: CCLVividColor.MELON_GREEN
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('変更したブランドとコピーライトが反映されていること', async () => {
      await expect(canvas.getByRole('link', { name: 'キャンディ研究所' })).toHaveAttribute(
        'href',
        '/'
      );
      await expect(canvas.getByText('© 2026 キャンディ研究所')).toBeInTheDocument();
    });

    await step('追加したリンクが表示されていること', async () => {
      await expect(canvas.getByRole('link', { name: 'お問い合わせ' })).toHaveAttribute(
        'href',
        '#contact'
      );
    });
  }
};

export const MixedWithFooter: Story = {
  render: () => ({ Component: PrismaticSiteFooterMixedWrapper }),
  args: {},
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('新旧Footerが同時に表示されていること', async () => {
      await expect(
        canvas.getByRole('heading', { name: 'PrismaticSiteFooter' })
      ).toBeInTheDocument();
      await expect(canvas.getByRole('heading', { name: 'Footer' })).toBeInTheDocument();
    });
  }
};

export const AllColors: Story = {
  render: () => ({ Component: AllColorsPrismaticSiteFooterWrapper }),
  args: {},
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('すべてのtone名が表示されていること', async () => {
      for (const name of Object.keys(CCLVividColor)) {
        await expect(canvas.getByRole('heading', { name })).toBeInTheDocument();
      }
    });
  }
};
