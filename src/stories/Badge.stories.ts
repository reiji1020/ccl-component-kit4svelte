import type { Meta, StoryObj } from '@storybook/svelte';
import { expect, within } from '@storybook/test';
import Badge from '$lib/Badge.svelte';
import { CCLVividColor, CCLPastelColor } from '$lib/const/config';
import AllColorsBadgeWrapper from './AllColors/AllColorsBadgeWrapper.svelte';

const colorOptions = [...Object.values(CCLVividColor), ...Object.values(CCLPastelColor)];

const meta = {
	title: 'CommonComponents/Badge',
	component: Badge,
	tags: ['autodocs'],
	parameters: { layout: 'padded' },
	argTypes: {
		color: { control: { type: 'select' }, options: colorOptions, description: 'バッジの背景色' },
		variant: {
			control: { type: 'radio' },
			options: ['solid', 'outline'],
			description: 'バッジのスタイル'
		},
		size: {
			control: { type: 'radio' },
			options: ['sm', 'md', 'lg'],
			description: 'バッジのサイズ'
		},
		label: { control: { type: 'text' }, description: '表示テキスト' },
		ariaLabel: { control: { type: 'text' }, description: 'アクセシビリティ用ラベル' }
	}
} satisfies Meta<Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

const createStory = (
	color: string,
	variant: 'solid' | 'outline',
	size: 'sm' | 'md' | 'lg',
	label: string
): Story => ({
	args: { color, variant, size, label },
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		await step('バッジのテキストが表示されていること', async () => {
			const el = await canvas.findByText(label);
			await expect(el).toBeInTheDocument();
		});
		await step('バリエーションとサイズの属性が設定されていること', async () => {
			const el = await canvas.findByText(label);
			const host = el.closest('.ccl-badge') as HTMLElement;
			await expect(host).toHaveAttribute('data-variant', variant);
			await expect(host).toHaveAttribute('data-size', size);
		});
		await step('色プロパティが設定されていること', async () => {
			await expect(args.color).toBe(color);
		});
	}
});

export const Default: Story = createStory(CCLVividColor.SODA_BLUE, 'solid', 'md', 'New');

export const Outline: Story = createStory(CCLVividColor.STRAWBERRY_PINK, 'outline', 'md', 'Beta');

export const LargePastel: Story = {
	args: { color: CCLPastelColor.LEMON_YELLOW, variant: 'solid', size: 'lg', label: 'Featured' },
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);
		await step('バッジのテキストが表示されていること', async () => {
			const el = await canvas.findByText('Featured');
			await expect(el).toBeInTheDocument();
		});
		await step('パステル指定時、テキスト色が同系統ビビッドに設定されること', async () => {
			const el = await canvas.findByText('Featured');
			const host = el.closest('.ccl-badge') as HTMLElement;
			await expect(host.getAttribute('data-variant')).toBe('solid');
			await expect(host.getAttribute('data-size')).toBe('lg');
			// inline style の --badge-fg が対応するビビッド色であること
			const fg = host.style.getPropertyValue('--badge-fg').trim();
			await expect(fg).toBe(`var(${CCLVividColor.PINEAPPLE_YELLOW})`);
			// 引数の color 自体はパステルが渡っていること
			await expect(args.color).toBe(CCLPastelColor.LEMON_YELLOW);
		});
	}
};

export const AllColors: Story = {
	render: () => ({ Component: AllColorsBadgeWrapper }),
	args: {},
	parameters: {
		docs: {
			source: { code: null }
		}
	}
};
