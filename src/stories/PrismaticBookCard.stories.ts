import type { Meta, StoryObj } from '@storybook/svelte';
import PrismaticBookCard from '$lib/PrismaticBookCard.svelte';
import { CCLVividColor } from '$lib/const/config';
import { expect, within } from '@storybook/test';
import AllColorsPrismaticBookCardWrapper from './AllColors/AllColorsPrismaticBookCardWrapper.svelte';
import PrismaticBookCardMixedWrapper from './PrismaticBookCardMixedWrapper.svelte';

const toneOptions = [
  CCLVividColor.STRAWBERRY_PINK,
  CCLVividColor.PINEAPPLE_YELLOW,
  CCLVividColor.SODA_BLUE,
  CCLVividColor.MELON_GREEN,
  CCLVividColor.GRAPE_PURPLE,
  CCLVividColor.WRAP_GREY
];

const meta = {
  title: 'CommonComponents/PrismaticBookCard',
  component: PrismaticBookCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    href: { control: { type: 'text' } },
    linkLabel: { control: { type: 'text' } },
    imageUrl: { control: { type: 'text' } },
    imageAlt: { control: { type: 'text' } },
    size: { control: { type: 'select' }, options: ['default', 'large'] },
    tone: {
      control: { type: 'select' },
      options: toneOptions
    }
  }
} satisfies Meta<PrismaticBookCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://example.com',
    linkLabel: 'READ MORE',
    tone: CCLVividColor.STRAWBERRY_PINK
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('リンクラベルが表示されていること', async () => {
      await expect(canvas.getByRole('link', { name: 'READ MORE' })).toHaveAttribute(
        'href',
        'https://example.com'
      );
    });
  }
};

export const WithImage: Story = {
  args: {
    href: 'https://example.com',
    linkLabel: 'READ MORE',
    imageUrl: 'thumbnail.png',
    imageAlt: 'PrismaticBookCardの書影',
    tone: CCLVividColor.SODA_BLUE
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('表紙画像にalt属性が設定されていること', async () => {
      await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'PrismaticBookCardの書影');
    });
  }
};

export const Large: Story = {
  args: {
    href: 'https://example.com',
    linkLabel: 'READ MORE',
    imageUrl: 'thumbnail.png',
    imageAlt: 'largeサイズのPrismaticBookCard表紙',
    size: 'large',
    tone: CCLVividColor.GRAPE_PURPLE
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('largeサイズをStorybookで選択できること', async () => {
      await expect(args.size).toBe('large');
    });

    await step('largeサイズでもリンクと画像が表示されること', async () => {
      await expect(canvas.getByRole('img')).toHaveAttribute(
        'alt',
        'largeサイズのPrismaticBookCard表紙'
      );
      await expect(canvas.getByRole('link', { name: 'READ MORE' })).toHaveAttribute(
        'href',
        'https://example.com'
      );
    });

    await step('幅が変わってもlarge表紙の比率が維持されること', async () => {
      const cover = canvasElement.querySelector('.cover-slot');

      await expect(cover).not.toBeNull();
      const { width, height } = (cover as HTMLElement).getBoundingClientRect();
      await expect(width / height).toBeCloseTo(156 / 221, 2);
    });
  }
};

export const Japanese: Story = {
  args: {
    href: 'https://example.com',
    linkLabel: '書籍の詳細を見る',
    tone: CCLVividColor.MELON_GREEN
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('日本語リンクラベルが表示されていること', async () => {
      await expect(canvas.getByRole('link', { name: '書籍の詳細を見る' })).toBeInTheDocument();
    });
  }
};

export const WithoutLink: Story = {
  args: {
    linkLabel: 'COMING SOON',
    tone: CCLVividColor.PINEAPPLE_YELLOW
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('href未指定でもラベルが表示されていること', async () => {
      await expect(canvas.getByText('COMING SOON')).toBeInTheDocument();
    });

    await step('href未指定ではリンクにならないこと', async () => {
      await expect(canvas.queryByRole('link', { name: 'COMING SOON' })).not.toBeInTheDocument();
    });
  }
};

export const MixedWithBookCard: Story = {
  render: () => ({ Component: PrismaticBookCardMixedWrapper }),
  args: {},
  parameters: {
    layout: 'fullscreen'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('新旧BookCardが同時に表示されていること', async () => {
      await expect(canvas.getByRole('heading', { name: 'PrismaticBookCard' })).toBeInTheDocument();
      await expect(canvas.getByRole('heading', { name: 'BookCard' })).toBeInTheDocument();
    });
  }
};

export const AllColors: Story = {
  render: () => ({ Component: AllColorsPrismaticBookCardWrapper }),
  args: {},
  parameters: {
    layout: 'fullscreen'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('すべてのtone名が表示されていること', async () => {
      for (const name of Object.keys(CCLVividColor)) {
        await expect(canvas.getAllByText(name).length).toBeGreaterThan(0);
      }
    });
  }
};
