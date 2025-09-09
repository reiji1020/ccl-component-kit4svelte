import type { Meta, StoryObj } from '@storybook/svelte';
import { within, userEvent, expect } from '@storybook/test';
import Header from '$lib/Header.svelte';
import { CCLVividColor, HeaderHeight } from '$lib/const/config';
import HeaderWithDrawerWrapper from './HeaderWithDrawerWrapper.svelte';

const colorOptions = [
	CCLVividColor.STRAWBERRY_PINK,
	CCLVividColor.PINEAPPLE_YELLOW,
	CCLVividColor.SODA_BLUE,
	CCLVividColor.MELON_GREEN,
	CCLVividColor.GRAPE_PURPLE,
	CCLVividColor.WRAP_GREY
];

const heightOptions = [HeaderHeight.NALLOW, HeaderHeight.NORMAL, HeaderHeight.WIDE];

const meta = {
	title: 'Compositions/HeaderWithDrawer',
	component: Header,
	tags: ['autodocs'],
	parameters: { layout: 'fullscreen' },
	argTypes: {
		bgColor: { control: { type: 'select' }, options: colorOptions },
		height: { control: { type: 'select' }, options: heightOptions },
		side: { control: { type: 'radio' }, options: ['left', 'right', 'top', 'bottom'] },
		size: { control: { type: 'text' } }
	}
} satisfies Meta<Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	render: (args) => ({ Component: HeaderWithDrawerWrapper, props: args }),
	args: {
		bgColor: CCLVividColor.STRAWBERRY_PINK,
		height: HeaderHeight.NORMAL,
		side: 'left',
		size: '320px'
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const getDialog = () => canvas.getByRole('dialog', { hidden: true });
		await step('初期状態ではドロワーが閉じていること', async () => {
			await expect(getDialog()).toHaveAttribute('aria-hidden', 'true');
		});
		await step('ハンバーガーアイコンで開くこと', async () => {
			await userEvent.click(canvas.getByRole('button', { name: /メニューを開く/i }));
			await expect(canvas.getByRole('dialog')).toHaveAttribute('aria-hidden', 'false');
		});
		await step('Backdropクリックで閉じること', async () => {
			const backdrop = canvas.getByTestId('drawer-backdrop');
			await userEvent.click(backdrop);
			await expect(getDialog()).toHaveAttribute('aria-hidden', 'true');
		});
	}
};
