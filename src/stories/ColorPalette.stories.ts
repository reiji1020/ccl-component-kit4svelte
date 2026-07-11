import type { Meta, StoryObj } from '@storybook/svelte';
import ColorPaletteStory from './ColorPalette/ColorPaletteStory.svelte';

const meta = {
  title: 'DesignTokens/ColorPalette',
  component: ColorPaletteStory,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        code: null
      }
    }
  }
} satisfies Meta<ColorPaletteStory>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrismaticV2: Story = {};
