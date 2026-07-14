import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, within } from '@storybook/test';
import PrismaticAmbientGlowStage from './PrismaticAmbientGlowStage.svelte';
import PrismaticAmbientGlowMixedWrapper from './PrismaticAmbientGlowMixedWrapper.svelte';
import AllColorsPrismaticAmbientGlowWrapper from './AllColors/AllColorsPrismaticAmbientGlowWrapper.svelte';
import { CCLPastelColor } from '$lib/const/config';

const toneOptions = [
  CCLPastelColor.PEACH_PINK,
  CCLPastelColor.SUGAR_BLUE,
  CCLPastelColor.LEMON_YELLOW,
  CCLPastelColor.AKEBI_PURPLE
];

const meta = {
  title: 'CommonComponents/PrismaticAmbientGlow',
  component: PrismaticAmbientGlowStage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    tone: { control: { type: 'select' }, options: toneOptions },
    size: { control: { type: 'select' }, options: ['small', 'medium', 'large'] },
    opacity: {
      control: { type: 'select' },
      options: ['subtle', 'standard', 'strong']
    },
    blur: { control: { type: 'select' }, options: ['soft', 'medium', 'diffuse'] },
    position: {
      control: { type: 'select' },
      options: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right']
    }
  }
} satisfies Meta<PrismaticAmbientGlowStage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tone: CCLPastelColor.PEACH_PINK,
    size: 'medium',
    opacity: 'standard',
    blur: 'medium',
    position: 'center'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('発光表現が読み上げ対象外であること', async () => {
      await expect(canvas.getByTestId('prismatic-ambient-glow')).toHaveAttribute(
        'aria-hidden',
        'true'
      );
    });

    await step('指定したtoneと調整値が反映されていること', async () => {
      const glow = canvas.getByTestId('prismatic-ambient-glow');
      await expect(glow).toHaveAttribute('data-tone', CCLPastelColor.PEACH_PINK);
      await expect(glow).toHaveAttribute('data-size', 'medium');
      await expect(glow).toHaveAttribute('data-opacity', 'standard');
      await expect(glow).toHaveAttribute('data-blur', 'medium');
    });
  }
};

export const StrongTopRight: Story = {
  args: {
    tone: CCLPastelColor.AKEBI_PURPLE,
    size: 'large',
    opacity: 'strong',
    blur: 'diffuse',
    position: 'top-right'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('強い発光と右上配置が反映されていること', async () => {
      const glow = canvas.getByTestId('prismatic-ambient-glow');
      await expect(glow).toHaveAttribute('data-opacity', 'strong');
      await expect(glow).toHaveAttribute('data-position', 'top-right');
    });
  }
};

export const WithWorkCard: Story = {
  render: () => ({ Component: PrismaticAmbientGlowMixedWrapper }),
  args: {
    tone: CCLPastelColor.PEACH_PINK,
    size: 'medium',
    opacity: 'standard',
    blur: 'medium',
    position: 'center'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('WorkCardと複数の発光表現が同時に表示されていること', async () => {
      await expect(
        canvas.getByRole('heading', { name: '発光表現と組み合わせた制作実績' })
      ).toBeInTheDocument();
      await expect(canvas.getAllByTestId('prismatic-ambient-glow')).toHaveLength(2);
    });
  }
};

export const AllColors: Story = {
  render: () => ({ Component: AllColorsPrismaticAmbientGlowWrapper }),
  args: {
    tone: CCLPastelColor.PEACH_PINK,
    size: 'medium',
    opacity: 'standard',
    blur: 'medium',
    position: 'center'
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('4種類のtoneが表示されていること', async () => {
      await expect(canvas.getAllByTestId('prismatic-ambient-glow')).toHaveLength(4);
      await expect(canvas.getByRole('heading', { name: 'PEACH_PINK' })).toBeInTheDocument();
      await expect(canvas.getByRole('heading', { name: 'SUGAR_BLUE' })).toBeInTheDocument();
      await expect(canvas.getByRole('heading', { name: 'LEMON_YELLOW' })).toBeInTheDocument();
      await expect(canvas.getByRole('heading', { name: 'AKEBI_PURPLE' })).toBeInTheDocument();
    });
  }
};
