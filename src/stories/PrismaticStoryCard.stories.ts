import type { Meta, StoryObj } from '@storybook/svelte';
import PrismaticStoryCard from '$lib/PrismaticStoryCard.svelte';
import type { PrismaticStoryCardTone } from '$lib/PrismaticStoryCard.svelte';
import { CCLVividColor } from '$lib/const/config';
import { expect, within } from '@storybook/test';
import AllColorsPrismaticStoryCardWrapper from './AllColors/AllColorsPrismaticStoryCardWrapper.svelte';
import PrismaticStoryCardSquareSlotWrapper from './PrismaticStoryCardSquareSlotWrapper.svelte';

const toneOptions = [
  CCLVividColor.STRAWBERRY_PINK,
  CCLVividColor.PINEAPPLE_YELLOW,
  CCLVividColor.SODA_BLUE,
  CCLVividColor.MELON_GREEN,
  CCLVividColor.GRAPE_PURPLE,
  CCLVividColor.WRAP_GREY
];

const meta = {
  title: 'CommonComponents/PrismaticStoryCard',
  component: PrismaticStoryCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    label: {
      control: { type: 'text' }
    },
    href: {
      control: { type: 'text' }
    },
    linkLabel: {
      control: { type: 'text' }
    },
    showLink: {
      control: { type: 'boolean' }
    },
    imageUrl: {
      control: { type: 'text' }
    },
    imageAlt: {
      control: { type: 'text' }
    },
    squareImage: {
      control: { type: 'boolean' }
    },
    size: {
      control: { type: 'select' },
      options: ['featured', 'default']
    },
    tone: {
      control: { type: 'select' },
      options: toneOptions
    }
  }
} satisfies Meta<PrismaticStoryCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (
  title: string,
  size: 'featured' | 'default',
  tone: PrismaticStoryCardTone,
  label?: string,
  href?: string
): Story => ({
  args: {
    title,
    label,
    href,
    linkLabel: '記事を読む',
    size,
    tone
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('タイトルが見出しとして表示されていること', async () => {
      await expect(canvas.getByRole('heading', { name: title, level: 3 })).toBeInTheDocument();
    });

    await step('sizeとtoneが反映されていること', async () => {
      await expect(args.size).toBe(size);
      await expect(args.tone).toBe(tone);
    });

    if (label) {
      await step('ラベルが表示されていること', async () => {
        await expect(canvas.getByText(label)).toBeInTheDocument();
      });
    }

    if (href) {
      await step('CTAリンクが表示されていること', async () => {
        await expect(canvas.getByRole('link', { name: args.linkLabel })).toHaveAttribute(
          'href',
          href
        );
      });
    }
  }
});

export const Featured = createStory(
  '技術書典20・新刊のお知らせ',
  'featured',
  CCLVividColor.STRAWBERRY_PINK
);

export const Default = createStory(
  '技術書典20・新刊のお知らせ',
  'default',
  CCLVividColor.STRAWBERRY_PINK
);

export const Japanese = createStory(
  'キャンディ工房の開発日誌を公開しました',
  'featured',
  CCLVividColor.MELON_GREEN,
  'お知らせ',
  'https://example.com'
);

export const WithImage: Story = {
  args: {
    title: '画像を差し込んだStoryCard',
    label: 'IMAGE',
    imageUrl: 'thumbnail.png',
    imageAlt: 'StoryCardのサムネイル',
    size: 'default',
    tone: CCLVividColor.SODA_BLUE
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('画像にalt属性が設定されていること', async () => {
      await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'StoryCardのサムネイル');
    });

    await step('タイトルが表示されていること', async () => {
      await expect(canvas.getByText('画像を差し込んだStoryCard')).toBeInTheDocument();
    });
  }
};

export const WithoutInlineLink: Story = {
  args: {
    title: 'Selected Story Feature',
    label: 'FEATURE',
    href: 'https://example.com',
    linkLabel: 'READ MORE',
    showLink: false,
    imageUrl: 'thumbnail.png',
    imageAlt: 'リンク非表示のStoryCardサムネイル',
    size: 'featured',
    tone: CCLVividColor.PINEAPPLE_YELLOW
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('タイトルと画像が中心の表示になること', async () => {
      await expect(
        canvas.getByRole('heading', { name: 'Selected Story Feature', level: 3 })
      ).toBeInTheDocument();
      await expect(canvas.getByRole('img')).toHaveAttribute(
        'alt',
        'リンク非表示のStoryCardサムネイル'
      );
    });

    await step('showLinkがfalseのときREAD MOREリンクが表示されないこと', async () => {
      await expect(canvas.queryByRole('link', { name: 'READ MORE' })).not.toBeInTheDocument();
    });
  }
};

export const WithSquareImage: Story = {
  args: {
    title: '正方形画像を中央に配置したStoryCard',
    label: 'SQUARE IMAGE',
    imageUrl: 'thumbnail.png',
    imageAlt: '正方形画像のStoryCardサムネイル',
    squareImage: true,
    size: 'featured',
    tone: CCLVividColor.GRAPE_PURPLE
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('正方形画像フラグが有効であること', async () => {
      await expect(args.squareImage).toBe(true);
    });

    await step('画像にalt属性が設定されていること', async () => {
      await expect(canvas.getByRole('img')).toHaveAttribute(
        'alt',
        '正方形画像のStoryCardサムネイル'
      );
    });

    await step('タイトルが表示されていること', async () => {
      await expect(canvas.getByText('正方形画像を中央に配置したStoryCard')).toBeInTheDocument();
    });
  }
};

export const WithSquareSlotImage: Story = {
  render: () => ({ Component: PrismaticStoryCardSquareSlotWrapper }),
  args: {},
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('slot経由の画像にalt属性が設定されていること', async () => {
      await expect(canvas.getByRole('img')).toHaveAttribute(
        'alt',
        'slot経由の正方形画像サムネイル'
      );
    });

    await step('タイトルが表示されていること', async () => {
      await expect(canvas.getByText('slotで正方形画像を差し込んだStoryCard')).toBeInTheDocument();
    });
  }
};

export const AllColors: Story = {
  render: () => ({ Component: AllColorsPrismaticStoryCardWrapper }),
  args: {},
  tags: ['test-prismatic-story-card-all-colors'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: null
      }
    }
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Featuredの6色が表示されていること', async () => {
      const section = canvas.getByRole('heading', { name: 'Featured' }).closest('section');

      await expect(section).not.toBeNull();
      await expect(
        within(section as HTMLElement).getAllByRole('heading', { level: 3 })
      ).toHaveLength(6);
    });

    await step('Defaultの6色が表示されていること', async () => {
      const section = canvas.getByRole('heading', { name: 'Default' }).closest('section');

      await expect(section).not.toBeNull();
      await expect(
        within(section as HTMLElement).getAllByRole('heading', { level: 3 })
      ).toHaveLength(6);
    });

    await step('各tone名がFeaturedとDefaultに1つずつ表示されていること', async () => {
      await expect(canvas.getAllByText('STRAWBERRY_PINK')).toHaveLength(2);
      await expect(canvas.getAllByText('PINEAPPLE_YELLOW')).toHaveLength(2);
      await expect(canvas.getAllByText('SODA_BLUE')).toHaveLength(2);
      await expect(canvas.getAllByText('MELON_GREEN')).toHaveLength(2);
      await expect(canvas.getAllByText('GRAPE_PURPLE')).toHaveLength(2);
      await expect(canvas.getAllByText('WRAP_GREY')).toHaveLength(2);
    });
  }
};
