import type { Meta, StoryObj } from '@storybook/svelte';
import Alert from '../lib/Alert.svelte';
import AlertDismissWrapper from './AlertDismissWrapper.svelte';
import { expect, userEvent, within } from '@storybook/test';

const meta = {
  title: 'CommonComponents/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: { type: 'text' }
    },
    type: {
      control: { type: 'select' },
      options: ['success', 'error', 'warning', 'info']
    },
    dismissible: {
      control: { type: 'boolean' }
    },
    outline: {
      control: { type: 'boolean' }
    }
  }
} satisfies Meta<Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  render: (args) => ({ Component: AlertDismissWrapper, props: args }),
  args: {
    message: '操作が正常に完了しました。',
    type: 'success',
    dismissible: true
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByText(args.message);
    await expect(alert).toBeInTheDocument();

    if (args.dismissible) {
      await step('閉じるボタンが表示されていること', async () => {
        const dismissButton = canvas.getByLabelText('Dismiss alert');
        await expect(dismissButton).toBeInTheDocument();
      });

      await step('閉じるボタンをクリックするとdismissイベントが発火すること', async () => {
        const dismissButton = canvas.getByLabelText('Dismiss alert');
        await userEvent.click(dismissButton);
        await expect(canvas.getByTestId('dismiss-status')).toHaveTextContent('dismissed');
      });
    }
  }
};

export const Error: Story = {
  args: {
    message: 'エラーが発生しました。もう一度お試しください。',
    type: 'error',
    dismissible: true
  }
};

export const Warning: Story = {
  args: {
    message: '入力内容を確認してください。',
    type: 'warning',
    dismissible: true
  }
};

export const Info: Story = {
  args: {
    message: '新しい情報があります。',
    type: 'info',
    dismissible: false
  }
};

export const NotDismissible: Story = {
  args: {
    message: 'このアラートは閉じられません。',
    type: 'info',
    dismissible: false
  },
  play: async ({ canvasElement, args, step }) => {
    const canvas = within(canvasElement);
    const alert = canvas.getByText(args.message);
    await expect(alert).toBeInTheDocument();

    await step('閉じるボタンが表示されていないこと', async () => {
      const dismissButton = canvas.queryByLabelText('Dismiss alert');
      await expect(dismissButton).not.toBeInTheDocument();
    });
  }
};

export const OutlineSuccess: Story = {
  args: {
    message: '操作が正常に完了しました。',
    type: 'success',
    dismissible: true,
    outline: true
  }
};

export const OutlineError: Story = {
  args: {
    message: 'エラーが発生しました。もう一度お試しください。',
    type: 'error',
    dismissible: true,
    outline: true
  }
};

export const OutlineWarning: Story = {
  args: {
    message: '入力内容を確認してください。',
    type: 'warning',
    dismissible: true,
    outline: true
  }
};

export const OutlineInfo: Story = {
  args: {
    message: '新しい情報があります。',
    type: 'info',
    dismissible: false,
    outline: true
  }
};
