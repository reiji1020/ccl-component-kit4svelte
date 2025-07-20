import type { Meta, StoryObj } from '@storybook/svelte';
import ProgressBar from '../lib/ProgressBar.svelte';
import { expect, within } from '@storybook/test';
import { CCLVividColor, CCLPastelColor, ProgressBarHeight } from '../lib/const/config';

const colorOptions = [...Object.values(CCLVividColor), ...Object.values(CCLPastelColor)];

const meta = {
	title: 'CommonComponents/ProgressBar',
	component: ProgressBar,
	tags: ['autodocs'],
	parameters: {
		layout: 'padded'
	},
	argTypes: {
		value: {
			control: { type: 'range', min: 0, max: 100, step: 1 },
			description: '現在の進捗 (0-100)'
		},
		maxValue: {
			control: { type: 'number' },
			description: '最大値'
		},
		barColor: {
			control: { type: 'select' },
			options: colorOptions,
			description: 'プログレスバーの色'
		},
		backgroundColor: {
			control: { type: 'select' },
			options: colorOptions,
			description: 'プログレスバーの背景色'
		},
		height: {
			control: { type: 'select' },
			options: Object.values(ProgressBarHeight),
			description: 'プログレスバーの高さ'
		},
		containerWidth: {
			control: { type: 'text' },
			description: 'プログレスバー全体の幅 (例: "100%", "300px")'
		},
		isSticky: {
			control: { type: 'boolean' },
			description: 'ページ上部に固定表示するかどうか'
		},
		isRounded: {
			control: { type: 'boolean' },
			description: '角を丸くするかどうか'
		}
	}
} satisfies Meta<ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

import AllColorsProgressBarWrapper from './AllColors/AllColorsProgressBarWrapper.svelte';

export const Default: Story = {
	args: {
		value: 50,
		maxValue: 100,
		barColor: CCLVividColor.SODA_BLUE,
		backgroundColor: CCLPastelColor.SUGAR_BLUE,
		height: ProgressBarHeight.DEFAULT,
		containerWidth: '100%'
	},
	play: async ({ canvasElement, step, args }) => {
		const canvas = within(canvasElement);
		const progressBarContainer = canvas.getByRole('progressbar') as HTMLElement;
		const progressBar = progressBarContainer.querySelector('.progress-bar') as HTMLElement;

		await step('プログレスバーコンテナが表示されていること', async () => {
			await expect(progressBarContainer).toBeInTheDocument();
		});

		await step('aria属性が正しく設定されていること', async () => {
			await expect(progressBarContainer).toHaveAttribute('aria-valuenow', String(args.value));
			await expect(progressBarContainer).toHaveAttribute('aria-valuemin', '0');
			await expect(progressBarContainer).toHaveAttribute('aria-valuemax', String(args.maxValue));
		});

		await step('コンテナの幅と高さが指定通りであること', async () => {
			expect(progressBarContainer.style.width).toBe(args.containerWidth);
			expect(progressBarContainer.style.height).toBe(args.height);
		});

		await step('バーの幅(%)が正しく計算されてstyleに適用されていること', async () => {
			const expectedProgress = (args.value / args.maxValue) * 100;
			await expect(progressBar.style.width).toBe(`${expectedProgress}%`);
		});
	}
};

export const NotRounded: Story = {
	args: {
		...Default.args,
		isRounded: false
	},
	play: async ({ canvasElement, step, args }) => {
		const canvas = within(canvasElement);
		const progressBarContainer = canvas.getByRole('progressbar') as HTMLElement;

		await step('角が丸くなっていないこと', async () => {
			const styles = window.getComputedStyle(progressBarContainer);
			expect(styles.borderRadius).toBe('0px');
		});
	}
};

export const Sticky: Story = {
	args: {
		...Default.args,
		isSticky: true
	},
	play: async ({ canvasElement, step, args }) => {
		const canvas = within(canvasElement);
		const progressBarContainer = canvas.getByRole('progressbar') as HTMLElement;

		await step('ページ上部に固定されていること', async () => {
			const styles = window.getComputedStyle(progressBarContainer);
			expect(styles.position).toBe('fixed');
		});
	}
};

export const FullProgress: Story = {
	args: {
		value: 100,
		maxValue: 100,
		barColor: CCLVividColor.MELON_GREEN,
		backgroundColor: CCLPastelColor.LEMON_YELLOW,
		height: ProgressBarHeight.WIDE,
		containerWidth: '80%'
	},
	play: async ({ canvasElement, step, args }) => {
		const canvas = within(canvasElement);
		const progressBarContainer = canvas.getByRole('progressbar') as HTMLElement;
		const progressBar = progressBarContainer.querySelector('.progress-bar') as HTMLElement;

		await step('プログレスバーコンテナが表示されていること', async () => {
			await expect(progressBarContainer).toBeInTheDocument();
		});

		await step('aria属性が正しく設定されていること', async () => {
			await expect(progressBarContainer).toHaveAttribute('aria-valuenow', String(args.value));
			await expect(progressBarContainer).toHaveAttribute('aria-valuemin', '0');
			await expect(progressBarContainer).toHaveAttribute('aria-valuemax', String(args.maxValue));
		});

		await step('コンテナの幅と高さが指定通りであること', async () => {
			expect(progressBarContainer.style.width).toBe(args.containerWidth);
			expect(progressBarContainer.style.height).toBe(args.height);
		});

		await step('バーの幅(%)が正しく計算されてstyleに適用されていること', async () => {
			const expectedProgress = (args.value / args.maxValue) * 100;
			await expect(progressBar.style.width).toBe(`${expectedProgress}%`);
		});
	}
};

export const AllColors: Story = {
	render: () => ({ Component: AllColorsProgressBarWrapper }),
	args: {},
	parameters: {
		docs: {
			source: {
				code: null
			}
		}
	}
};
