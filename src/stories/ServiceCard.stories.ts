import type { Meta, StoryObj } from '@storybook/svelte';
import { within, userEvent, expect } from '@storybook/test';
import ServiceCard from '../lib/ServiceCard.svelte';
import { CCLVividColor } from '../lib/const/config';
import AllColorsServiceCardWrapper from './AllColors/AllColorsServiceCardWrapper.svelte';

const colorOptions = [
	CCLVividColor.STRAWBERRY_PINK,
	CCLVividColor.PINEAPPLE_YELLOW,
	CCLVividColor.SODA_BLUE,
	CCLVividColor.MELON_GREEN,
	CCLVividColor.GRAPE_PURPLE,
	CCLVividColor.WRAP_GREY
];

const meta = {
	title: 'CommonComponents/ServiceCard',
	component: ServiceCard,
	tags: ['autodocs'],
	argTypes: {
		serviceName: { control: 'text' },
		description: { control: 'text' },
		imageUrl: { control: 'text' },
		altText: { control: 'text' },
		linkUrl: { control: 'text' },
		borderColor: {
			control: { type: 'select' },
			options: colorOptions
		}
	}
} satisfies Meta<ServiceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		serviceName: 'オンライン学習プラットフォーム',
		description:
			'この素晴らしいサービスについての説明です。あなたの学習体験を次のレベルに引き上げます。',
		imageUrl: 'thumbnail.png',
		altText: 'オンライン学習プラットフォームのサムネイル',
		linkUrl: 'https://example.com',
		borderColor: CCLVividColor.STRAWBERRY_PINK
	},
	parameters: {
		docs: {
			source: {
				code: `
<script>
    import { ServiceCard } from 'cclkit4svelte';
    import { CCLVividColor } from 'cclkit4svelte';
</script>

<ServiceCard
    serviceName="オンライン学習プラットフォーム"
    description="この素晴らしいサービスについての説明です。あなたの学習体験を次のレベルに引き上げます。"
    imageUrl="thumbnail.png"
    altText="オンライン学習プラットフォームのサムネイル"
    linkUrl="https://example.com"
    borderColor={CCLVividColor.STRAWBERRY_PINK}
/>
`
			}
		}
	},
	play: async ({ args, canvasElement, step }) => {
		const canvas = within(canvasElement);

		const serviceName = canvas.getByText('オンライン学習プラットフォーム');
		const description = canvas.getByText(
			'この素晴らしいサービスについての説明です。あなたの学習体験を次のレベルに引き上げます。'
		);

		await step('サービス名が表示されていること', async () => {
			await expect(serviceName).toBeInTheDocument();
		});
		await step('説明文が表示されていること', async () => {
			await expect(description).toBeInTheDocument();
		});
		await step('指定した枠線の色が正しいこと', async () => {
			await expect(args.borderColor).toBe(CCLVividColor.STRAWBERRY_PINK);
		});
	}
};

Default.storyName = 'Default';

export const NoLink: Story = {
	args: {
		serviceName: '社内向けツール',
		description: 'このツールには外部リンクがありません。',
		imageUrl: 'thumbnail.png',
		altText: '社内向けツールのアイコン',
		borderColor: CCLVividColor.WRAP_GREY
	},
	parameters: {
		docs: {
			source: {
				code: `
<script>
    import { ServiceCard } from 'cclkit4svelte';
    import { CCLVividColor } from 'cclkit4svelte';
</script>

<ServiceCard
    serviceName="社内向けツール"
    description="このツールには外部リンクがありません。"
    imageUrl="thumbnail.png"
    altText="社内向けツールのアイコン"
    borderColor={CCLVividColor.WRAP_GREY}
/>
`
			}
		}
	},
	play: async ({ canvasElement, step }) => {
		const canvas = within(canvasElement);
		const serviceName = canvas.getByText('社内向けツール');
		await step('サービス名が表示されていること', async () => {
			await expect(serviceName).toBeInTheDocument();
		});

		const cardElement = canvas.getByText('社内向けツール').closest('.service-card');
		await step('リンクが設定されていないこと', async () => {
			await expect(cardElement).not.toHaveAttribute('href');
		});
	}
};
NoLink.storyName = 'NoLink';

export const AllColors: Story = {
	render: () => ({ Component: AllColorsServiceCardWrapper }),
	args: {},
	parameters: {
		docs: {
			source: {
				code: `
<script>
    import { ServiceCard } from 'cclkit4svelte';
    import { CCLVividColor } from 'cclkit4svelte';
</script>

<div style="display: flex; flex-direction: column; gap: 20px;">
    <ServiceCard borderColor={CCLVividColor.STRAWBERRY_PINK} serviceName="ピンク" description="..." imageUrl="thumbnail.png" altText="..." />
    <ServiceCard borderColor={CCLVividColor.PINEAPPLE_YELLOW} serviceName="イエロー" description="..." imageUrl="thumbnail.png" altText="..." />
    <ServiceCard borderColor={CCLVividColor.SODA_BLUE} serviceName="ブルー" description="..." imageUrl="thumbnail.png" altText="..." />
    <ServiceCard borderColor={CCLVividColor.MELON_GREEN} serviceName="グリーン" description="..." imageUrl="thumbnail.png" altText="..." />
    <ServiceCard borderColor={CCLVividColor.GRAPE_PURPLE} serviceName="パープル" description="..." imageUrl="thumbnail.png" altText="..." />
    <ServiceCard borderColor={CCLVividColor.WRAP_GREY} serviceName="グレー" description="..." imageUrl="thumbnail.png" altText="..." />
</div>
`
			}
		}
	}
};
