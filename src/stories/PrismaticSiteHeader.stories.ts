import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, within } from '@storybook/test';
import PrismaticSiteHeader from '$lib/PrismaticSiteHeader.svelte';
import { CCLVividColor } from '$lib/const/config';
import AllColorsPrismaticSiteHeaderWrapper from './AllColors/AllColorsPrismaticSiteHeaderWrapper.svelte';
import PrismaticSiteHeaderMixedWrapper from './PrismaticSiteHeaderMixedWrapper.svelte';

const toneOptions = [
  CCLVividColor.STRAWBERRY_PINK,
  CCLVividColor.PINEAPPLE_YELLOW,
  CCLVividColor.SODA_BLUE,
  CCLVividColor.MELON_GREEN,
  CCLVividColor.GRAPE_PURPLE,
  CCLVividColor.WRAP_GREY
];

const meta = {
  title: 'CommonComponents/PrismaticSiteHeader',
  component: PrismaticSiteHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    brand: { control: { type: 'text' } },
    brandHref: { control: { type: 'text' } },
    navigation: { control: { type: 'object' } },
    ariaLabel: { control: { type: 'text' } },
    tone: {
      control: { type: 'select' },
      options: toneOptions
    }
  }
} satisfies Meta<PrismaticSiteHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    brand: 'CANDY CHUPS Lab.',
    tone: CCLVividColor.STRAWBERRY_PINK
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('ブランド名が表示されていること', async () => {
      await expect(canvas.getByText('CANDY CHUPS Lab.')).toBeInTheDocument();
    });

    await step('メインナビゲーションが表示されていること', async () => {
      await expect(
        canvas.getByRole('navigation', { name: 'メインナビゲーション' })
      ).toBeInTheDocument();
      await expect(canvas.getByRole('link', { name: 'DISCOVER' })).toHaveAttribute(
        'aria-current',
        'page'
      );
    });
  }
};

export const Japanese: Story = {
  args: {
    brand: 'キャンディ研究所',
    brandHref: '/',
    ariaLabel: 'サイト内ナビゲーション',
    navigation: [
      { label: '見つける', href: '#discover', active: true },
      { label: '制作実績', href: '#works' },
      { label: '書籍', href: '#books' },
      { label: '私たちについて', href: '#about' }
    ],
    tone: CCLVividColor.MELON_GREEN
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('日本語ブランドがリンクとして表示されていること', async () => {
      await expect(canvas.getByRole('link', { name: 'キャンディ研究所' })).toHaveAttribute(
        'href',
        '/'
      );
    });

    await step('日本語ナビゲーションが表示されていること', async () => {
      await expect(canvas.getByRole('link', { name: '私たちについて' })).toHaveAttribute(
        'href',
        '#about'
      );
    });
  }
};

export const Mobile: Story = {
  args: {
    brand: 'CANDY CHUPS Lab.',
    tone: CCLVividColor.SODA_BLUE
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('モバイルでもブランドとナビゲーションが表示されていること', async () => {
      await expect(canvas.getByText('CANDY CHUPS Lab.')).toBeInTheDocument();
      await expect(canvas.getByRole('link', { name: 'SHOP' })).toBeInTheDocument();
    });
  }
};

export const MixedWithHeader: Story = {
  render: () => ({ Component: PrismaticSiteHeaderMixedWrapper }),
  args: {},
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('新旧Headerが同時に表示されていること', async () => {
      await expect(
        canvas.getByRole('heading', { name: 'PrismaticSiteHeader' })
      ).toBeInTheDocument();
      await expect(canvas.getByRole('heading', { name: 'Header' })).toBeInTheDocument();
    });
  }
};

export const AllColors: Story = {
  render: () => ({ Component: AllColorsPrismaticSiteHeaderWrapper }),
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
