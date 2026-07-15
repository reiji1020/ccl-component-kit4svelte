import type { Meta, StoryObj } from '@storybook/svelte';
import Button from '$lib/Button.svelte';
import { CCLVividColor } from '$lib/const/config';
import type { ColorVar } from '$lib/const/config';
import { expect, fn, userEvent, within } from '@storybook/test';
import AllColorsButtonWrapper from './AllColors/AllColorsButtonWrapper.svelte';

const colorOptions = [
  CCLVividColor.STRAWBERRY_PINK,
  CCLVividColor.PINEAPPLE_YELLOW,
  CCLVividColor.SODA_BLUE,
  CCLVividColor.MELON_GREEN,
  CCLVividColor.GRAPE_PURPLE,
  CCLVividColor.WRAP_GREY
];

const meta = {
  title: 'CommonComponents/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen'
  },
  argTypes: {
    bgColor: {
      control: { type: 'select' },
      options: colorOptions
    },
    onClick: fn(),
    disabled: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<Button>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (bgColor: ColorVar, label: string, disabled: boolean = false): Story => ({
  args: {
    bgColor,
    label,
    onClick: fn(),
    disabled
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: label });

    await step('ボタンがラベルをaccessible nameとして表示していること', async () => {
      await expect(button).toBeInTheDocument();
      await expect(button).toHaveAccessibleName(label);
      await expect(button).toHaveTextContent(label);
    });

    await step('ボタンの色がCSS custom propertyへ反映されていること', async () => {
      await expect(button.style.getPropertyValue('--bgColor').trim()).toBe(`var(${bgColor})`);
    });

    if (disabled) {
      await step('非活性状態であること', async () => {
        await expect(button).toBeDisabled();
      });
      await step('クリックしてもonClickが呼ばれないこと', async () => {
        await userEvent.click(button);
        await expect(args.onClick).not.toHaveBeenCalled();
      });
    } else {
      await step('活性状態であること', async () => {
        await expect(button).toBeEnabled();
      });
      await step('クリックするとonClickが呼ばれること', async () => {
        await userEvent.click(button);
        await expect(args.onClick).toHaveBeenCalled();
      });
    }
  }
});

export const Default = createStory(CCLVividColor.SODA_BLUE, 'Button', false);

export const DisabledClicked = createStory(CCLVividColor.SODA_BLUE, 'Disabled Clicked', true);

export const AllColors: Story = {
  render: () => ({ Component: AllColorsButtonWrapper }),
  args: {},
  parameters: {
    docs: {
      source: {
        code: null
      }
    }
  }
};
