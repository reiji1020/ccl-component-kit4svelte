import type { Meta, StoryObj } from '@storybook/svelte';
import PrismaticGradientButton from '$lib/PrismaticGradientButton.svelte';
import { CCLPastelColor, CCLVividColor } from '$lib/const/config';
import { expect, fn, userEvent, within } from '@storybook/test';
import AllColorsPrismaticGradientButtonWrapper from './AllColors/AllColorsPrismaticGradientButtonWrapper.svelte';

const colorOptions = [
  CCLVividColor.STRAWBERRY_PINK,
  CCLVividColor.PINEAPPLE_YELLOW,
  CCLVividColor.SODA_BLUE,
  CCLVividColor.MELON_GREEN,
  CCLVividColor.GRAPE_PURPLE,
  CCLVividColor.WRAP_GREY
];

const meta = {
  title: 'CommonComponents/PrismaticGradientButton',
  component: PrismaticGradientButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    tone: {
      control: { type: 'select' },
      options: ['primary', 'secondary']
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium']
    },
    color: {
      control: { type: 'select' },
      options: colorOptions
    },
    disabled: {
      control: { type: 'boolean' }
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset']
    },
    onClick: fn()
  }
} satisfies Meta<PrismaticGradientButton>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (
  label: string,
  tone: 'primary' | 'secondary',
  size: 'large' | 'medium',
  color: string,
  expectedGradientStart: string,
  expectedGradientEnd: string,
  disabled: boolean = false
): Story => ({
  args: {
    label,
    tone,
    size,
    color,
    disabled,
    type: 'button',
    onClick: fn()
  },
  play: async ({ args, canvasElement, step }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', { name: label });

    await step('ボタンがラベルをaccessible nameとして表示していること', async () => {
      await expect(button).toBeInTheDocument();
      await expect(button).toHaveAccessibleName(label);
      await expect(button).toHaveTextContent(label);
    });

    await step('toneとsizeがclassへ反映されていること', async () => {
      await expect(button).toHaveClass(`tone-${tone}`, `size-${size}`);
    });

    await step('色指定がグラデーションのCSS custom propertyへ反映されていること', async () => {
      await expect(button.style.getPropertyValue('--gradient-start').trim()).toBe(
        `var(${expectedGradientStart})`
      );
      await expect(button.style.getPropertyValue('--gradient-end').trim()).toBe(
        `var(${expectedGradientEnd})`
      );
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

export const Default = createStory(
  'EXPLORE THE LAB',
  'primary',
  'large',
  CCLVividColor.STRAWBERRY_PINK,
  CCLVividColor.STRAWBERRY_PINK,
  CCLVividColor.SODA_BLUE
);

export const Secondary = createStory(
  'EXPLORE THE LAB',
  'secondary',
  'medium',
  CCLVividColor.PINEAPPLE_YELLOW,
  CCLPastelColor.LEMON_YELLOW,
  CCLVividColor.PINEAPPLE_YELLOW
);

export const Disabled = createStory(
  'EXPLORE THE LAB',
  'secondary',
  'large',
  CCLVividColor.PINEAPPLE_YELLOW,
  CCLPastelColor.LEMON_YELLOW,
  CCLPastelColor.PEACH_PINK,
  true
);

export const AllColors: Story = {
  render: () => ({ Component: AllColorsPrismaticGradientButtonWrapper }),
  args: {},
  tags: ['test-prismatic-gradient-button-all-colors'],
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

    await step('Primaryの6色が表示されていること', async () => {
      const primarySection = canvas.getByRole('heading', { name: 'Primary' }).closest('section');

      await expect(primarySection).not.toBeNull();
      await expect(within(primarySection as HTMLElement).getAllByRole('button')).toHaveLength(6);
    });

    await step('Secondaryの6色が表示されていること', async () => {
      const secondarySection = canvas
        .getByRole('heading', { name: 'Secondary' })
        .closest('section');

      await expect(secondarySection).not.toBeNull();
      await expect(within(secondarySection as HTMLElement).getAllByRole('button')).toHaveLength(6);
    });

    await step('各色のボタンがPrimaryとSecondaryに1つずつ表示されていること', async () => {
      await expect(canvas.getAllByText('STRAWBERRY_PINK')).toHaveLength(2);
      await expect(canvas.getAllByText('PINEAPPLE_YELLOW')).toHaveLength(2);
      await expect(canvas.getAllByText('SODA_BLUE')).toHaveLength(2);
      await expect(canvas.getAllByText('MELON_GREEN')).toHaveLength(2);
      await expect(canvas.getAllByText('GRAPE_PURPLE')).toHaveLength(2);
      await expect(canvas.getAllByText('WRAP_GREY')).toHaveLength(2);
    });
  }
};
