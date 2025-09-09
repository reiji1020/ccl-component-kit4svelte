import type { Meta, StoryObj } from '@storybook/svelte';
import Dialog from '$lib/Dialog.svelte';
import DialogStoryWrapper from './DialogStoryWrapper.svelte';
import { CCLVividColor } from '$lib/const/config';
import AllColorsDialogWrapper from './AllColors/AllColorsDialogWrapper.svelte';
import { expect, userEvent, within } from '@storybook/test';

const colorOptions = [
	CCLVividColor.STRAWBERRY_PINK,
	CCLVividColor.PINEAPPLE_YELLOW,
	CCLVividColor.SODA_BLUE,
	CCLVividColor.MELON_GREEN,
	CCLVividColor.GRAPE_PURPLE,
	CCLVividColor.WRAP_GREY
];

const meta = {
	title: 'CommonComponents/Dialog',
	component: Dialog,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen'
	},
	argTypes: {
		open: { control: { type: 'boolean' } },
		title: { control: { type: 'text' } },
		borderColor: { control: { type: 'select' }, options: colorOptions },
		closeOnEsc: { control: { type: 'boolean' } },
		closeOnOutside: { control: { type: 'boolean' } }
	}
} satisfies Meta<Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: () => ({ Component: DialogStoryWrapper }),
	args: {},
	parameters: {
		docs: {
			story: {
				height: '24vh'
			},
			source: {
				code: `
<script>
  import { Dialog, Button, CCLVividColor, CCLPastelColor } from 'cclkit4svelte';
  let open = false;
</script>

<Button label="Open" bgColor={CCLVividColor.SODA_BLUE} onClick={() => (open = true)} />

<Dialog {open} title="ダイアログのタイトル" borderColor={CCLVividColor.SODA_BLUE} on:close={() => (open = false)}>
  <p>ここに任意のコンテンツを配置できます。</p>
  <svelte:fragment slot="footer">
    <Button label="Cancel" bgColor={CCLPastelColor.CLOUD_GREY} onClick={() => (open = false)} />
    <Button label="OK" bgColor={CCLVividColor.STRAWBERRY_PINK} onClick={() => (open = false)} />
  </svelte:fragment>
</Dialog>
        `.trim()
			}
		}
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		// 目的: ボタンでダイアログを開閉できること
		await step('ダイアログを開けること', async () => {
			const openBtn = canvas.getByRole('button', { name: 'Open' });
			await userEvent.click(openBtn);
			const dialog = await canvas.findByRole('dialog');
			await expect(dialog).toBeInTheDocument();
		});

		await step('×ボタンで閉じられること', async () => {
			const closeBtn = canvas.getByLabelText('Close dialog');
			await userEvent.click(closeBtn);
			const dialogAfter = canvas.queryByRole('dialog');
			await expect(dialogAfter).not.toBeInTheDocument();
		});
	}
};

export const CloseByEscAndOutside: Story = {
	render: () => ({ Component: DialogStoryWrapper }),
	args: {},
	parameters: {
		docs: {
			story: {
				height: '24vh'
			}
		}
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);

		// 目的: ESCキーと外側クリックで閉じられること
		const openBtn = canvas.getByRole('button', { name: 'Open' });
		await userEvent.click(openBtn);
		const dialog = await canvas.findByRole('dialog');
		await expect(dialog).toBeInTheDocument();

		await step('ESCキーで閉じられること', async () => {
			await userEvent.keyboard('{Escape}');
			await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
		});

		await step('外側クリックで閉じられること', async () => {
			await userEvent.click(openBtn);
			await expect(await canvas.findByRole('dialog')).toBeInTheDocument();
			// 背景（オーバーレイ）をクリック - クラス選択で確実に取得
			const backdrop = canvasElement.querySelector('.ccl-dialog-backdrop') as HTMLElement;
			await expect(backdrop).toBeTruthy();
			await userEvent.click(backdrop);
			await expect(canvas.queryByRole('dialog')).not.toBeInTheDocument();
		});
	}
};

export const AllColors: Story = {
	render: () => ({ Component: AllColorsDialogWrapper }),
	args: {},
	parameters: {
		docs: {
			source: {
				code: null
			}
		}
	}
};
