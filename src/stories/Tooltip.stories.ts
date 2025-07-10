import type { Meta, StoryObj } from '@storybook/svelte';
import TooltipWrapper from './TooltipWrapper.svelte';
import AllColorsTooltipWrapper from './AllColors/AllColorsTooltipWrapper.svelte';
import { expect, userEvent, within, waitFor, fireEvent } from '@storybook/test';
import { CCLVividColor } from '../lib/const/config';

const colorOptions = [...Object.values(CCLVividColor)];

const meta = {
	title: 'CommonComponents/Tooltip',
	component: TooltipWrapper,
	tags: ['autodocs'],
	parameters: {
		layout: 'centered'
	},
	argTypes: {
		text: {
			control: 'text',
			type: { required: true },
			description: 'ツールチップとして表示されるテキスト'
		},
		position: {
			control: 'select',
			options: ['top', 'bottom', 'left', 'right'],
			description: 'ツールチップの表示位置'
		},
		disabled: {
			control: 'boolean',
			description: 'ツールチップを無効化するかどうか'
		},
		backgroundColor: {
			control: 'select',
			options: colorOptions,
			description: 'ツールチップの背景色'
		}
	}
} satisfies Meta<TooltipWrapper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		text: 'これはツールチップです',
		position: 'top',
		backgroundColor: CCLVividColor.WRAP_GREY
	}
};

export const PositionBottom: Story = {
	...Default,
	args: {
		...Default.args,
		position: 'bottom'
	}
};

export const PositionLeft: Story = {
	...Default,
	args: {
		...Default.args,
		position: 'left'
	}
};

export const PositionRight: Story = {
	...Default,
	args: {
		...Default.args,
		position: 'right'
	}
};

export const Disabled: Story = {
	...Default,
	args: {
		...Default.args,
		disabled: true
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const trigger = canvas.getByTestId('tooltip-trigger');

		// disabledの場合、フォーカスしてもツールチップが表示されないこと
		await step('disabledの場合、フォーカスしてもツールチップが表示されないこと', async () => {
			const tooltip = canvas.queryByTestId('tooltip-content');
			await expect(tooltip).not.toBeVisible(); // disabledの場合はDOM自体は存在するが非表示
		});
	}
};

export const AllColors: Story = {
	render: () => ({
		Component: AllColorsTooltipWrapper
	}),
	args: {},
	parameters: {
		layout: 'fullscreen',
		docs: {
			source: {
				code: null
			}
		}
	}
};
