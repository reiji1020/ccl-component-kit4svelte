import type { Meta, StoryObj } from '@storybook/svelte';
import PrismaticWorkCard from '$lib/PrismaticWorkCard.svelte';
import { CCLVividColor } from '$lib/const/config';
import { expect, within } from '@storybook/test';
import AllColorsPrismaticWorkCardWrapper from './AllColors/AllColorsPrismaticWorkCardWrapper.svelte';
import PrismaticWorkCardMixedWrapper from './PrismaticWorkCardMixedWrapper.svelte';

const toneOptions = [
  CCLVividColor.STRAWBERRY_PINK,
  CCLVividColor.PINEAPPLE_YELLOW,
  CCLVividColor.SODA_BLUE,
  CCLVividColor.MELON_GREEN,
  CCLVividColor.GRAPE_PURPLE,
  CCLVividColor.WRAP_GREY
];

const meta = {
  title: 'CommonComponents/PrismaticWorkCard',
  component: PrismaticWorkCard,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    title: {
      control: { type: 'text' }
    },
    href: {
      control: { type: 'text' }
    },
    linkLabel: {
      control: { type: 'text' }
    },
    imageUrl: {
      control: { type: 'text' }
    },
    imageAlt: {
      control: { type: 'text' }
    },
    tone: {
      control: { type: 'select' },
      options: toneOptions
    }
  }
} satisfies Meta<PrismaticWorkCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'CCL Component Kit',
    href: 'https://example.com',
    linkLabel: 'VIEW PROJECT',
    tone: CCLVividColor.STRAWBERRY_PINK
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('タイトルが見出しとして表示されていること', async () => {
      await expect(
        canvas.getByRole('heading', { name: 'CCL Component Kit', level: 3 })
      ).toBeInTheDocument();
    });

    await step('CTAリンクが表示されていること', async () => {
      await expect(canvas.getByRole('link', { name: 'VIEW PROJECT' })).toHaveAttribute(
        'href',
        'https://example.com'
      );
    });
  }
};

export const Japanese: Story = {
  args: {
    title: 'キャンディ工房 実績紹介',
    href: 'https://example.com',
    linkLabel: '実績を見る',
    tone: CCLVividColor.MELON_GREEN
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('日本語タイトルが表示されていること', async () => {
      await expect(
        canvas.getByRole('heading', { name: 'キャンディ工房 実績紹介', level: 3 })
      ).toBeInTheDocument();
    });

    await step('日本語リンクラベルが表示されていること', async () => {
      await expect(canvas.getByRole('link', { name: '実績を見る' })).toHaveAttribute(
        'href',
        'https://example.com'
      );
    });
  }
};

export const WithImage: Story = {
  args: {
    title: '画像を差し込んだWorkCard',
    href: 'https://example.com',
    linkLabel: 'VIEW PROJECT',
    imageUrl: 'thumbnail.png',
    imageAlt: 'WorkCardのサムネイル',
    tone: CCLVividColor.SODA_BLUE
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('画像にalt属性が設定されていること', async () => {
      await expect(canvas.getByRole('img')).toHaveAttribute('alt', 'WorkCardのサムネイル');
    });

    await step('タイトルが表示されていること', async () => {
      await expect(canvas.getByText('画像を差し込んだWorkCard')).toBeInTheDocument();
    });
  }
};

export const WithoutLink: Story = {
  args: {
    title: 'リンクなしの制作実績',
    linkLabel: 'COMING SOON',
    tone: CCLVividColor.PINEAPPLE_YELLOW
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('リンクなしでもラベルが表示されていること', async () => {
      await expect(canvas.getByText('COMING SOON')).toBeInTheDocument();
    });

    await step('href未指定ではリンクにならないこと', async () => {
      await expect(canvas.queryByRole('link', { name: 'COMING SOON' })).not.toBeInTheDocument();
    });
  }
};

export const MixedWithServiceCard: Story = {
  render: () => ({ Component: PrismaticWorkCardMixedWrapper }),
  args: {},
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

    await step('WorkCardとServiceCardの見出しが表示されていること', async () => {
      await expect(canvas.getByRole('heading', { name: 'PrismaticWorkCard' })).toBeInTheDocument();
      await expect(canvas.getByRole('heading', { name: 'ServiceCard' })).toBeInTheDocument();
    });

    await step('既存ServiceCardとの差分を確認できること', async () => {
      await expect(canvas.getByText('Prismatic Design の制作実績')).toBeInTheDocument();
      await expect(canvas.getByText('既存サービスカード')).toBeInTheDocument();
    });
  }
};

export const AllColors: Story = {
  render: () => ({ Component: AllColorsPrismaticWorkCardWrapper }),
  args: {},
  tags: ['test-prismatic-work-card-all-colors'],
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

    await step('WorkCardの6色が表示されていること', async () => {
      const section = canvas.getByRole('heading', { name: 'WorkCard' }).closest('section');

      await expect(section).not.toBeNull();
      await expect(
        within(section as HTMLElement).getAllByRole('heading', { level: 3 })
      ).toHaveLength(6);
    });

    await step('各tone名の制作実績が表示されていること', async () => {
      await expect(canvas.getByText('STRAWBERRY_PINK の制作実績')).toBeInTheDocument();
      await expect(canvas.getByText('PINEAPPLE_YELLOW の制作実績')).toBeInTheDocument();
      await expect(canvas.getByText('SODA_BLUE の制作実績')).toBeInTheDocument();
      await expect(canvas.getByText('MELON_GREEN の制作実績')).toBeInTheDocument();
      await expect(canvas.getByText('GRAPE_PURPLE の制作実績')).toBeInTheDocument();
      await expect(canvas.getByText('WRAP_GREY の制作実績')).toBeInTheDocument();
    });
  }
};
