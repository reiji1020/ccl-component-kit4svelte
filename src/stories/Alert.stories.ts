import type { Meta, StoryObj } from '@storybook/svelte';
import Alert from '../lib/Alert.svelte';
import { expect, fn, userEvent, within } from '@storybook/test';

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
		},
		onDismiss: { action: 'dismiss' }
	}
} satisfies Meta<Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
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

			await step('閉じるボタンをクリックするとonDismissイベントが発火すること', async () => {
				const dismissButton = canvas.getByLabelText('Dismiss alert');
				await userEvent.click(dismissButton);
				await expect(args.onDismiss).toHaveBeenCalled();
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
