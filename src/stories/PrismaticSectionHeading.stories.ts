import type { Meta, StoryObj } from '@storybook/svelte';
import PrismaticSectionHeading from '$lib/PrismaticSectionHeading.svelte';
import { CCLVividColor } from '$lib/const/config';
import { expect, within } from '@storybook/test';
import AllColorsPrismaticSectionHeadingWrapper from './AllColors/AllColorsPrismaticSectionHeadingWrapper.svelte';

const toneOptions = [
  CCLVividColor.STRAWBERRY_PINK,
  CCLVividColor.PINEAPPLE_YELLOW,
  CCLVividColor.SODA_BLUE,
  CCLVividColor.MELON_GREEN,
  CCLVividColor.GRAPE_PURPLE,
  CCLVividColor.WRAP_GREY
];

const meta = {
  title: 'CommonComponents/PrismaticSectionHeading',
  component: PrismaticSectionHeading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    eyebrow: {
      control: { type: 'text' }
    },
    title: {
      control: { type: 'text' }
    },
    tone: {
      control: { type: 'select' },
      options: toneOptions
    }
  }
} satisfies Meta<PrismaticSectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (eyebrow: string, title: string, tone: string): Story => ({
  args: {
    eyebrow,
    title,
    tone
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('eyebrowが表示されていること', async () => {
      await expect(canvas.getByText(eyebrow)).toBeInTheDocument();
    });

    await step('titleが見出しとして表示されていること', async () => {
      await expect(canvas.getByRole('heading', { name: title, level: 2 })).toBeInTheDocument();
    });

    await step('toneが反映されていること', async () => {
      await expect(args.tone).toBe(tone);
    });
  }
});

export const Default = createStory('LATEST', 'Latest Stories', CCLVividColor.STRAWBERRY_PINK);

export const SodaTone = createStory('COLLECTION', 'Prismatic Works', CCLVividColor.SODA_BLUE);

export const Japanese = createStory(
  '最新のお知らせ',
  'キャンディ工房の物語',
  CCLVividColor.MELON_GREEN
);

export const LongTitle = createStory(
  'FEATURED',
  'A Very Long Section Heading That Wraps Without Breaking The Layout',
  CCLVividColor.GRAPE_PURPLE
);

export const AllColors: Story = {
  render: () => ({ Component: AllColorsPrismaticSectionHeadingWrapper }),
  args: {},
  tags: ['test-prismatic-section-heading-all-colors'],
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

    await step('Vivid Colorsの6色が表示されていること', async () => {
      const section = canvas.getByRole('heading', { name: 'Vivid Colors' }).closest('section');

      await expect(section).not.toBeNull();
      await expect(
        within(section as HTMLElement).getAllByRole('heading', { level: 2 })
      ).toHaveLength(7);
    });

    await step('各tone名が表示されていること', async () => {
      await expect(canvas.getByText('STRAWBERRY_PINK')).toBeInTheDocument();
      await expect(canvas.getByText('PINEAPPLE_YELLOW')).toBeInTheDocument();
      await expect(canvas.getByText('SODA_BLUE')).toBeInTheDocument();
      await expect(canvas.getByText('MELON_GREEN')).toBeInTheDocument();
      await expect(canvas.getByText('GRAPE_PURPLE')).toBeInTheDocument();
      await expect(canvas.getByText('WRAP_GREY')).toBeInTheDocument();
    });
  }
};
